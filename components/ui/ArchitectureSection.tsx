// Simple architecture section components with inline styles - ALL EXPORTS
import { css } from '../../styled-system/css';
export const ArchitectureSection = ({ children, id }: { children: React.ReactNode, id?: string }) => (
  <section
    id={id}
    className={css({
      paddingY: { base: '8', md: '12', lg: '16' },
      backgroundColor: 'white'
    })}
  >
    {children}
  </section>
);

export const ArchitectureContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    className={css({
      maxWidth: '1200px',
      marginX: 'auto',
      paddingX: { base: '4', md: '6' }
    })}
  >
    {children}
  </div>
);

export const ArchitectureTitle = ({ children }: { children: React.ReactNode }) => (
  <h2
    className={css({
      fontSize: { base: '2xl', md: '3xl', lg: '4xl' },
      fontWeight: 'bold',
      color: 'primary',
      textAlign: 'center',
      marginBottom: { base: '4', md: '6', lg: '8' }
    })}
  >
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
    gridTemplateColumns: { base: '1fr', md: '2fr 1fr' },
    gap: { base: '8', md: '12', lg: '16' },
    alignItems: 'start'
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
  <div
    className={css({
      padding: { base: '0', md: '4' }
    })}
  >
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
  <p
    className={css({
      textAlign: 'left',
      marginBottom: { base: '4', md: '6' },
      fontSize: { base: 'base', md: 'lg' },
      lineHeight: 'relaxed',
      color: 'textPrimary'
    })}
  >
    {children}
  </p>
);

export const MetricsCard = ({ children, 'aria-labelledby': ariaLabelledBy }: { children: React.ReactNode, 'aria-labelledby'?: string }) => (
  <div
    aria-labelledby={ariaLabelledBy}
    className={css({
      backgroundColor: 'white',
      borderColor: 'border',
      borderRadius: { base: 'md', md: 'lg' },
      padding: { base: '4', md: '6', lg: '8' },
      boxShadow: 'sm'
    })}
    style={{
      border: '1px solid'
    }}
  >
    {children}
  </div>
);

export const MetricsTitle = ({ children, id }: { children: React.ReactNode, id?: string }) => (
  <h4
    id={id}
    className={css({
      fontSize: { base: 'lg', md: 'xl' },
      fontWeight: 'semibold',
      color: 'primary',
      marginBottom: { base: '4', md: '6' }
    })}
  >
    {children}
  </h4>
);

export const MetricsList = ({ children }: { children: React.ReactNode }) => (
  <div
    className={css({
      display: 'flex',
      flexDirection: 'column',
      gap: { base: '3', md: '4' }
    })}
  >
    {children}
  </div>
);

export const MetricPill = ({ children }: { children: React.ReactNode }) => (
  <div
    className={css({
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: { base: '3', md: '4' },
      backgroundColor: 'bgGray',
      borderRadius: 'base'
    })}
  >
    {children}
  </div>
);

export const MetricCode = ({ children }: { children: React.ReactNode }) => (
  <span
    className={css({
      fontFamily: 'mono',
      fontWeight: 'semibold',
      fontSize: { base: 'sm', md: 'base' },
      color: 'textPrimary'
    })}
  >
    {children}
  </span>
);

export const MetricValue = ({ children }: { children: React.ReactNode }) => (
  <span
    className={css({
      color: 'textSecondary',
      fontSize: { base: 'xs', md: 'sm' }
    })}
  >
    {children}
  </span>
);