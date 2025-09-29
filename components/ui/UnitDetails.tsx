'use client';

import { styled } from '@/lib/stitches.config';
import { useState } from 'react';
import Image from 'next/image';

// Layout components
export const UnitLayout = styled('div', {
  display: 'grid',
  gap: '$6',
  
  '@lg': {
    gridTemplateColumns: 'minmax(280px, 30%) 1fr',
    alignItems: 'start',
    columnGap: '$6',
    rowGap: 0,
  },
});

export const UnitSidebar = styled('aside', {
  '@lg': {
    position: 'sticky',
    top: '$6',
  },
});

export const UnitGallery = styled('section', {
  // Gallery takes remaining space on desktop
});

// Table block styling
export const TableBlock = styled('div', {
  backgroundColor: '$background',
  borderRadius: '$4',
  padding: '$6',
  boxShadow: '$2',
  border: '1px solid $border',
  marginBottom: '$8',
});

export const SectionTitle = styled('h2', {
  fontSize: '$6',
  fontWeight: '$4',
  color: '$textDark',
  marginBottom: '$4',
  margin: 0,
  
  variants: {
    size: {
      h3: {
        fontSize: '$5',
      },
      h4: {
        fontSize: '$4',
      },
    },
  },
});

// Table styling
export const DetailsTable = styled('table', {
  width: '100%',
  borderCollapse: 'collapse',
  
  '& caption': {
    position: 'absolute',
    left: '-9999px',
  },
  
  '& th, & td': {
    padding: '$2 $3',
    borderBottom: '1px solid $borderLight',
    verticalAlign: 'top',
  },
  
  '& th': {
    fontWeight: '$3',
    color: '$textLight',
    width: '36%',
    scope: 'row',
  },
  
  '& tfoot td, & tfoot th': {
    fontWeight: '$4',
    borderTop: '2px solid $border',
  },
  
  '& .sum td, & .sum th': {
    fontWeight: '$4',
  },
  
  variants: {
    hasHead: {
      true: {
        '& thead th': {
          textTransform: 'none',
          fontWeight: '$3',
          color: '$textLight',
        },
        
        '@md': {
          '& thead': {
            display: 'none',
          },
          '& tr': {
            display: 'block',
            padding: '$1 0',
            borderBottom: '1px solid $borderLight',
          },
          '& td': {
            display: 'flex',
            justifyContent: 'space-between',
            gap: '$3',
            padding: '$2 0',
          },
          '& td::before': {
            content: 'attr(data-label)',
            fontWeight: '$3',
            color: '$textLight',
          },
          '& th': {
            width: 'auto',
          },
        },
      },
    },
  },
});

// Status chips
export const StatusChip = styled('span', {
  display: 'inline-block',
  padding: '$1 $2',
  borderRadius: '999px',
  fontSize: '$1',
  fontWeight: '$3',
  
  variants: {
    status: {
      available: {
        backgroundColor: 'rgba(22, 163, 74, 0.12)',
        color: '#166534',
        border: '1px solid rgba(22, 163, 74, 0.3)',
      },
      reserved: {
        backgroundColor: 'rgba(234, 179, 8, 0.12)',
        color: '#854d0e',
        border: '1px solid rgba(234, 179, 8, 0.3)',
      },
      sold: {
        backgroundColor: 'rgba(239, 68, 68, 0.12)',
        color: '#991b1b',
        border: '1px solid rgba(239, 68, 68, 0.3)',
      },
    },
  },
});

// CTA buttons
export const CtaRow = styled('div', {
  marginTop: '$4',
  display: 'flex',
  gap: '$3',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

export const Button = styled('a', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$3',
  padding: '$3 $4',
  fontWeight: '$4',
  borderRadius: '$3',
  border: '1px solid transparent',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  
  variants: {
    variant: {
      brand: {
        backgroundColor: '$primary',
        color: '$textWhite',
        borderColor: '$primary',
        
        '&:hover': {
          filter: 'brightness(0.95)',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: '$primary',
        borderColor: '$primary',
        
        '&:hover': {
          backgroundColor: '$primary',
          color: '$textWhite',
        },
      },
    },
    block: {
      true: {
        width: '100%',
        
        '@md': {
          width: 'auto',
        },
      },
    },
  },
});

// Gallery components
export const PlanTabs = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$2',
  marginBottom: '$4',
  
  '@sm': {
    display: 'none',
  },
});

