import React from 'react';

// Simple card components with inline styles
export const Card = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }) => (
  <div
    style={{
      backgroundColor: 'white',
      borderRadius: '8px',
      border: '1px solid #E5E7EB',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      transition: 'all 0.2s ease',
      // Hover effects removed for Panda CSS compatibility
    }}
    {...props}
  >
    {children}
  </div>
);

export const CardHeader = ({ children }: { children: React.ReactNode }) => (
  <div style={{ padding: '24px 24px 0 24px' }}>
    {children}
  </div>
);

export const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1F2937', marginBottom: '8px' }}>
    {children}
  </h3>
);

export const CardSubtitle = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '16px' }}>
    {children}
  </p>
);

export const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div style={{ padding: '24px' }}>
    {children}
  </div>
);

export const CardFooter = ({ children }: { children: React.ReactNode }) => (
  <div style={{ padding: '0 24px 24px 24px' }}>
    {children}
  </div>
);

export const CardImage = ({ src, alt, ...props }: { src: string, alt: string } & React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img
    src={src}
    alt={alt}
    style={{
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      display: 'block'
    }}
    {...props}
  />
);

export const CardActions = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
    {children}
  </div>
);