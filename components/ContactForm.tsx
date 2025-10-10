"use client"

import React from 'react';
import {
  Form,
  FormRow,
  FormGroup,
  FormLabel,
  FormInput,
  FormSelect,
  FormTextarea,
  CheckboxGroup,
  FormCheckbox,
  CheckboxLabel,
  FormActions,
  FormSubmitButton,
} from '@/components/ui/Form';

interface ContactFormProps {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps = {}) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <Form
      id="contactForm"
      onSubmit={handleSubmit}
      aria-label="Formularz kontaktowy"
    >
      <p
        className="sr-only"
        id="form-instructions"
      >
        Pola oznaczone gwiazdką (*) są wymagane
      </p>

      <FormRow>
        <FormGroup>
          <FormLabel htmlFor="name">Imię i nazwisko *</FormLabel>
          <FormInput
            id="name"
            name="name"
            type="text"
            required
            aria-required="true"
            aria-describedby="form-instructions"
            autoComplete="name"
            placeholder="Jan Kowalski"
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="phone">Telefon *</FormLabel>
          <FormInput
            id="phone"
            name="phone"
            type="tel"
            required
            aria-required="true"
            aria-describedby="form-instructions"
            autoComplete="tel"
            placeholder="+48 600 000 000"
          />
        </FormGroup>
      </FormRow>

      <FormRow>
        <FormGroup>
          <FormLabel htmlFor="email">E-mail *</FormLabel>
          <FormInput
            id="email"
            name="email"
            type="email"
            required
            aria-required="true"
            aria-describedby="form-instructions"
            autoComplete="email"
            placeholder="jan@example.com"
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="subject">Temat</FormLabel>
          <FormSelect
            id="subject"
            name="subject"
            aria-label="Wybierz temat wiadomości"
          >
            <option value="">Wybierz temat</option>
            <option value="Pytanie o mieszkanie">Pytanie o mieszkanie</option>
            <option value="Umówienie prezentacji">Umówienie prezentacji</option>
            <option value="Finansowanie">Finansowanie</option>
            <option value="Dokumenty i procedury">Dokumenty i procedury</option>
            <option value="Inne">Inne</option>
          </FormSelect>
        </FormGroup>
      </FormRow>

      <FormRow>
        <FormGroup fullWidth>
          <FormLabel htmlFor="message">Wiadomość *</FormLabel>
          <FormTextarea
            id="message"
            name="message"
            rows={5}
            required
            aria-required="true"
            aria-describedby="form-instructions"
            placeholder="Treść wiadomości..."
          />
        </FormGroup>
      </FormRow>

      <FormRow>
        <FormGroup fullWidth>
          <CheckboxGroup>
            <FormCheckbox
              type="checkbox"
              id="privacy"
              name="privacy"
              required
              aria-required="true"
              aria-describedby="privacy-label"
            />
            <CheckboxLabel htmlFor="privacy" id="privacy-label">
              Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z Polityką prywatności w celu odpowiedzi na zapytanie. *
            </CheckboxLabel>
          </CheckboxGroup>
        </FormGroup>
      </FormRow>

      <FormRow>
        <FormGroup fullWidth>
          <CheckboxGroup>
            <FormCheckbox
              type="checkbox"
              id="marketing"
              name="marketing"
              aria-describedby="marketing-label"
            />
            <CheckboxLabel htmlFor="marketing" id="marketing-label">
              Wyrażam zgodę na otrzymywanie informacji marketingowych o ofercie Harmonia Rząska.
            </CheckboxLabel>
          </CheckboxGroup>
        </FormGroup>
      </FormRow>

      <FormActions>
        <FormSubmitButton type="submit">
          WYŚLIJ WIADOMOŚĆ
        </FormSubmitButton>
      </FormActions>
    </Form>
  );
}