export const PlanTab = styled('button', {
  appearance: 'none',
  border: '1px solid $border',
  backgroundColor: '$background',
  color: '$textDark',
  borderRadius: '999px',
  padding: '$2 $4',
  fontWeight: '$3',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  
  '&[aria-selected="true"]': {
    backgroundColor: '$primary',
    color: '$textWhite',
    borderColor: '$primary',
  },
  
  '&:hover': {
    borderColor: '$primary',
  },
});

export const PlanSelect = styled('select', {
  width: '100%',
  padding: '$3 $4',
  borderRadius: '$2',
  border: '1px solid $border',
  backgroundColor: '$background',
  marginBottom: '$4',
  
  '@sm': {
    display: 'none',
  },
});

export const PlanPanels = styled('div', {
  // Container for plan panels
});

export const PlanPanel = styled('div', {
  '&[hidden]': {
    display: 'none',
  },
});

export const PlanImage = styled('div', {
  width: '100%',
  backgroundColor: '$background',
  padding: '$4',
  borderRadius: '$4',
  border: '1px solid $border',
  boxShadow: '$2',
  aspectRatio: '16/11',
  display: 'grid',
  placeItems: 'center',
  
  '& img': {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  },
});

// Price history specific styling
export const PriceHistorySection = styled('section', {
  width: '100%',
  
  '@lg': {
    gridColumn: '2 / -1',
    maxWidth: 'none',
    marginLeft: 0,
    marginRight: 0,
    marginTop: '$10',
  },
});

// Type definitions
export interface UnitDetailsProps {
  unit: {
    unit: string;
    building: string;
    floor: number;
    area: number;
    price: number;
    pricePerM2: number;
    status: 'available' | 'reserved' | 'sold';
    planUrl?: string;
    rooms?: Array<{
      name: string;
      area: number;
    }>;
    priceHistory?: Array<{
      date: string;
      price: number;
      pricePerM2: number;
      note?: string;
    }>;
    floorPlans?: Array<{
      id: string;
      name: string;
      imageUrl: string;
    }>;
  };
}

