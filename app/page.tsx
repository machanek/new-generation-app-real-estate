import { Metadata } from 'next'
import { css } from '@/styled-system/css'
import SiteHeader from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import UnitsSectionWithState from '@/components/UnitsSectionWithState'
import AboutSection from '@/components/AboutSection'
import ArchitectureSection from '@/components/ArchitectureSection'
import ContactForm from '@/components/ContactForm'
import { HeroSection } from '@/components/HeroSection'
import { getPayload } from 'payload'
import config from '@payload-config'

export const metadata: Metadata = {
  title: 'Harmonia Rząska - Nowoczesne Osiedle Mieszkaniowe',
  description: 'Odkryj nowoczesne mieszkania w osiedlu Harmonia Rząska. Komfort, jakość i harmonia z otoczeniem w jednym miejscu.',
}

export default async function HomePage() {
  // Fetch units from Payload CMS instead of static files
  const payload = await getPayload({ config })
  
  const unitsResult = await payload.find({
    collection: 'units',
    limit: 100, // Get all units
  })

  // Fetch site settings for hero images
  const siteSettings = await payload.findGlobal({
    slug: 'site-settings',
  })
  
  // Map Payload CMS data to Unit type
  const units = unitsResult.docs.map((unit: Record<string, unknown>) => ({
    id: String(unit.id),
    unit: String(unit.unit || unit.nr_lokalu || ''),
    building: String(unit.building || unit.nr_budynku || ''),
    floor: Number(unit.floor || unit.pietro || 0),
    area: Number(unit.area || unit.powierzchnia || 0),
    price: Number(unit.price || unit.cena || 0),
    pricePerM2: Number(unit.pricePerM2 || unit.cena_m2 || 0),
    status: String(unit.status || 'available') as 'available' | 'sold' | 'reserved',
    planUrl: String(unit.planUrl || unit.plan_url || ''),
    unitPageUrl: String(unit.unitPageUrl || ''),
    createdAt: String(unit.createdAt || new Date().toISOString()),
    updatedAt: String(unit.updatedAt || new Date().toISOString())
  }))

  // Prepare hero image from site settings
  const heroImage = siteSettings?.heroImages?.[0] ? {
    url: siteSettings.heroImages[0].url || '',
    alt: siteSettings.heroImages[0].alt || 'Harmonia Rząska'
  } : undefined

  return (
    <div 
      style={{ minHeight: '100vh' }}
      className={css({
        backgroundColor: 'white'
      })}
    >
      <SiteHeader />
      
      <HeroSection heroImage={heroImage} />
      
      <main 
        style={{ maxWidth: '1200px', margin: '0 auto' }}
        className={css({
        paddingX: '6',
        paddingY: '8'
      })}>

        <UnitsSectionWithState units={units} />
        
        <AboutSection />
        
        <ArchitectureSection />
        
        <section className={css({
          paddingX: '0',
          paddingY: '16'
        })}>
          <div 
            style={{ maxWidth: '896px', margin: '0 auto' }}
          >
            <h2 className={css({
              fontSize: '3xl',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '8'
            })}>Skontaktuj się z nami</h2>
             <ContactForm />
          </div>
        </section>
      </main>
      
      <SiteFooter />
    </div>
  )
}
