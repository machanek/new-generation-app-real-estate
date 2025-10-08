// Units section components with Panda CSS - ALL EXPORTS
import { css } from '@/styled-system/css';
import { Button } from './Button';

export const UnitsSection = ({ children, id }: { children: React.ReactNode, id?: string }) => (
  <section 
    id={id}
    className={css({
      padding: '16',
      backgroundColor: 'bgGray'
    })}
  >
    {children}
  </section>
);

export const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className={css({
    fontSize: '4xl',
    fontWeight: 'bold',
    color: 'textPrimary',
    textAlign: 'center',
    marginBottom: '12'
  })}>
    {children}
  </h2>
);

export const UnitsTable = ({ children, id, 'aria-label': ariaLabel }: { children: React.ReactNode, id?: string, 'aria-label'?: string }) => (
  <div className={css({ overflowX: 'auto' })}>
    <table 
      id={id}
      aria-label={ariaLabel}
      className={css({
        borderCollapse: 'collapse',
        backgroundColor: 'white',
        borderRadius: 'md',
        boxShadow: 'md'
      })}
      style={{
        width: '100%',
      }}
    >
      {children}
    </table>
  </div>
);

export const TableHeader = ({ children }: { children: React.ReactNode }) => (
  <thead className={css({
    borderColor: 'border'
  })}
  style={{
    backgroundColor: '#F3F4F6',
    borderBottom: '2px solid',
  }}
  >
    <tr>
      {children}
    </tr>
  </thead>
);

export const TableHeaderCell = ({ children }: { children: React.ReactNode }) => (
  <th className={css({
    textAlign: 'left',
    fontWeight: 'semibold',
    color: 'textPrimary',
    fontSize: 'sm'
  })}
  style={{
    padding: '16px',
  }}
  >
    {children}
  </th>
);

export const TableBody = ({ children }: { children: React.ReactNode }) => (
  <tbody>
    {children}
  </tbody>
);

export const TableRow = ({ children }: { children: React.ReactNode }) => (
  <tr className={css({
    transition: 'all',
    '&:last-child': {
      borderBottom: 'none'
    }
  })}
  style={{
    borderBottom: '1px solid',
    borderColor: '#F3F4F6',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = '#F9FAFB';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = '';
  }}
  >
    {children}
  </tr>
);

export const TableCell = ({ children, colSpan, className, style }: { children: React.ReactNode, colSpan?: number, className?: string, style?: React.CSSProperties }) => (
  <td 
    colSpan={colSpan}
    className={css({
      color: 'textPrimary',
      fontSize: 'sm'
    })}
    style={{
      padding: '16px',
      ...style,
    }}
  >
    {children}
  </td>
);

export const StatusBadge = ({ children, status }: { children: React.ReactNode, status: string }) => {
  const getStatusStyles = (status: string) => {
    switch (status.toLowerCase()) {
      case 'free':
      case 'wolne': return {
        backgroundColor: 'primary',
        color: 'white'
      };
      case 'reserved':
      case 'zarezerwowane': return {
        backgroundColor: 'bgGray',
        color: 'white'
      };
      case 'sold':
      case 'sprzedane': return {
        backgroundColor: 'bgGray',
        color: 'white'
      };
      default: return {
        backgroundColor: 'bgGray',
        color: 'white'
      };
    }
  };

  const styles = getStatusStyles(status);
  
  return (
    <span className={css({
      display: 'inline-block',
      borderRadius: 'base',
      fontSize: 'xs',
      fontWeight: 'semibold',
      textTransform: 'uppercase',
    })}
    style={{
      padding: '4px 12px',
      letterSpacing: '0.5px',
      backgroundColor: styles.backgroundColor,
      color: styles.color,
    }}
    >
      {children}
    </span>
  );
};

export const ViewControls = ({ children }: { children: React.ReactNode }) => (
  <div className={css({
    display: 'flex',
    gap: '2'
  })}>
    {children}
  </div>
);

