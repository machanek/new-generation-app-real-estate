'use client';

import React, { useState } from 'react';
import { 
  Form, 
  TextField, 
  Button, 
  Checkbox, 
  TextArea,
  Label,
  Input,
  FieldError,
  Group,
  Header
} from 'react-aria-components';
import { styled } from '@/lib/stitches.config';
import { useContactForm } from '@/hooks/useContactForm';
import type { ContactFormData } from '@/types/contact';

// Styled components for React Aria
const StyledForm = styled(Form, {
  backgroundColor: '$background',
  padding: '$6',
  borderRadius: '$4',
  boxShadow: '$2',
  maxWidth: '600px',
  margin: '0 auto',
});

const FormHeader = styled(Header, {
  marginBottom: '$6',
  textAlign: 'center',
});

const FormTitle = styled('h3', {
  fontSize: '$6',
  fontWeight: '$4',
  color: '$textDark',
  marginBottom: '$2',
});

const FormDescription = styled('p', {
  fontSize: '$3',
  color: '$textLight',
  margin: 0,
});

const FormGrid = styled(Group, {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$4',
  marginBottom: '$6',
  
  '@md': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
});

const FormField = styled(Group, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
});

const FormLabel = styled(Label, {
  fontSize: '$2',
  fontWeight: '$2',
  color: '$textDark',
  display: 'block',
});

const FormInput = styled(Input, {
  padding: '$2 $3',
  border: '1px solid $border',
  borderRadius: '$2',
  fontSize: '$3',
  fontFamily: '$primary',
  backgroundColor: '$background',
  transition: 'all 0.3s ease',
  width: '100%',
  
  '&:focus': {
    outline: 'none',
    borderColor: '$primary',
    boxShadow: '0 0 0 2px rgba(31, 61, 50, 0.1)',
  },
  
  '&[aria-invalid="true"]': {
    borderColor: '$error',
  },
});

const FormTextArea = styled(TextArea, {
  padding: '$2 $3',
  border: '1px solid $border',
  borderRadius: '$2',
  fontSize: '$3',
  fontFamily: '$primary',
  backgroundColor: '$background',
  minHeight: '120px',
  resize: 'vertical',
  transition: 'all 0.3s ease',
  width: '100%',
  
  '&:focus': {
    outline: 'none',
    borderColor: '$primary',
    boxShadow: '0 0 0 2px rgba(31, 61, 50, 0.1)',
  },
  
  '&[aria-invalid="true"]': {
    borderColor: '$error',
  },
});


const FormCheckbox = styled(Checkbox, {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  cursor: 'pointer',
  fontSize: '$2',
  color: '$textDark',
  
  '& [data-indicator]': {
    width: '$4',
    height: '$4',
    border: '2px solid $border',
    borderRadius: '$1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
  },
  
  '&[data-selected] [data-indicator]': {
    backgroundColor: '$primary',
    borderColor: '$primary',
    color: '$textWhite',
  },
  
  '&:focus [data-indicator]': {
    boxShadow: '0 0 0 2px rgba(31, 61, 50, 0.1)',
  },
});

const FormButton = styled(Button, {
  backgroundColor: '$primary',
  color: '$textWhite',
  border: 'none',
  borderRadius: '$2',
  padding: '$3 $6',
  fontSize: '$3',
  fontWeight: '$3',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  minHeight: '44px',
  
  '&:hover': {
    backgroundColor: '$primaryDark',
  },
  
  '&:focus': {
    outline: 'none',
    boxShadow: '0 0 0 2px rgba(31, 61, 50, 0.1)',
  },
  
  '&[data-pressed]': {
    transform: 'translateY(1px)',
  },
  
  '&[data-disabled]': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
});

const ErrorMessage = styled(FieldError, {
  color: '$error',
  fontSize: '$1',
  marginTop: '$1',
});

const SuccessMessage = styled('div', {
  backgroundColor: '$success',
  color: '$textWhite',
  padding: '$3 $4',
  borderRadius: '$2',
  marginBottom: '$4',
  textAlign: 'center',
  fontSize: '$2',
  fontWeight: '$3',
});

const LoadingSpinner = styled('div', {
  width: '$4',
  height: '$4',
  border: '2px solid transparent',
  borderTop: '2px solid currentColor',
  borderRadius: '50%',
  animation: 'spin 1s linear infinite',
  
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
});

