import { CollectionConfig } from 'payload'

export const Units: CollectionConfig = {
  slug: 'units',
  labels: {
    singular: 'Mieszkanie',
    plural: 'Mieszkania',
  },
  admin: {
    useAsTitle: 'apartment',
    defaultColumns: ['apartment', 'area', 'price', 'status'],
  },
  access: {
    read: () => true, // Public read for website
  },
  fields: [
    {
      name: 'unitId',
      label: 'ID Mieszkania',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'building',
      label: 'Budynek',
      type: 'text',
      required: true,
    },
    {
      name: 'apartment',
      label: 'Numer Mieszkania',
      type: 'text',
      required: true,
    },
    {
      name: 'floor',
      label: 'Piętro',
      type: 'number',
      required: true,
    },
    {
      name: 'area',
      label: 'Powierzchnia (m²)',
      type: 'number',
      required: true,
    },
    {
      name: 'extras',
      label: 'Dodatki',
      type: 'textarea',
      admin: {
        placeholder: 'np. Balkon, komórka lokatorska',
      },
    },
    {
      name: 'price',
      label: 'Cena (PLN)',
      type: 'number',
      required: true,
    },
    {
      name: 'pricePerSqm',
      label: 'Cena za m² (PLN)',
      type: 'number',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      required: true,
      defaultValue: 'available',
      options: [
        { label: 'Wolne', value: 'available' },
        { label: 'Sprzedane', value: 'sold' },
        { label: 'Rezerwacja', value: 'reserved' },
      ],
    },
    {
      name: 'planUrl',
      label: 'Link do planu (PDF)',
      type: 'text',
      admin: {
        placeholder: '/assets/plans/1-a-1.pdf',
      },
    },
    {
      name: 'slug',
      label: 'URL Slug',
      type: 'text',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
      hooks: {
        beforeValidate: [
          ({ data }) => {
            if (data?.building && data?.apartment && data?.area) {
              return `mieszkanie-${data.building}-${data.apartment}-${data.area}m2-rzaska`
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^a-z0-9\-]/g, '');
            }
          },
        ],
      },
    },
    {
      name: 'images',
      type: 'relationship',
      relationTo: 'media',
      hasMany: true,
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        // Auto-calculate price per sqm
        if (data.price && data.area) {
          data.pricePerSqm = Math.round(data.price / data.area);
        }
        return data;
      },
    ],
  },
}
