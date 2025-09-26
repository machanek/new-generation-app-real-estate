import { CollectionConfig } from 'payload'

export const Units: CollectionConfig = {
  slug: 'units',
  labels: {
    singular: 'Mieszkanie',
    plural: 'Mieszkania',
  },
  admin: {
    useAsTitle: 'id',
    defaultColumns: ['id', 'created_at'],
  },
  access: {
    read: () => true, // Public read for website
    create: () => true, // Allow creation for all authenticated users
    update: () => true, // Allow update for all authenticated users  
    delete: () => true, // Allow delete for all authenticated users
  },
  fields: [
    {
      name: 'name',
      label: 'Nazwa',
      type: 'text',
      required: true,
    },
  ],
}