const CheckboxGroup = styled(Group, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  marginBottom: '$6',
});

const FormDivider = styled('hr', {
  border: 'none',
  borderTop: '1px solid $borderLight',
  margin: '$4 0',
});

export default function AccessibleContactForm() {
  const { isSubmitting, isSuccess, error, submitForm, reset } = useContactForm();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
    privacy: false,
    marketing: false,
  });


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await submitForm(formData);
    if (success) {
      // Reset form after successful submission
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
        privacy: false,
        marketing: false,
      });
    }
  };

  const handleInputChange = (field: keyof ContactFormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  if (isSuccess) {
    return (
      <StyledForm>
        <SuccessMessage>
          ✅ Wiadomość została wysłana pomyślnie! Skontaktujemy się z Tobą wkrótce.
        </SuccessMessage>
        <FormButton onPress={reset}>
          Wyślij kolejną wiadomość
        </FormButton>
      </StyledForm>
    );
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormHeader>
        <FormTitle>Skontaktuj się z nami</FormTitle>
        <FormDescription>
          Masz pytania o dostępne lokale? Chcesz umówić się na prezentację? Napisz do nas!
        </FormDescription>
      </FormHeader>

      <FormGrid>
        <FormField>
          <FormLabel>Imię i nazwisko *</FormLabel>
          <TextField 
            value={formData.name}
            onChange={(value) => handleInputChange('name', value)}
            isRequired
            isInvalid={!formData.name && formData.name !== ''}
          >
            <FormInput placeholder="Jan Kowalski" />
            <ErrorMessage />
          </TextField>
        </FormField>

        <FormField>
          <FormLabel>Telefon *</FormLabel>
          <TextField 
            value={formData.phone}
            onChange={(value) => handleInputChange('phone', value)}
            isRequired
            isInvalid={!formData.phone && formData.phone !== ''}
          >
            <FormInput type="tel" placeholder="+48 600 000 000" />
            <ErrorMessage />
          </TextField>
        </FormField>

        <FormField>
          <FormLabel>E-mail *</FormLabel>
          <TextField 
            value={formData.email}
            onChange={(value) => handleInputChange('email', value)}
            isRequired
            isInvalid={!formData.email && formData.email !== ''}
          >
            <FormInput type="email" placeholder="jan@example.com" />
            <ErrorMessage />
          </TextField>
        </FormField>

        <FormField>
          <FormLabel>Temat (opcjonalnie)</FormLabel>
          <TextField 
            value={formData.subject}
            onChange={(value) => handleInputChange('subject', value)}
          >
            <FormInput placeholder="Pytanie o mieszkanie" />
            <ErrorMessage />
          </TextField>
        </FormField>
      </FormGrid>

      <FormField>
        <FormLabel>Wiadomość *</FormLabel>
        <TextField 
          value={formData.message}
          onChange={(value) => handleInputChange('message', value)}
          isRequired
          isInvalid={!formData.message && formData.message !== ''}
        >
          <FormTextArea placeholder="Treść wiadomości..." />
          <ErrorMessage />
        </TextField>
      </FormField>

      <FormDivider />

      <CheckboxGroup>
        <FormCheckbox
          isSelected={formData.privacy}
          onChange={(isSelected) => handleInputChange('privacy', isSelected)}
          isRequired
        >
          <div data-indicator />
          <div>
            Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z Polityką prywatności w celu odpowiedzi na zapytanie. *
          </div>
        </FormCheckbox>

        <FormCheckbox
          isSelected={formData.marketing}
          onChange={(isSelected) => handleInputChange('marketing', isSelected)}
        >
          <div data-indicator />
          <div>
            Wyrażam zgodę na otrzymywanie informacji marketingowych o ofercie Harmonia Rząska.
          </div>
        </FormCheckbox>
      </CheckboxGroup>

      {error && (
        <ErrorMessage>
          {error}
        </ErrorMessage>
      )}

      <FormButton 
        type="submit" 
        isDisabled={isSubmitting || !formData.privacy}
      >
        {isSubmitting && <LoadingSpinner />}
        {isSubmitting ? 'Wysyłanie...' : 'WYŚLIJ WIADOMOŚĆ'}
      </FormButton>
    </StyledForm>
  );
}
