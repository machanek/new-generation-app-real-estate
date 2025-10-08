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
  fontWeight: 'semibold',
  borderRadius: 'md',
  cursor: 'pointer',
  transition: 'all', // Panda akceptuje tylko 'all', nie '0.2s'
  textDecoration: 'none',
  _hover: {
    transform: 'translateY(-1px)',
  },
  _focus: {
    // Focus styles będą inline (zbyt custom dla Panda)
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
    paddingX: '3',      // 12px (left+right)
    paddingY: '2',      // 8px (top+bottom)
    fontSize: 'xs',
  }),
  md: css({
    paddingX: '4',      // 16px (left+right)
    paddingY: '3',      // 12px (top+bottom)
    fontSize: 'sm',
  }),
  lg: css({
    paddingX: '6',      // 24px (left+right)
    paddingY: '4',      // 16px (top+bottom)
    fontSize: 'base',
  }),
};

// Full width style - moved to inline styles due to Panda CSS strict typing

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
      <button 
        ref={ref} 
        className={`${buttonBaseStyles} ${getVariantStyles()} ${getSizeStyles()} ${className || ''}`}
        style={{
          // Inline styles dla wartości których Panda nie akceptuje
          border: variant === 'secondary' ? '2px solid' : '2px solid transparent',
          minHeight: getMinHeight(),
          width: fullWidth ? '100%' : 'auto',
        }}
        onFocus={(e) => {
          // Focus outline - inline bo Panda strict
          e.currentTarget.style.outline = '2px solid #065F46';
          e.currentTarget.style.outlineOffset = '2px';
        }}
        onBlur={(e) => {
          e.currentTarget.style.outline = 'none';
        }}
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
        onFocus={(e) => {
          e.currentTarget.style.outline = '2px solid #065F46';
          e.currentTarget.style.outlineOffset = '2px';
        }}
        onBlur={(e) => {
          e.currentTarget.style.outline = 'none';
        }}
        {...props}
      >
        {children}
      </a>
    );
  }
);

ButtonLink.displayName = 'ButtonLink';