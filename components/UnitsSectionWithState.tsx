"use client"

import React, { useState, useMemo } from 'react';
import type { Unit } from '@/types/unit';
import type { Filters } from '@/lib/filterSort';
import { applyFilters } from '@/lib/filterSort';
import UnitsSectionComponent from './UnitsSectionComponent';

interface UnitsSectionWithStateProps {
  units: Unit[];
}

export default function UnitsSectionWithState({ units }: UnitsSectionWithStateProps) {
  const [filters, setFilters] = useState<Filters>({
    status: "",
    building: "",
    areaMin: null,
    areaMax: null,
    sort: ""
  });
  
  const [view, setView] = useState<'table' | 'cards'>(
    typeof window !== 'undefined' && window.innerWidth < 768 ? 'cards' : 'table'
  );

  // Get unique buildings from units
  const buildings = useMemo(() => {
    return Array.from(new Set(units.map(unit => unit.building))).sort();
  }, [units]);

  // Apply filters to units
  const filtered = useMemo(() => {
    return applyFilters(units, filters);
  }, [units, filters]);

  return (
    <UnitsSectionComponent
      filters={filters}
      buildings={buildings}
      filtered={filtered}
      view={view}
      setFilters={setFilters}
      setView={setView}
    />
  );
}
