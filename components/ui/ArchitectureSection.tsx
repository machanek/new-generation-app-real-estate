// Simple architecture section components with inline styles - ALL EXPORTS
import { css } from '../../styled-system/css';
export const ArchitectureSection = ({ children, id }: { children: React.ReactNode, id?: string }) => (
  <section id={id} style={{ padding: '64px 0', backgroundColor: 'white' }}>
    {children}
  </section>
);

export const ArchitectureContainer = ({ children }: { children: React.ReactNode }) => (
  <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
    {children}
  </div>
);

export const ArchitectureTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#1F3D32', textAlign: 'center', marginBottom: '1rem' }}>
    {children}
  </h2>
);

export const ArchitectureSubtitle = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontSize: '18px', color: '#6B7280', textAlign: 'center', marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px auto' }}>
    {children}
  </p>
);

export const ArchitectureGrid = ({ children }: { children: React.ReactNode }) => (
  <div className={css({
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '16',
    alignItems: 'start',
    md: {
      gridTemplateColumns: '2fr 1fr'
    },
    sm: {
      gridTemplateColumns: '1fr',
      gap: '8'
    }
  })}>
    {children}
  </div>
);

export const ArchitectureCard = ({ children }: { children: React.ReactNode }) => (
  <div style={{ 
    backgroundColor: 'white', 
    borderRadius: '8px', 
    border: '1px solid #E5E7EB', 
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'all 0.2s ease'
  }}>
    {children}
  </div>
);

export const ArchitectureImage = ({ src, alt }: { src: string, alt: string }) => (
  <img
    src={src}
    alt={alt}
    style={{
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      display: 'block'
    }}
  />
);

export const ArchitectureContent = ({ children }: { children: React.ReactNode }) => (
  <div style={{ padding: '24px' }}>
    {children}
  </div>
);

export const ArchitectureCardTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1F2937', marginBottom: '8px' }}>
    {children}
  </h3>
);

export const ArchitectureCardDescription = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.5' }}>
    {children}
  </p>
);

// Additional exports that are being imported
export const ArchitectureText = ({ children }: { children: React.ReactNode }) => (
  <p style={{ textAlign: 'left', marginBottom: '1.5rem', fontSize: '1.125rem', lineHeight: '1.6', color: '#2C2C2C' }}>
    {children}
  </p>
);

export const MetricsCard = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    backgroundColor: '#FFFFFF',
    border: '1px solid #E5E5E5',
    borderRadius: '16px',
    padding: '2rem',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
  }}>
    {children}
  </div>
);

export const MetricsTitle = ({ children, id }: { children: React.ReactNode, id?: string }) => (
  <h4 id={id} style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1F3D32', marginBottom: '1.5rem' }}>
    {children}
  </h4>
);

export const MetricsList = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    {children}
  </div>
);

export const MetricPill = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#F8F9FA',
    borderRadius: '8px'
  }}>
    {children}
  </div>
);

export const MetricCode = ({ children }: { children: React.ReactNode }) => (
  <span style={{ fontFamily: 'monospace', fontWeight: '600', color: '#2C2C2C' }}>
    {children}
  </span>
);

export const MetricValue = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: '#666666', fontSize: '0.9rem' }}>
    {children}
  </span>
);