import { CollectionConfig } from 'payload'

export const Units: CollectionConfig = {
  slug: 'units',
  labels: {
    singular: 'Mieszkanie',
    plural: 'Mieszkania',
  },
  admin: {
    useAsTitle: 'unitNumber',
    defaultColumns: ['unitNumber', 'area', 'price', 'status'],
  },
  access: {
    read: () => true, // Public read for website
    create: ({ req: { user } }) => Boolean(user), // Only logged in users
    update: ({ req: { user } }) => Boolean(user), // Only logged in users
    delete: ({ req: { user } }) => Boolean(user), // Only logged in users
  },
  fields: [
    {
      name: 'unitNumber',
      label: 'Numer Mieszkania',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Unikalny numer mieszkania (np. A-1, B-2)',
        placeholder: 'A-1',
      },
    },
    {
      name: 'building',
      label: 'Budynek',
      type: 'text',
      required: true,
      admin: {
        description: 'Nazwa lub numer budynku',
        placeholder: 'Budynek A',
      },
    },
    {
      name: 'floor',
      label: 'Piętro',
      type: 'number',
      required: true,
      admin: {
        description: 'Numer piętra',
      },
    },
    {
      name: 'area',
      label: 'Powierzchnia (m²)',
      type: 'number',
      required: true,
      admin: {
        description: 'Powierzchnia mieszkania w metrach kwadratowych',
        placeholder: '50',
      },
    },
    {
      name: 'price',
      label: 'Cena (PLN)',
      type: 'number',
      required: true,
      admin: {
        description: 'Cena mieszkania w złotych',
        placeholder: '500000',
      },
    },
    {
      name: 'pricePerM2',
      label: 'Cena za m² (PLN)',
      type: 'number',
      admin: {
        readOnly: true,
        description: 'Automatycznie obliczana cena za metr kwadratowy',
      },
    },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      required: true,
      defaultValue: 'available',
      options: [
        { label: 'Dostępne', value: 'available' },
        { label: 'Sprzedane', value: 'sold' },
        { label: 'Zarezerwowane', value: 'reserved' },
      ],
      admin: {
        description: 'Status dostępności mieszkania',
      },
    },
    {
      name: 'planUrl',
      label: 'Link do planu (PDF)',
      type: 'text',
      admin: {
        description: 'Opcjonalny link do planu mieszkania',
        placeholder: '/assets/plans/mieszkanie-a-1.pdf',
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        // Auto-calculate price per square meter
        if (data.area && data.price && data.area > 0) {
          data.pricePerM2 = Math.round(data.price / data.area);
        }
        return data;
      },
    ],
  },
}