export default function UnitDetails({ unit }: UnitDetailsProps) {
  const [activePlan, setActivePlan] = useState(unit.floorPlans?.[0]?.id || '');

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault();
      const currentIndex = unit.floorPlans?.findIndex(plan => plan.id === activePlan) || 0;
      const totalPlans = unit.floorPlans?.length || 0;
      
      if (e.key === 'ArrowLeft') {
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : totalPlans - 1;
        setActivePlan(unit.floorPlans?.[prevIndex]?.id || '');
      } else if (e.key === 'ArrowRight') {
        const nextIndex = currentIndex < totalPlans - 1 ? currentIndex + 1 : 0;
        setActivePlan(unit.floorPlans?.[nextIndex]?.id || '');
      }
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pl-PL', {
      style: 'currency',
      currency: 'PLN',
    }).format(price);
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('pl-PL');
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'available': return 'Dostępne';
      case 'reserved': return 'Zarezerwowane';
      case 'sold': return 'Sprzedane';
      default: return status;
    }
  };

  return (
    <UnitLayout>
      {/* Left Sidebar */}
      <UnitSidebar>
        {/* Unit Specifications */}
        <TableBlock>
          <SectionTitle size="h3">Szczegóły lokalu</SectionTitle>
          <DetailsTable>
            <tbody>
              <tr>
                <th>Lokal</th>
                <td>{unit.unit}</td>
              </tr>
              <tr>
                <th>Bud.</th>
                <td>{unit.building}</td>
              </tr>
              <tr>
                <th>Piętro</th>
                <td>{unit.floor}</td>
              </tr>
              <tr>
                <th>Powierzchnia</th>
                <td>{unit.area} m²</td>
              </tr>
              <tr>
                <th>Status</th>
                <td>
                  <StatusChip status={unit.status}>
                    {getStatusLabel(unit.status)}
                  </StatusChip>
                </td>
              </tr>
              <tr>
                <th>Cena</th>
                <td>{formatPrice(unit.price)}</td>
              </tr>
              <tr>
                <th>Cena/m²</th>
                <td>{formatPrice(unit.pricePerM2)}</td>
              </tr>
            </tbody>
          </DetailsTable>
          <CtaRow>
            {unit.planUrl && (
              <Button variant="brand" block href={unit.planUrl} target="_blank" rel="noopener">
                Pobierz kartę lokalu (PDF)
              </Button>
            )}
          </CtaRow>
        </TableBlock>

        {/* Room Areas */}
        {unit.rooms && unit.rooms.length > 0 && (
          <TableBlock>
            <SectionTitle size="h4">Powierzchnia pomieszczeń</SectionTitle>
            <DetailsTable hasHead>
              <thead>
                <tr>
                  <th>Pomieszczenie</th>
                  <th>Powierzchnia [m²]</th>
                </tr>
              </thead>
              <tbody>
                {unit.rooms.map((room, index) => (
                  <tr key={index}>
                    <td data-label="Pomieszczenie">{room.name}</td>
                    <td data-label="Powierzchnia [m²]">{room.area}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="sum">
                  <th>Suma</th>
                  <td>{unit.area} m²</td>
                </tr>
              </tfoot>
            </DetailsTable>
          </TableBlock>
        )}
      </UnitSidebar>

      {/* Right Column: Gallery */}
      {unit.floorPlans && unit.floorPlans.length > 0 && (
        <UnitGallery>
          <SectionTitle size="h3">Rzut mieszkania</SectionTitle>

          {/* Mobile Select */}
          <PlanSelect
            value={activePlan}
            onChange={(e) => setActivePlan(e.target.value)}
          >
            {unit.floorPlans.map((plan) => (
              <option key={plan.id} value={plan.id}>
                {plan.name}
              </option>
            ))}
          </PlanSelect>

          {/* Desktop Tabs */}
          <PlanTabs role="tablist" aria-label="Wybierz poziom" onKeyDown={handleKeyDown}>
            {unit.floorPlans.map((plan) => (
              <PlanTab
                key={plan.id}
                role="tab"
                aria-selected={activePlan === plan.id}
                aria-controls={`panel-${plan.id}`}
                id={`tab-${plan.id}`}
                onClick={() => setActivePlan(plan.id)}
                tabIndex={activePlan === plan.id ? 0 : -1}
              >
                {plan.name}
              </PlanTab>
            ))}
          </PlanTabs>

          {/* Plan Panels */}
          <PlanPanels>
            {unit.floorPlans.map((plan) => (
              <PlanPanel
                key={plan.id}
                id={`panel-${plan.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${plan.id}`}
                hidden={activePlan !== plan.id}
              >
                <PlanImage>
                  <Image 
                    src={plan.imageUrl} 
                    alt={`Rzut: ${plan.name}`} 
                    width={800}
                    height={600}
                    style={{ 
                      maxWidth: '100%', 
                      height: 'auto',
                      objectFit: 'contain'
                    }}
                  />
                </PlanImage>
              </PlanPanel>
            ))}
          </PlanPanels>
        </UnitGallery>
      )}

      {/* Price History */}
      {unit.priceHistory && unit.priceHistory.length > 0 && (
        <PriceHistorySection>
          <TableBlock>
            <SectionTitle size="h4">Historia ceny</SectionTitle>
            <DetailsTable hasHead>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Cena</th>
                  <th>Cena/m²</th>
                  <th>Uwagi</th>
                </tr>
              </thead>
              <tbody>
                {unit.priceHistory.map((entry, index) => (
                  <tr key={index}>
                    <td data-label="Data">{formatDate(entry.date)}</td>
                    <td data-label="Cena">{formatPrice(entry.price)}</td>
                    <td data-label="Cena/m²">{formatPrice(entry.pricePerM2)}</td>
                    <td data-label="Uwagi">{entry.note || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </DetailsTable>
          </TableBlock>
        </PriceHistorySection>
      )}
    </UnitLayout>
  );
}