export const ViewButton = ({ children, active, onClick }: { children: React.ReactNode, active?: boolean, onClick?: () => void }) => (
  <Button
    variant={active ? "primary" : "secondary"}
    size="sm"
    onClick={onClick}
  >
    {children}
  </Button>
);

export const ResultsInfo = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
    {children}
  </div>
);

export const ResultsCount = ({ children }: { children: React.ReactNode }) => (
  <span style={{ fontSize: '14px', color: '#6B7280' }}>
    Łącznie: <strong>{children}</strong>
  </span>
);

export const StatusLegend = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
    {children}
  </div>
);

export const StatusLegendItem = ({ children, color }: { children: React.ReactNode, color: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <span style={{
      padding: '2px 6px',
      borderRadius: '4px',
      fontSize: '10px',
      fontWeight: '600',
      textTransform: 'uppercase',
      backgroundColor: color,
      color: 'white'
    }}></span>
    <span style={{ fontSize: '12px', color: '#6B7280' }}>{children}</span>
  </div>
);

// Card components
export const CardHeader = ({ children }: { children: React.ReactNode }) => (
  <div className={css({
    padding: '4',
    borderColor: 'border'
  })}
  style={{
    borderBottom: '1px solid',
  }}
  >
    {children}
  </div>
);

export const CardId = ({ children }: { children: React.ReactNode }) => (
  <div className={css({
    fontSize: 'sm',
    fontWeight: 'semibold',
    color: 'textPrimary'
  })}>
    {children}
  </div>
);

export const CardInfo = ({ children }: { children: React.ReactNode }) => (
  <div className={css({
    padding: '4',
    display: 'flex',
    flexDirection: 'column',
    gap: '2'
  })}>
    {children}
  </div>
);

export const CardField = ({ children }: { children: React.ReactNode }) => (
  <div className={css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  })}>
    {children}
  </div>
);

export const FieldLabel = ({ children }: { children: React.ReactNode }) => (
  <span className={css({
    fontSize: 'sm',
    color: 'textSecondary'
  })}>
    {children}
  </span>
);

export const FieldValue = ({ children }: { children: React.ReactNode }) => (
  <span className={css({
    fontSize: 'sm',
    fontWeight: 'medium',
    color: 'textPrimary'
  })}>
    {children}
  </span>
);

export const CardDetails = ({ children }: { children: React.ReactNode }) => (
  <div className={css({
    padding: '4',
    borderColor: 'border'
  })}
  style={{
    borderTop: '1px solid',
  }}
  >
    {children}
  </div>
);

export const CardActions = ({ children }: { children: React.ReactNode }) => (
  <div className={css({
    display: 'flex',
    gap: '2',
    marginTop: '2'
  })}>
    {children}
  </div>
);

export const PlanLink = ({ children, href, ...props }: { children: React.ReactNode, href?: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a 
    href={href}
    className={css({
      fontSize: 'xs',
      color: 'primary',
      textDecoration: 'underline',
      cursor: 'pointer'
    })}
    {...props}
  >
    {children}
  </a>
);

export const MutedText = ({ children }: { children: React.ReactNode }) => (
  <span className={css({
    fontSize: 'xs',
    color: 'textSecondary'
  })}>
    {children}
  </span>
);

// Section components
export const SectionContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="container">
    {children}
  </div>
);

export const ViewSwitch = ({ children }: { children: React.ReactNode }) => (
  <div className={css({
    display: 'flex',
    alignItems: 'center',
    gap: '4',
    marginBottom: '6'
  })}>
    {children}
  </div>
);

export const LegendItem = ({ children }: { children: React.ReactNode }) => (
  <div className={css({
    display: 'flex',
    alignItems: 'center',
    gap: '2'
  })}>
    {children}
  </div>
);

