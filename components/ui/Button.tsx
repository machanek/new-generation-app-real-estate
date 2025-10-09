import React from 'react';
import { Button as AriaButton, type ButtonProps as AriaButtonProps } from 'react-aria-components';
import { css } from '@/styled-system/css';

// Button component with React Aria + Panda CSS
export interface ButtonProps extends AriaButtonProps {
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
  fontWeight: 'semibold',
  borderRadius: 'md',
  cursor: 'pointer',
  transition: 'all',
  textDecoration: 'none',
  _hover: {
    transform: 'translateY(-1px)',
  },
  _disabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});

// Variant styles
const buttonPrimaryStyles = css({
  backgroundColor: 'primary',
  color: 'white',
  _hover: {
    backgroundColor: 'primaryLight',
    transform: 'translateY(-1px)',
    boxShadow: 'md',
  },
  _focus: {
    backgroundColor: 'primaryLight',
  },
  _focusVisible: {
    backgroundColor: 'primaryLight',
    outline: '2px solid',
    outlineColor: 'primary',
    outlineOffset: '2px',
  },
  _disabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
    transform: 'none',
    backgroundColor: 'primary',
  },
});

const buttonSecondaryStyles = css({
  backgroundColor: 'transparent',
  color: 'primary',
  borderColor: 'primary',
  _hover: {
    backgroundColor: 'primary',
    color: 'white',
    transform: 'scale(1.05)',
  },
  _focus: {
    backgroundColor: 'primary',
    color: 'white',
  },
  _focusVisible: {
    backgroundColor: 'primary',
    color: 'white',
    outline: '2px solid',
    outlineColor: 'primary',
    outlineOffset: '2px',
  },
  _disabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
    transform: 'none',
    backgroundColor: 'transparent',
    color: 'primary',
  },
});

const buttonGhostStyles = css({
  backgroundColor: 'transparent',
  color: 'textPrimary',
  _hover: {
    color: 'primary',
  },
  _focus: {
    color: 'primary',
  },
  _focusVisible: {
    color: 'primary',
    outline: '2px solid',
    outlineColor: 'primary',
    outlineOffset: '2px',
  },
  _disabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
    color: 'textPrimary',
  },
});

// Size styles
const buttonSizeStyles = {
  sm: css({
    paddingX: '3',
    paddingY: '2',
    fontSize: 'xs',
  }),
  md: css({
    paddingX: '4',
    paddingY: '3',
    fontSize: 'sm',
  }),
  lg: css({
    paddingX: '6',
    paddingY: '4',
    fontSize: 'base',
  }),
};

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

    const getMinHeight = () => {
      switch (size) {
        case 'sm': return '32px';
        case 'md': return '40px';
        case 'lg': return '48px';
        default: return '40px';
      }
    };

    return (
      <AriaButton
        ref={ref}
        className={`${buttonBaseStyles} ${getVariantStyles()} ${getSizeStyles()} ${className || ''}`}
        style={{
          border: variant === 'secondary' ? '2px solid' : '2px solid transparent',
          minHeight: getMinHeight(),
          width: fullWidth ? '100%' : 'auto',
        }}
        {...props}
      >
        {children}
      </AriaButton>
    );
  }
);

Button.displayName = 'Button';

// Link variant for navigation (using native <a> with button styles)
export const ButtonLink = React.forwardRef<HTMLAnchorElement, {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  href: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}>(
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

    const getMinHeight = () => {
      switch (size) {
        case 'sm': return '32px';
        case 'md': return '40px';
        case 'lg': return '48px';
        default: return '40px';
      }
    };

    return (
      <a
        ref={ref}
        className={`${buttonBaseStyles} ${getVariantStyles()} ${getSizeStyles()} ${className || ''}`}
        style={{
          border: variant === 'secondary' ? '2px solid' : '2px solid transparent',
          minHeight: getMinHeight(),
          width: fullWidth ? '100%' : 'auto',
        }}
        {...props}
      >
        {children}
      </a>
    );
  }
);

ButtonLink.displayName = 'ButtonLink';
