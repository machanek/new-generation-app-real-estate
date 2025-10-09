'use client';

import { useState } from 'react';
import { Button } from 'react-aria-components';
import Image from 'next/image';
import { css } from '@/styled-system/css';

// Simple components with inline styles
export const UnitLayout = ({ children }: { children: React.ReactNode }) => (
  <div 
    className={css({ 
      marginX: 'auto',
      paddingX: '4'
    })}
    style={{ maxWidth: '1200px' }}
  >
    {children}
  </div>
);

export const UnitHeader = ({ children }: { children: React.ReactNode }) => (
  <div className={css({ marginBottom: '8' })}>
    {children}
  </div>
);

export const UnitTitle = ({ children }: { children: React.ReactNode }) => (
  <h1
    className={css({
      fontWeight: 'bold',
      color: 'textPrimary',
      marginBottom: '4',
      fontSize: { base: '24px', md: '32px', lg: '36px' }
    })}
  >
    {children}
  </h1>
);

export const UnitSubtitle = ({ children }: { children: React.ReactNode }) => (
  <p
    className={css({
      color: 'textSecondary',
      marginBottom: '6',
      fontSize: { base: '14px', md: '16px', lg: '18px' }
    })}
  >
    {children}
  </p>
);

export const UnitContent = ({ children }: { children: React.ReactNode }) => (
  <div
    className={css({
      display: 'grid',
      gridTemplateColumns: { base: '1fr', md: '1fr 1fr' },
      gap: '8',
      marginBottom: '8'
    })}
  >
    {children}
  </div>
);

export const UnitInfo = ({ children }: { children: React.ReactNode }) => (
  <div>
    {children}
  </div>
);

export const UnitGallery = ({ children }: { children: React.ReactNode }) => (
  <div>
    {children}
  </div>
);

export const GalleryGrid = ({ children }: { children: React.ReactNode }) => (
  <div 
    className={css({ 
      display: 'grid',
      gap: '4'
    })}
    style={{ 
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' 
    }}
  >
    {children}
  </div>
);

