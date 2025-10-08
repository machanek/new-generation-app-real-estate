"use client";
import React from 'react';
import { css } from '@/styled-system/css';

// Simple card components migrated to Panda CSS (hybrid for custom borders/shadows)
export const Card = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }) => (
  <div
    className={css({
      backgroundColor: 'white',
      borderRadius: 'md',
      overflow: 'hidden',
      transition: 'all',
    })}
    style={{
      border: '1px solid #E5E7EB',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    }}
    {...props}
  >
    {children}
  </div>
);

export const CardHeader = ({ children }: { children: React.ReactNode }) => (
  <div
    className={css({
      paddingX: '6',
      paddingTop: '6',
      paddingBottom: '0',
    })}
  >
    {children}
  </div>
);

export const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <h3
    className={css({
      fontSize: 'lg',
      fontWeight: 'semibold',
      color: 'gray.800',
      marginBottom: '2',
    })}
  >
    {children}
  </h3>
);

export const CardSubtitle = ({ children }: { children: React.ReactNode }) => (
  <p
    className={css({
      fontSize: 'sm',
      color: 'gray.500',
      marginBottom: '4',
    })}
  >
    {children}
  </p>
);

export const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div
    className={css({
      padding: '6',
    })}
  >
    {children}
  </div>
);

export const CardFooter = ({ children }: { children: React.ReactNode }) => (
  <div
    className={css({
      paddingX: '6',
      paddingTop: '0',
      paddingBottom: '6',
    })}
  >
    {children}
  </div>
);

export const CardImage = ({ src, alt, ...props }: { src: string, alt: string } & React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img
    src={src}
    alt={alt}
    className={css({
      objectFit: 'cover',
      display: 'block',
    })}
    style={{
      width: '100%',
      height: '200px',
    }}
    {...props}
  />
);

export const CardActions = ({ children }: { children: React.ReactNode }) => (
  <div
    className={css({
      display: 'flex',
      gap: '3',
      justifyContent: 'flex-end',
    })}
  >
    {children}
  </div>
);