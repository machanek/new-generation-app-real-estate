// Form components with Panda CSS
import { css } from '../../styled-system/css';
import { Button } from './Button';

export const Form = ({ children, onSubmit, id }: { children: React.ReactNode, onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void, id?: string }) => (
  <form
    id={id}
    className={css({
      padding: { base: '4', md: '6', lg: '8' },
      backgroundColor: 'white',
      borderRadius: 'md',
      boxShadow: 'md'
    })}
    style={{
      maxWidth: '800px',
      margin: '0 auto',
      width: '100%',
    }}
    onSubmit={onSubmit}
  >
    {children}
  </form>
);

export const FormGroup = ({ children, fullWidth }: { children: React.ReactNode, fullWidth?: boolean }) => (
  <div className={css({
    marginBottom: '6',
    flex: fullWidth ? '1' : 'none'
  })}>
    {children}
  </div>
);

export const FormRow = ({ children }: { children: React.ReactNode }) => (
  <div className={css({
    display: 'flex',
    flexDirection: { base: 'column', md: 'row' },
    gap: { base: '0', md: '4' },
    marginBottom: '6'
  })}>
    {children}
  </div>
);

export const FormLabel = ({ children, htmlFor }: { children: React.ReactNode, htmlFor?: string }) => (
  <label 
    htmlFor={htmlFor}
    className={css({
      display: 'block',
      fontSize: 'sm',
      fontWeight: 'semibold',
      color: 'textSecondary',
      marginBottom: '2'
    })}
  >
    {children}
  </label>
);

export const FormInput = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    className={css({
      paddingX: '4',
      paddingY: '3',
      borderColor: 'borderDark',
      borderRadius: 'base',
      fontSize: 'base',
      color: 'textPrimary',
      backgroundColor: 'white',
      transition: 'all',
      _focus: {
        borderColor: 'primary',
        outline: 'none',
      },
      _invalid: {
        borderColor: 'red.300'
      }
    })}
    style={{
      width: '100%',
      border: '1px solid',
      boxShadow: '0 0 0 3px rgba(6, 95, 70, 0.1)',
    }}
    {...props}
  />
);

export const FormTextarea = ({ ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea
    className={css({
      paddingX: '4',
      paddingY: '3',
      borderColor: 'borderDark',
      borderRadius: 'base',
      fontSize: 'base',
      color: 'textPrimary',
      backgroundColor: 'white',
      resize: 'vertical',
      transition: 'all',
      _focus: {
        borderColor: 'primary',
        outline: 'none',
      },
      _invalid: {
        borderColor: 'red.300'
      }
    })}
    style={{
      width: '100%',
      border: '1px solid',
      minHeight: '120px',
      boxShadow: '0 0 0 3px rgba(6, 95, 70, 0.1)',
    }}
    {...props}
  />
);

export const FormSelect = ({ children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement> & { children: React.ReactNode }) => (
  <select
    className={css({
      paddingX: '4',
      paddingY: '3',
      borderColor: 'borderDark',
      borderRadius: 'base',
      fontSize: 'base',
      color: 'textPrimary',
      backgroundColor: 'white',
      transition: 'all',
      _focus: {
        borderColor: 'primary',
        outline: 'none',
      },
      _invalid: {
        borderColor: 'red.300'
      }
    })}
    style={{
      width: '100%',
      border: '1px solid',
      boxShadow: '0 0 0 3px rgba(6, 95, 70, 0.1)',
    }}
    {...props}
  >
    {children}
  </select>
);

export const FormButton = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) => (
  <Button variant="primary" size="md" {...props}>
    {children}
  </Button>
);

export const FormError = ({ children }: { children: React.ReactNode }) => (
  <div className={css({
    color: 'red.500',
    fontSize: 'sm',
    marginTop: '1'
  })}>
    {children}
  </div>
);

export const FormSuccess = ({ children }: { children: React.ReactNode }) => (
  <div className={css({
    color: 'primaryLight',
    fontSize: 'sm',
    marginTop: '1'
  })}>
    {children}
  </div>
);

export const CheckboxGroup = ({ children }: { children: React.ReactNode }) => (
  <div className={css({
    display: 'flex',
    flexDirection: 'column',
    gap: '2'
  })}>
    {children}
  </div>
);

export const FormCheckbox = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input 
    type="checkbox"
    className={css({
      marginRight: '2',
      accentColor: 'primary'
    })}
    {...props}
  />
);

export const CheckboxLabel = ({ children, htmlFor }: { children: React.ReactNode, htmlFor?: string }) => (
  <label 
    htmlFor={htmlFor}
    className={css({
      display: 'flex',
      alignItems: 'center',
      fontSize: 'sm',
      color: 'textSecondary',
      cursor: 'pointer'
    })}
  >
    {children}
  </label>
);

export const FormActions = ({ children }: { children: React.ReactNode }) => (
  <div className={css({
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '4',
    marginTop: '8'
  })}>
    {children}
  </div>
);

export const FormSubmitButton = ({ children, ...props }: { children: React.ReactNode } & React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <Button type="submit" variant="primary" size="md" {...props}>
    {children}
  </Button>
);