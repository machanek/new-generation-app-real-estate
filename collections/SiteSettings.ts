import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: {
    read: () => true,
    update: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true,
      defaultValue: 'Harmonia Rząska',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'contactPhone',
      type: 'text',
      required: true,
    },
    {
      name: 'contactEmail',
      type: 'email',
      required: true,
    },
    {
      name: 'address',
      type: 'text',
      required: true,
    },
    {
      name: 'heroImages',
      type: 'relationship',
      relationTo: 'media',
      hasMany: true,
      maxRows: 3,
    },
    {
      name: 'galleryImages',
      type: 'relationship',
      relationTo: 'media',
      hasMany: true,
    },
    {
      name: 'seoTitle',
      type: 'text',
    },
    {
      name: 'seoDescription',
      type: 'textarea',
    },
  ],
}
