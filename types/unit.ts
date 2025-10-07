// types/unit.ts
export interface Unit {
  id: string;
  unit: string;
  building: string;
  floor: number;
  area: number;
  price: number;
  pricePerM2?: number;
  status: 'available' | 'sold' | 'reserved';
  planUrl?: string;
  unitPageUrl?: string;
  extras?: string[];
  createdAt: string;
  updatedAt: string;
}
