import { CollectionConfig } from 'payload'

export const ContactMessages: CollectionConfig = {
  slug: 'contact-messages',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'subject', 'createdAt'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'subject',
      type: 'text',
      required: false,
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'privacy',
      type: 'checkbox',
      required: true,
    },
    {
      name: 'marketing',
      type: 'checkbox',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          label: 'Nowe',
          value: 'new',
        },
        {
          label: 'W trakcie',
          value: 'in-progress',
        },
        {
          label: 'Zamknięte',
          value: 'closed',
        },
      ],
      defaultValue: 'new',
      required: true,
    },
  ],
}
