// Simple form components with inline styles
export const Form = ({ children, onSubmit, id }: { children: React.ReactNode, onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void, id?: string }) => (
  <form 
    id={id}
    style={{ maxWidth: '800px', margin: '0 auto', padding: '32px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
    onSubmit={onSubmit}
  >
    {children}
  </form>
);

export const FormGroup = ({ children, fullWidth }: { children: React.ReactNode, fullWidth?: boolean }) => (
  <div style={{ marginBottom: '24px', flex: fullWidth ? '1' : 'none' }}>
    {children}
  </div>
);

export const FormRow = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
    {children}
  </div>
);

export const FormLabel = ({ children, htmlFor }: { children: React.ReactNode, htmlFor?: string }) => (
  <label 
    htmlFor={htmlFor}
    style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}
  >
    {children}
  </label>
);

export const FormInput = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    style={{
      width: '100%',
      padding: '12px 16px',
      border: '1px solid #D1D5DB',
      borderRadius: '6px',
      fontSize: '16px',
      color: '#1F2937',
      backgroundColor: 'white',
      transition: 'border-color 0.2s ease',
      // Focus effects removed for Panda CSS compatibility
    }}
    {...props}
  />
);

export const FormTextarea = ({ ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea
    style={{
      width: '100%',
      padding: '12px 16px',
      border: '1px solid #D1D5DB',
      borderRadius: '6px',
      fontSize: '16px',
      color: '#1F2937',
      backgroundColor: 'white',
      minHeight: '120px',
      resize: 'vertical',
      transition: 'border-color 0.2s ease',
      // Focus effects removed for Panda CSS compatibility
    }}
    {...props}
  />
);

export const FormSelect = ({ children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement> & { children: React.ReactNode }) => (
  <select
    style={{
      width: '100%',
      padding: '12px 16px',
      border: '1px solid #D1D5DB',
      borderRadius: '6px',
      fontSize: '16px',
      color: '#1F2937',
      backgroundColor: 'white',
      transition: 'border-color 0.2s ease',
      // Focus effects removed for Panda CSS compatibility
    }}
    {...props}
  >
    {children}
  </select>
);

export const FormButton = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) => (
  <button
    style={{
      padding: '12px 24px',
      backgroundColor: '#065F46',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      // Hover and disabled effects removed for Panda CSS compatibility
    }}
    {...props}
  >
    {children}
  </button>
);

export const FormError = ({ children }: { children: React.ReactNode }) => (
  <div style={{ color: '#EF4444', fontSize: '14px', marginTop: '4px' }}>
    {children}
  </div>
);

export const FormSuccess = ({ children }: { children: React.ReactNode }) => (
  <div style={{ color: '#10B981', fontSize: '14px', marginTop: '4px' }}>
    {children}
  </div>
);

export const CheckboxGroup = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
    {children}
  </div>
);

export const FormCheckbox = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input 
    type="checkbox"
    style={{ marginRight: '8px' }}
    {...props}
  />
);

export const CheckboxLabel = ({ children, htmlFor }: { children: React.ReactNode, htmlFor?: string }) => (
  <label 
    htmlFor={htmlFor}
    style={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: '#374151', cursor: 'pointer' }}
  >
    {children}
  </label>
);

export const FormActions = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px', marginTop: '32px' }}>
    {children}
  </div>
);

export const FormSubmitButton = ({ children, ...props }: { children: React.ReactNode } & React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    type="submit"
    style={{
      padding: '12px 24px',
      backgroundColor: '#065F46',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      // Hover and disabled effects removed for Panda CSS compatibility
    }}
    {...props}
  >
    {children}
  </button>
);