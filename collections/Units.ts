import { CollectionConfig } from 'payload'

export const Units: CollectionConfig = {
  slug: 'units',
  labels: {
    singular: 'Mieszkanie',
    plural: 'Mieszkania',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'area', 'price', 'status'],
  },
  access: {
    read: () => true, // Public read for website
    create: () => true, // Allow creation for all authenticated users
    update: () => true, // Allow update for all authenticated users  
    delete: () => true, // Allow delete for all authenticated users
  },
  fields: [
    {
      name: 'title',
      label: 'Tytuł',
      type: 'text',
      required: true,
      admin: {
        description: 'Nazwa mieszkania (np. Mieszkanie A-1)',
      },
    },
    {
      name: 'area',
      label: 'Powierzchnia (m²)',
      type: 'number',
      required: true,
    },
    {
      name: 'price',
      label: 'Cena (PLN)',
      type: 'number',
      required: true,
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
  ],
}
