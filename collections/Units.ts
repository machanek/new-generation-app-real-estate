import { CollectionConfig } from 'payload'

export const Units: CollectionConfig = {
  slug: 'units',
  labels: {
    singular: 'Mieszkanie',
    plural: 'Mieszkania',
  },
  admin: {
    useAsTitle: 'unit',
    defaultColumns: ['unit', 'area', 'price', 'status'],
  },
  access: {
    read: () => true, // Public read for website
    create: () => true, // Allow creation for all authenticated users
    update: () => true, // Allow update for all authenticated users  
    delete: () => true, // Allow delete for all authenticated users
  },
  fields: [
    {
      name: 'unit',
      label: 'Numer Mieszkania',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Wprowadź numer mieszkania (np. A-1, B-2)',
      },
    },
    {
      name: 'building',
      label: 'Budynek',
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
      name: 'price',
      label: 'Cena (PLN)',
      type: 'number',
      required: true,
    },
    // {
    //   name: 'pricePerM2',
    //   label: 'Cena za m² (PLN)',
    //   type: 'number',
    //   admin: {
    //     readOnly: true,
    //   },
    // },
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
  ],
  // hooks: {
  //   beforeChange: [
  //     ({ data }) => {
  //       // Auto-calculate price per sqm only
  //       if (data.price && data.area) {
  //         data.pricePerM2 = Math.round(data.price / data.area);
  //       }
  //       return data;
  //     },
  //   ],
  // },
}
