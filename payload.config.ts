import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { resendAdapter } from '@payloadcms/email-resend'
import path from 'path'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Units } from './collections/Units'
import { ContactMessages } from './collections/ContactMessages'
import { SiteSettings } from './collections/SiteSettings'

// Walidacja i konstrukcja DATABASE_URI
function getDatabaseUri(): string {
  let databaseUri = process.env.DATABASE_URI;
  
  // Sprawdź czy DATABASE_URI używa Direct Connection (niepożądane dla serverless)
  if (databaseUri && databaseUri.includes('db.rrpzjktpdgpmmgmyxywn.supabase.co')) {
    console.log('DATABASE_URI uses Direct Connection, switching to Transaction Pooler');
    databaseUri = undefined; // Wymuś użycie Transaction Pooler
  }
  
  // Jeśli DATABASE_URI nie istnieje lub używa Direct Connection, skonstruuj z Supabase
  if (!databaseUri && process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY) {
    try {
      const supabaseUrl = new URL(process.env.SUPABASE_URL);
      // Użyj Transaction Pooler dla serverless
      const hostname = 'aws-1-eu-central-1.pooler.supabase.com';
      const port = 6543;
      const user = 'postgres.rrpzjktpdgpmmgmyxywn';
      // Użyj hasła z panelu Supabase zamiast SUPABASE_ANON_KEY
      const password = 'vp2TAY$w!EM#4E9f';
      
      databaseUri = `postgresql://${user}:${encodeURIComponent(password)}@${hostname}:${port}/postgres`;
      console.log('Constructed DATABASE_URI from Supabase with Transaction Pooler');
    } catch (error) {
      console.error('Failed to construct DATABASE_URI from Supabase:', error);
    }
  }
  
  if (!databaseUri) {
    throw new Error('DATABASE_URI not configured and cannot construct from Supabase');
  }
  
  // Walidacja formatu URL
  try {
    new URL(databaseUri);
    console.log('DATABASE_URI validation passed:', databaseUri.substring(0, 50) + '...');
  } catch (error) {
    console.error('Invalid DATABASE_URI format:', error);
    throw new Error('Invalid DATABASE_URI format');
  }
  
  return databaseUri;
}

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || 'your-secret-here',
  admin: {
    user: Users.slug,
    routes: {
      login: '/login',
      logout: '/logout',
      account: '/account',
      createFirstUser: '/create-first-user',
      forgot: '/forgot',
      reset: '/reset',
    },
    meta: {
      titleSuffix: '- Harmonia Rząska CMS',
    },
    components: {
      beforeDashboard: [],
      afterDashboard: [],
    },
    // Fix for Next.js 15 App Router
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  editor: lexicalEditor({}),
  collections: [Users, Media, Units, ContactMessages],
  globals: [SiteSettings],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [],
  email: resendAdapter({
    defaultFromAddress: process.env.RESEND_FROM_EMAIL || 'noreply@harmonia-rzaska.pl',
    defaultFromName: 'Harmonia Rząska',
    apiKey: process.env.RESEND_API_KEY || '',
  }),
  // Cookie settings dla Vercel
  cookiePrefix: 'payload',
  
  // CORS dla admin panel
  cors: [
    'https://new-generation-app-real-estate.vercel.app',
    'http://localhost:3000'
  ],
  
  // CSRF dla Vercel
  csrf: [
    'https://new-generation-app-real-estate.vercel.app',
    'http://localhost:3000'
  ],
  // Fix for Next.js 15 App Router
  routes: {
    admin: '/admin',
    api: '/api',
    graphQL: '/api/graphql',
    graphQLPlayground: '/api/graphql-playground',
  },
  // WAŻNE: Database sessions zamiast memory
  db: postgresAdapter({
    pool: {
      connectionString: getDatabaseUri(),
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
    },
  }),
})
