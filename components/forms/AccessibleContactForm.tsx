'use client';

import React, { useState } from 'react';
import {
  Form,
  TextField,
  TextArea,
  Button,
  Checkbox,
  Label,
  Input,
  FieldError,
  Group,
  Header
} from 'react-aria-components';
import { useContactForm } from '@/hooks/useContactForm';
// import type { ContactFormData } from '@/types/contact'; // Unused import removed

// Simple form styles
const formStyles = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '32px',
  backgroundColor: 'white',
  borderRadius: '8px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
};

const fieldStyles = {
  marginBottom: '24px'
};

const labelStyles = {
  display: 'block',
  fontSize: '14px',
  fontWeight: '600',
  color: '#374151',
  marginBottom: '8px'
};

const inputStyles = {
  width: '100%',
  padding: '12px 16px',
  border: '1px solid #D1D5DB',
  borderRadius: '6px',
  fontSize: '16px',
  color: '#1F2937',
  backgroundColor: 'white',
  transition: 'border-color 0.2s ease'
};

const textareaStyles = {
  ...inputStyles,
  minHeight: '120px',
  resize: 'vertical' as const
};

const buttonStyles = {
  padding: '12px 24px',
  backgroundColor: '#065F46',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  fontSize: '16px',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.2s ease'
};

const errorStyles = {
  color: '#EF4444',
  fontSize: '14px',
  marginTop: '4px'
};

const successStyles = {
  color: '#10B981',
  fontSize: '14px',
  marginTop: '4px'
};

export default function AccessibleContactForm() {
  const { submitForm, isSubmitting, isSuccess, error } = useContactForm();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    privacy: false,
    marketing: false
  });

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm(formData);
  };

  return (
    <Form onSubmit={handleSubmit} style={formStyles}>
      <Header>
        <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#1F2937', marginBottom: '8px' }}>
          Skontaktuj się z nami
        </h2>
        <p style={{ fontSize: '16px', color: '#6B7280', marginBottom: '32px' }}>
          Wypełnij formularz, a skontaktujemy się z Tobą w ciągu 24 godzin.
        </p>
      </Header>

      <TextField name="name" isRequired>
        <Label style={labelStyles}>Imię i nazwisko *</Label>
        <Input
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          style={inputStyles}
          placeholder="Wprowadź swoje imię i nazwisko"
          required
        />
        <FieldError style={errorStyles} />
      </TextField>

      <TextField name="email" type="email" isRequired>
        <Label style={labelStyles}>Adres email *</Label>
        <Input
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          style={inputStyles}
          placeholder="Wprowadź swój adres email"
          required
        />
        <FieldError style={errorStyles} />
      </TextField>

      <TextField name="phone">
        <Label style={labelStyles}>Numer telefonu</Label>
        <Input
          value={formData.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          style={inputStyles}
          placeholder="Wprowadź swój numer telefonu"
        />
        <FieldError style={errorStyles} />
      </TextField>

      <TextField name="subject" isRequired>
        <Label style={labelStyles}>Temat *</Label>
        <Input
          value={formData.subject}
          onChange={(e) => handleChange('subject', e.target.value)}
          style={inputStyles}
          placeholder="Wprowadź temat wiadomości"
          required
        />
        <FieldError style={errorStyles} />
      </TextField>

      <TextField name="message" isRequired>
        <Label style={labelStyles}>Wiadomość *</Label>
        <TextArea
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          style={textareaStyles}
          placeholder="Wprowadź treść wiadomości"
          required
        />
        <FieldError style={errorStyles} />
      </TextField>

      <Group style={fieldStyles}>
        <Checkbox
          isSelected={formData.privacy}
          onChange={(isSelected) => handleChange('privacy', isSelected)}
        >
          <Label style={{ fontSize: '14px', color: '#374151', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            <span style={{ marginTop: '2px' }}>✓</span>
            Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z polityką prywatności *
          </Label>
        </Checkbox>
        <FieldError style={errorStyles} />
      </Group>

      <Group style={fieldStyles}>
        <Checkbox
          isSelected={formData.marketing}
          onChange={(isSelected) => handleChange('marketing', isSelected)}
        >
          <Label style={{ fontSize: '14px', color: '#374151', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            <span style={{ marginTop: '2px' }}>✓</span>
            Chcę otrzymywać informacje marketingowe o nowych ofertach
          </Label>
        </Checkbox>
      </Group>

      {error && (
        <div style={errorStyles}>
          {error}
        </div>
      )}

      {isSuccess && (
        <div style={successStyles}>
          Wiadomość została wysłana pomyślnie!
        </div>
      )}

      <Button
        type="submit"
        isDisabled={isSubmitting}
        style={{
          ...buttonStyles,
          backgroundColor: isSubmitting ? '#9CA3AF' : '#065F46',
          cursor: isSubmitting ? 'not-allowed' : 'pointer'
        }}
      >
        {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
      </Button>
    </Form>
  );
}