export const LegendBadge = ({ color, status }: { color?: string, status?: string }) => {
  const getColor = () => {
    if (color) return color;
    switch (status) {
      case 'free': return '#047857';
      case 'reserved': return '#D97706';
      case 'sold': return '#6B7280';
      default: return '#6B7280';
    }
  };
  
  return (
    <span className={css({
      borderRadius: 'sm',
    })}
    style={{
      width: '8px',
      height: '8px',
      backgroundColor: getColor()
    }}
    />
  );
};

export const LegendLabel = ({ children }: { children: React.ReactNode }) => (
  <span className={css({
    fontSize: 'xs',
    color: 'textSecondary'
  })}>
    {children}
  </span>
);

// Table components
export const TableContainer = ({ children }: { children: React.ReactNode }) => (
  <div className={css({
    overflowX: 'auto',
    borderRadius: 'md',
    borderColor: 'border'
  })}
  style={{
    border: '1px solid',
  }}
  >
    {children}
  </div>
);

// Filter components
export const FiltersForm = ({ children, id, 'aria-label': ariaLabel, onSubmit }: { children: React.ReactNode, id?: string, 'aria-label'?: string, onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void }) => (
  <form 
    id={id}
    aria-label={ariaLabel}
    onSubmit={onSubmit}
    className={css({
      marginBottom: '6'
    })}
  >
    {children}
  </form>
);

export const FiltersGrid = ({ children }: { children: React.ReactNode }) => (
  <div className={css({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '4',
    marginBottom: '4'
  })}>
    {children}
  </div>
);

export const FilterGroup = ({ children }: { children: React.ReactNode }) => (
  <div>
    {children}
  </div>
);

export const FilterLabel = ({ children, htmlFor }: { children: React.ReactNode, htmlFor?: string }) => (
  <label 
    htmlFor={htmlFor}
    className={css({
      display: 'block',
      fontSize: 'sm',
      fontWeight: 'medium',
      color: 'textSecondary',
      marginBottom: '2'
    })}
  >
    {children}
  </label>
);

export const FilterSelect = ({ children, ...props }: { children: React.ReactNode } & React.SelectHTMLAttributes<HTMLSelectElement>) => (
  <select 
    className={css({
      paddingX: '3',
      paddingY: '2',
      borderColor: 'borderDark',
      borderRadius: 'base',
      fontSize: 'sm',
      color: 'textPrimary',
      backgroundColor: 'white'
    })}
    style={{
      width: '100%',
      border: '1px solid',
    }}
    {...props}
  >
    {children}
  </select>
);

export const FilterInput = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input 
    className={css({
      paddingX: '3',
      paddingY: '2',
      borderColor: 'borderDark',
      borderRadius: 'base',
      fontSize: 'sm',
      color: 'textPrimary',
      backgroundColor: 'white'
    })}
    style={{
      width: '100%',
      border: '1px solid',
    }}
    {...props}
  />
);

export const FilterActions = ({ children }: { children: React.ReactNode }) => (
  <div className={css({
    display: 'flex',
    gap: '3',
    justifyContent: 'flex-end'
  })}>
    {children}
  </div>
);

// Card components
export const CardsContainer = ({ children, id, 'aria-live': ariaLive }: { children: React.ReactNode, id?: string, 'aria-live'?: 'off' | 'assertive' | 'polite' }) => (
  <div 
    id={id}
    aria-live={ariaLive}
    className={css({
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '4'
    })}
  >
    {children}
  </div>
);

export const UnitCard = ({ children, sold }: { children: React.ReactNode, sold?: boolean }) => (
  <div className={css({
    backgroundColor: 'white',
    borderRadius: 'md',
    borderColor: sold ? 'red.300' : 'border',
    boxShadow: 'sm',
    overflow: 'hidden',
    opacity: sold ? 0.7 : 1
  })}
  style={{
    border: '1px solid',
  }}
  >
    {children}
  </div>
);