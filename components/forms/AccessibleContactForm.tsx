'use client';

import React, { useState } from 'react';
import { css } from '@/styled-system/css';
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

// Simple form styles - migrated to Panda CSS

const fieldStyles = css({
  marginBottom: '6'  // 24px
});

const labelStyles = css({
  display: 'block',
  fontWeight: 'semibold',
  color: 'textSecondary',  // #374151
  marginBottom: '2'        // 8px
});

const baseInputStyles = css({
  borderRadius: 'base',   // 6px
  transition: 'all'
});

const baseTextareaStyles = css({
  borderRadius: 'base',   // 6px
  transition: 'all'
});

const baseButtonStyles = css({
  border: 'none',
  borderRadius: 'base',  // 6px
  cursor: 'pointer',
  transition: 'all'
});

const errorTextStyles = css({
  marginTop: '2',  // 8px
});

// successStyles removed - using hybrid approach

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
    <Form 
      onSubmit={handleSubmit} 
      className={css({
        marginX: 'auto',
        padding: '8',        // 32px
        backgroundColor: 'white',
        borderRadius: 'md',
        boxShadow: 'md'
      })}
      style={{ maxWidth: '800px' }}
    >
      <Header>
        <h2 
          className={css({
            fontWeight: 'bold',
            color: 'textPrimary',   // #1F2937
            marginBottom: '2'       // 8px
          })}
          style={{ fontSize: '24px' }}
        >
          Skontaktuj się z nami
        </h2>
        <p 
          className={css({
            color: 'textSecondary',  // #6B7280
            marginBottom: '8'        // 32px
          })}
          style={{ fontSize: '16px' }}
        >
          Wypełnij formularz, a skontaktujemy się z Tobą w ciągu 24 godzin.
        </p>
      </Header>

      <TextField name="name" isRequired>
        <Label className={labelStyles} style={{ fontSize: '14px' }}>Imię i nazwisko *</Label>
        <Input
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className={baseInputStyles}
          style={{
            width: '100%',
            padding: '12px 16px',
            fontSize: '16px',
            border: '1px solid #D1D5DB',
            transition: 'border-color 0.2s ease',
          }}
          onFocus={(e) => {
            const target = e.target as HTMLElement
            target.style.outline = '2px solid #065F46'
            target.style.outlineOffset = '2px'
            target.style.borderColor = '#065F46'
          }}
          onBlur={(e) => {
            const target = e.target as HTMLElement
            target.style.outline = 'none'
            target.style.borderColor = '#D1D5DB'
          }}
          placeholder="Wprowadź swoje imię i nazwisko"
          required
        />
        <FieldError 
          className={errorTextStyles}
          style={{ 
            fontSize: '14px',
            color: '#DC2626'  // WCAG AA compliant
          }}
        />
      </TextField>

      <TextField name="email" type="email" isRequired>
        <Label className={labelStyles} style={{ fontSize: '14px' }}>Adres email *</Label>
        <Input
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className={baseInputStyles}
          style={{
            width: '100%',
            padding: '12px 16px',
            fontSize: '16px',
            border: '1px solid #D1D5DB',
            transition: 'border-color 0.2s ease',
          }}
          onFocus={(e) => {
            const target = e.target as HTMLElement
            target.style.outline = '2px solid #065F46'
            target.style.outlineOffset = '2px'
            target.style.borderColor = '#065F46'
          }}
          onBlur={(e) => {
            const target = e.target as HTMLElement
            target.style.outline = 'none'
            target.style.borderColor = '#D1D5DB'
          }}
          placeholder="Wprowadź swój adres email"
          required
        />
        <FieldError 
          className={errorTextStyles}
          style={{ 
            fontSize: '14px',
            color: '#DC2626'  // WCAG AA compliant
          }}
        />
      </TextField>

      <TextField name="phone">
        <Label className={labelStyles} style={{ fontSize: '14px' }}>Numer telefonu</Label>
        <Input
          value={formData.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          className={baseInputStyles}
          style={{
            width: '100%',
            padding: '12px 16px',
            fontSize: '16px',
            border: '1px solid #D1D5DB',
            transition: 'border-color 0.2s ease',
          }}
          onFocus={(e) => {
            const target = e.target as HTMLElement
            target.style.outline = '2px solid #065F46'
            target.style.outlineOffset = '2px'
            target.style.borderColor = '#065F46'
          }}
          onBlur={(e) => {
            const target = e.target as HTMLElement
            target.style.outline = 'none'
            target.style.borderColor = '#D1D5DB'
          }}
          placeholder="Wprowadź swój numer telefonu"
        />
        <FieldError 
          className={errorTextStyles}
          style={{ 
            fontSize: '14px',
            color: '#DC2626'  // WCAG AA compliant
          }}
        />
      </TextField>

      <TextField name="subject" isRequired>
        <Label className={labelStyles} style={{ fontSize: '14px' }}>Temat *</Label>
        <Input
          value={formData.subject}
          onChange={(e) => handleChange('subject', e.target.value)}
          className={baseInputStyles}
          style={{
            width: '100%',
            padding: '12px 16px',
            fontSize: '16px',
            border: '1px solid #D1D5DB',
            transition: 'border-color 0.2s ease',
          }}
          onFocus={(e) => {
            const target = e.target as HTMLElement
            target.style.outline = '2px solid #065F46'
            target.style.outlineOffset = '2px'
            target.style.borderColor = '#065F46'
          }}
          onBlur={(e) => {
            const target = e.target as HTMLElement
            target.style.outline = 'none'
            target.style.borderColor = '#D1D5DB'
          }}
          placeholder="Wprowadź temat wiadomości"
          required
        />
        <FieldError 
          className={errorTextStyles}
          style={{ 
            fontSize: '14px',
            color: '#DC2626'  // WCAG AA compliant
          }}
        />
      </TextField>

      <TextField name="message" isRequired>
        <Label className={labelStyles} style={{ fontSize: '14px' }}>Wiadomość *</Label>
        <TextArea
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          className={baseTextareaStyles}
          style={{
            width: '100%',
            padding: '12px 16px',
            fontSize: '16px',
            border: '1px solid #D1D5DB',
            minHeight: '120px',
            resize: 'vertical',
            transition: 'border-color 0.2s ease',
          }}
          onFocus={(e) => {
            const target = e.target as HTMLElement
            target.style.outline = '2px solid #065F46'
            target.style.outlineOffset = '2px'
            target.style.borderColor = '#065F46'
          }}
          onBlur={(e) => {
            const target = e.target as HTMLElement
            target.style.outline = 'none'
            target.style.borderColor = '#D1D5DB'
          }}
          placeholder="Wprowadź treść wiadomości"
          required
        />
        <FieldError 
          className={errorTextStyles}
          style={{ 
            fontSize: '14px',
            color: '#DC2626'  // WCAG AA compliant
          }}
        />
      </TextField>

      <Group className={fieldStyles}>
        <Checkbox
          isSelected={formData.privacy}
          onChange={(isSelected) => handleChange('privacy', isSelected)}
        >
          <Label 
            className={css({
              display: 'flex',
              alignItems: 'flex-start',
              gap: '2',              // 8px
              color: 'textSecondary' // #374151
            })}
            style={{ fontSize: '14px' }}
          >
            <span style={{ marginTop: '2px' }}>✓</span>
            Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z polityką prywatności *
          </Label>
        </Checkbox>
        <FieldError 
          className={errorTextStyles}
          style={{ 
            fontSize: '14px',
            color: '#DC2626'  // WCAG AA compliant
          }}
        />
      </Group>

      <Group className={fieldStyles}>
        <Checkbox
          isSelected={formData.marketing}
          onChange={(isSelected) => handleChange('marketing', isSelected)}
        >
          <Label 
            className={css({
              display: 'flex',
              alignItems: 'flex-start',
              gap: '2',              // 8px
              color: 'textSecondary' // #374151
            })}
            style={{ fontSize: '14px' }}
          >
            <span style={{ marginTop: '2px' }}>✓</span>
            Chcę otrzymywać informacje marketingowe o nowych ofertach
          </Label>
        </Checkbox>
      </Group>

      {error && (
        <div 
          className={errorTextStyles}
          style={{ 
            fontSize: '14px',
            color: '#DC2626'  // WCAG AA compliant
          }}
        >
          {error}
        </div>
      )}

      {isSuccess && (
        <div 
          className={css({ marginTop: '1' })}  // 4px
          style={{ 
            color: '#10B981',    // success green (custom)
            fontSize: '14px' 
          }}
        >
          Wiadomość została wysłana pomyślnie!
        </div>
      )}

      <Button
        type="submit"
        isDisabled={isSubmitting}
        className={baseButtonStyles}
        style={{
          width: '100%',
          padding: '12px 24px',
          fontSize: '16px',
          fontWeight: '600',
          color: '#FFFFFF',
          backgroundColor: isSubmitting ? '#9CA3AF' : '#065F46',
          cursor: isSubmitting ? 'not-allowed' : 'pointer',
        }}
        onFocus={(e) => {
          const target = e.target as HTMLElement
          target.style.outline = '2px solid #065F46'
          target.style.outlineOffset = '2px'
          target.style.boxShadow = '0 0 0 4px rgba(6, 95, 70, 0.1)'
        }}
        onBlur={(e) => {
          const target = e.target as HTMLElement
          target.style.outline = 'none'
          target.style.boxShadow = 'none'
        }}
        onMouseEnter={(e) => {
          if (!isSubmitting) {
            e.currentTarget.style.backgroundColor = '#047857'
          }
        }}
        onMouseLeave={(e) => {
          if (!isSubmitting) {
            e.currentTarget.style.backgroundColor = '#065F46'
          }
        }}
      >
        {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
      </Button>
    </Form>
  );
}