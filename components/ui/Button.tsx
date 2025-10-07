import React from 'react';
import { css } from '@/styled-system/css';

// Button component with Panda CSS
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

// Base button styles
const buttonBaseStyles = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2',
  border: 'none',
  borderRadius: 'base',
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
  fontWeight: 'medium',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s',
  whiteSpace: 'nowrap',
  width: 'auto',
});

// Variant styles
const buttonPrimaryStyles = css({
  backgroundColor: 'primary',
  color: 'white',
  _hover: {
    backgroundColor: 'primaryLight',
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  },
});

const buttonSecondaryStyles = css({
  backgroundColor: 'transparent',
  color: 'primary',
  border: '2px solid',
  borderColor: 'primary',
  _hover: {
    backgroundColor: 'primary',
    color: 'white',
    transform: 'scale(1.05)',
  },
});

const buttonGhostStyles = css({
  backgroundColor: 'transparent',
  color: 'textPrimary',
  _hover: {
    color: 'primary',
  },
});

// Size styles
const buttonSizeStyles = {
  sm: css({
    padding: '2 3',
    fontSize: 'xs',
    minHeight: '8',
  }),
  md: css({
    padding: '3 4',
    fontSize: 'sm',
    minHeight: '10',
  }),
  lg: css({
    padding: '4 6',
    fontSize: 'base',
    minHeight: '12',
  }),
};

// Full width style
const buttonFullWidthStyles = css({
  width: '100%',
});

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'md', fullWidth = false, className, ...props }, ref) => {
    const getVariantStyles = () => {
      switch (variant) {
        case 'primary':
          return buttonPrimaryStyles;
        case 'secondary':
          return buttonSecondaryStyles;
        case 'ghost':
          return buttonGhostStyles;
        default:
          return buttonPrimaryStyles;
      }
    };

    const getSizeStyles = () => {
      return buttonSizeStyles[size];
    };

    const getFullWidthStyles = () => {
      return fullWidth ? buttonFullWidthStyles : '';
    };

    return (
      <button 
        ref={ref} 
        className={`${buttonBaseStyles} ${getVariantStyles()} ${getSizeStyles()} ${getFullWidthStyles()} ${className || ''}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

// Link variant for navigation
export const ButtonLink = React.forwardRef<HTMLAnchorElement, { children: React.ReactNode; variant?: 'primary' | 'secondary' | 'ghost'; size?: 'sm' | 'md' | 'lg'; fullWidth?: boolean; className?: string; href: string; target?: string; rel?: string }>(
  ({ children, variant = 'primary', size = 'md', fullWidth = false, className, ...props }, ref) => {
    const getVariantStyles = () => {
      switch (variant) {
        case 'primary':
          return buttonPrimaryStyles;
        case 'secondary':
          return buttonSecondaryStyles;
        case 'ghost':
          return buttonGhostStyles;
        default:
          return buttonPrimaryStyles;
      }
    };

    const getSizeStyles = () => {
      return buttonSizeStyles[size];
    };

    const getFullWidthStyles = () => {
      return fullWidth ? buttonFullWidthStyles : '';
    };

    return (
      <a 
        ref={ref} 
        className={`${buttonBaseStyles} ${getVariantStyles()} ${getSizeStyles()} ${getFullWidthStyles()} ${className || ''}`}
        {...props}
      >
        {children}
      </a>
    );
  }
);

ButtonLink.displayName = 'ButtonLink';