export const GalleryItem = ({ children, onPress, ariaLabel }: { children: React.ReactNode, onPress?: () => void, ariaLabel?: string }) => {
  if (!onPress) {
    return (
      <div
        className={css({
          borderRadius: 'md',
          overflow: 'hidden'
        })}
        style={{
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <Button
      onPress={onPress}
      aria-label={ariaLabel}
      className={css({
        cursor: 'pointer',
        borderRadius: 'md',
        overflow: 'hidden',
        border: 'none',
        padding: '0',
        background: 'none',
        transition: 'all',
        _hover: {
          transform: 'scale(1.05)',
          boxShadow: 'lg'
        },
        _focusVisible: {
          outline: '2px solid',
          outlineColor: 'primary',
          outlineOffset: '2px'
        }
      })}
      style={{
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}
    >
      {children}
    </Button>
  );
};

export const InfoGrid = ({ children }: { children: React.ReactNode }) => (
  <div 
    className={css({ 
      display: 'grid',
      gap: '4',
      marginBottom: '6'
    })}
    style={{ 
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' 
    }}
  >
    {children}
  </div>
);

export const InfoItem = ({ label, value }: { label: string, value: string }) => (
  <div 
    className={css({ 
      padding: '4',
      borderRadius: 'md'
    })}
    style={{ backgroundColor: '#F9FAFB' }}
  >
    <div 
      className={css({ 
        color: 'textSecondary',
        marginBottom: '1'
      })}
      style={{ fontSize: '14px' }}
    >
      {label}
    </div>
    <div 
      className={css({ 
        fontWeight: 'semibold',
        color: 'textPrimary'
      })}
      style={{ fontSize: '16px' }}
    >
      {value}
    </div>
  </div>
);

export const PriceInfo = ({ children }: { children: React.ReactNode }) => (
  <div 
    className={css({ 
      padding: '6',
      borderRadius: 'md'
    })}
    style={{ 
      backgroundColor: '#F0FDF4',
      border: '1px solid #D1FAE5'
    }}
  >
    {children}
  </div>
);

export const PriceLabel = ({ children }: { children: React.ReactNode }) => (
  <div 
    className={css({ 
      color: 'primary',
      marginBottom: '2'
    })}
    style={{ fontSize: '14px' }}
  >
    {children}
  </div>
);

export const PriceValue = ({ children }: { children: React.ReactNode }) => (
  <div 
    className={css({ 
      fontWeight: 'bold',
      color: 'primary'
    })}
    style={{ fontSize: '24px' }}
  >
    {children}
  </div>
);

export const PricePerM2 = ({ children }: { children: React.ReactNode }) => (
  <div 
    className={css({ 
      marginTop: '1'
    })}
    style={{ 
      fontSize: '14px',
      color: '#047857'
    }}
  >
    {children}
  </div>
);

export const ContactSection = ({ children }: { children: React.ReactNode }) => (
  <div 
    className={css({ 
      marginTop: '8',
      padding: '6',
      borderRadius: 'md'
    })}
    style={{ backgroundColor: '#F9FAFB' }}
  >
    {children}
  </div>
);

export const ContactTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 
    className={css({ 
      fontWeight: 'semibold',
      color: 'textPrimary',
      marginBottom: '4'
    })}
    style={{ fontSize: '18px' }}
  >
    {children}
  </h3>
);

export const ContactInfo = ({ children }: { children: React.ReactNode }) => (
  <div className={css({ 
    display: 'flex', 
    gap: '4',
    flexWrap: 'wrap' 
  })}>
    {children}
  </div>
);

export const ContactItem = ({ children }: { children: React.ReactNode }) => (
  <div className={css({ 
    display: 'flex', 
    alignItems: 'center', 
    gap: '2',
    color: 'textSecondary'
  })}>
    {children}
  </div>
);

// Main UnitDetails component
type UnitDetailsProps = {
  unit: {
    unit: string;
    building: string;
    floor: number;
    area: number;
    price: number;
    pricePerM2: number;
    status: 'available' | 'reserved' | 'sold';
    planUrl?: string;
    rooms: Array<{ name: string; area: number }>;
    priceHistory: Array<{ date: string; price: number; pricePerM2: number; note: string }>;
    floorPlans: Array<{ id: string; name: string; imageUrl: string }>;
  };
};

export const UnitDetails = ({ unit }: UnitDetailsProps) => {
  return (
    <UnitLayout>
      <UnitHeader>
        <UnitTitle>Mieszkanie {unit.unit}</UnitTitle>
        <UnitSubtitle>Budynek {unit.building} • Piętro {unit.floor} • {unit.area}m²</UnitSubtitle>
      </UnitHeader>
      
      <UnitContent>
        <UnitInfo>
          <InfoGrid>
            <InfoItem label="Powierzchnia" value={`${unit.area} m²`} />
            <InfoItem label="Piętro" value={`${unit.floor}`} />
            <InfoItem label="Status" value={unit.status === 'available' ? 'Dostępne' : unit.status === 'reserved' ? 'Zarezerwowane' : 'Sprzedane'} />
            <InfoItem label="Budynek" value={unit.building} />
          </InfoGrid>
          
          <PriceInfo>
            <PriceLabel>Cena</PriceLabel>
            <PriceValue>{unit.price.toLocaleString('pl-PL')} PLN</PriceValue>
            <PricePerM2>{unit.pricePerM2.toLocaleString('pl-PL')} PLN/m²</PricePerM2>
          </PriceInfo>
        </UnitInfo>
        
        <UnitGallery>
          <GalleryGrid>
            {unit.floorPlans.map((plan) => (
              <GalleryItem key={plan.id}>
                <img 
                  src={plan.imageUrl} 
                  alt={plan.name}
                  className={css({ 
                    objectFit: 'cover'
                  })}
                  style={{ 
                    width: '100%',
                    height: '200px'
                  }}
                />
              </GalleryItem>
            ))}
          </GalleryGrid>
        </UnitGallery>
      </UnitContent>
      
      <ContactSection>
        <ContactTitle>Skontaktuj się z nami</ContactTitle>
        <ContactInfo>
          <ContactItem>
            <span>📞</span>
            <span>+48 123 456 789</span>
          </ContactItem>
          <ContactItem>
            <span>✉️</span>
            <span>kontakt@harmonia-rzaska.pl</span>
          </ContactItem>
        </ContactInfo>
      </ContactSection>
    </UnitLayout>
  );
};

export default UnitDetails;