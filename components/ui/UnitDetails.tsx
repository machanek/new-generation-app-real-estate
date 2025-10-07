'use client';

import { useState } from 'react';
import Image from 'next/image';

// Simple components with inline styles
export const UnitLayout = ({ children }: { children: React.ReactNode }) => (
  <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
    {children}
  </div>
);

export const UnitHeader = ({ children }: { children: React.ReactNode }) => (
  <div style={{ marginBottom: '32px' }}>
    {children}
  </div>
);

export const UnitTitle = ({ children }: { children: React.ReactNode }) => (
  <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#1F2937', marginBottom: '16px' }}>
    {children}
  </h1>
);

export const UnitSubtitle = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontSize: '18px', color: '#6B7280', marginBottom: '24px' }}>
    {children}
  </p>
);

export const UnitContent = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '32px' }}>
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
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
    {children}
  </div>
);

export const GalleryItem = ({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) => (
  <div 
    style={{ 
      cursor: onClick ? 'pointer' : 'default',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    }}
    onClick={onClick}
  >
    {children}
  </div>
);

export const InfoGrid = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
    {children}
  </div>
);

export const InfoItem = ({ label, value }: { label: string, value: string }) => (
  <div style={{ padding: '16px', backgroundColor: '#F9FAFB', borderRadius: '8px' }}>
    <div style={{ fontSize: '14px', color: '#6B7280', marginBottom: '4px' }}>{label}</div>
    <div style={{ fontSize: '16px', fontWeight: '600', color: '#1F2937' }}>{value}</div>
  </div>
);

export const PriceInfo = ({ children }: { children: React.ReactNode }) => (
  <div style={{ padding: '24px', backgroundColor: '#F0FDF4', borderRadius: '8px', border: '1px solid #D1FAE5' }}>
    {children}
  </div>
);

export const PriceLabel = ({ children }: { children: React.ReactNode }) => (
  <div style={{ fontSize: '14px', color: '#065F46', marginBottom: '8px' }}>{children}</div>
);

export const PriceValue = ({ children }: { children: React.ReactNode }) => (
  <div style={{ fontSize: '24px', fontWeight: '700', color: '#065F46' }}>{children}</div>
);

export const PricePerM2 = ({ children }: { children: React.ReactNode }) => (
  <div style={{ fontSize: '14px', color: '#047857', marginTop: '4px' }}>{children}</div>
);

export const ContactSection = ({ children }: { children: React.ReactNode }) => (
  <div style={{ marginTop: '32px', padding: '24px', backgroundColor: '#F9FAFB', borderRadius: '8px' }}>
    {children}
  </div>
);

export const ContactTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1F2937', marginBottom: '16px' }}>
    {children}
  </h3>
);

export const ContactInfo = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
    {children}
  </div>
);

export const ContactItem = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#374151' }}>
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
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
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