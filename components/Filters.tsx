// components/Filters.tsx
'use client'
import React from "react";
import type { Filters } from "@/lib/filterSort";
import {
  FiltersForm,
  FiltersGrid,
  FilterGroup,
  FilterLabel,
  FilterSelect,
  FilterInput,
  FilterActions,
} from "@/components/ui/UnitsSection";
import { Button } from "@/components/ui/Button";

type Props = {
  value: Filters;
  buildings: string[];
  onChange: (f: Filters) => void;
  onReset: () => void;
};

export default function Filters({ value, buildings, onChange, onReset }: Props) {
  return (
    <FiltersForm
      id="filters"
      role="search"
      aria-label="Filtry oferty mieszkań"
      onSubmit={(e)=>e.preventDefault()}
    >
      <FiltersGrid>
        <FilterGroup>
          <FilterLabel htmlFor="filter-status">Status</FilterLabel>
          <FilterSelect
            id="filter-status"
            name="status"
            aria-label="Wybierz status mieszkania"
            value={value.status ?? ""}
            onChange={(e) => onChange({ ...value, status: e.target.value as typeof value.status })}
          >
            <option value="">Wszystkie</option>
            <option value="wolny">Wolne</option>
            <option value="zarezerwowany">Zarezerwowane</option>
            <option value="sprzedany">Sprzedane</option>
          </FilterSelect>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel htmlFor="filter-budynek">Budynek</FilterLabel>
          <FilterSelect
            id="filter-budynek"
            name="building"
            aria-label="Wybierz numer budynku"
            value={value.building ?? ""}
            onChange={(e) => onChange({ ...value, building: e.target.value })}
          >
            <option value="">Wszystkie</option>
            {buildings.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </FilterSelect>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel htmlFor="filter-min">Pow. min (m²)</FilterLabel>
          <FilterInput
            id="filter-min"
            name="areaMin"
            type="number"
            min={0}
            step={1}
            inputMode="numeric"
            aria-label="Minimalna powierzchnia w metrach kwadratowych"
            aria-describedby="filter-min-desc"
            value={value.areaMin ?? ""}
            onChange={(e) => onChange({ ...value, areaMin: e.target.value ? Number(e.target.value) : null })}
          />
          <span id="filter-min-desc" className="sr-only">
            Wprowadź minimalną powierzchnię mieszkania w metrach kwadratowych
          </span>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel htmlFor="filter-max">Pow. max (m²)</FilterLabel>
          <FilterInput
            id="filter-max"
            name="areaMax"
            type="number"
            min={0}
            step={1}
            inputMode="numeric"
            aria-label="Maksymalna powierzchnia w metrach kwadratowych"
            aria-describedby="filter-max-desc"
            value={value.areaMax ?? ""}
            onChange={(e) => onChange({ ...value, areaMax: e.target.value ? Number(e.target.value) : null })}
          />
          <span id="filter-max-desc" className="sr-only">
            Wprowadź maksymalną powierzchnię mieszkania w metrach kwadratowych
          </span>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel htmlFor="filter-sort">Sortowanie</FilterLabel>
          <FilterSelect
            id="filter-sort"
            name="sort"
            aria-label="Wybierz sposób sortowania wyników"
            value={value.sort ?? ""}
            onChange={(e) => onChange({ ...value, sort: e.target.value as typeof value.sort })}
          >
            <option value="">Domyślne</option>
            <option value="cena_asc">Cena rosnąco</option>
            <option value="cena_desc">Cena malejąco</option>
            <option value="pow_asc">Powierzchnia rosnąco</option>
            <option value="pow_desc">Powierzchnia malejąco</option>
          </FilterSelect>
        </FilterGroup>
      </FiltersGrid>

      <FilterActions>
        <Button
          type="button"
          variant="primary"
          size="sm"
          onPress={() => onChange({ ...value })}
          aria-label="Zastosuj filtry"
        >
          Filtruj
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="sm"
          onPress={onReset}
          aria-label="Wyczyść wszystkie filtry"
        >
          Wyczyść
        </Button>
      </FilterActions>
    </FiltersForm>
  );
}
