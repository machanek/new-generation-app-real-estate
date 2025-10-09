'use client'
import React, { useState } from "react";
import { Button } from 'react-aria-components';
import type { Unit } from "@/types/unit";
import { formatM2, formatPLN } from "@/lib/format";
import { css } from '@/styled-system/css';
import {
  CardsContainer,
  UnitCard,
  CardHeader,
  CardId,
  CardInfo,
  CardField,
  FieldLabel,
  FieldValue,
  CardDetails,
  CardActions,
  PlanLink,
  MutedText,
  StatusBadge,
} from "@/components/ui/UnitsSection";

type Props = { items: Unit[] };

export default function UnitsCards({ items }: Props) {
  // Track expanded state for each card by ID
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <CardsContainer id="unitsCards" aria-live="polite">
      {items.map((u) => {
        const isExpanded = expandedIds.has(u.id);

        return (
          <UnitCard
            key={u.id}
            sold={u.status?.toLowerCase().startsWith("sprzed") || false}
          >
            {/* Header - Always visible + clickable */}
            <Button
              onPress={() => toggleExpanded(u.id)}
              aria-expanded={isExpanded}
              aria-controls={`unit-details-${u.id}`}
              aria-label={`${isExpanded ? 'Zwiń' : 'Rozwiń'} szczegóły mieszkania ${u.building} ${u.unit}`}
              className={css({
                width: '100%',
                background: 'none',
                border: 'none',
                padding: '0',
                cursor: 'pointer',
                textAlign: 'left',
                _hover: { opacity: 0.8 },
                _focusVisible: {
                  outline: '2px solid',
                  outlineColor: 'primary',
                  outlineOffset: '2px',
                }
              })}
            >
              <CardHeader>
                <CardId>{u.building ?? "—"} {u.unit ?? ""}</CardId>
                <StatusBadgeComponent status={u.status} />
              </CardHeader>
            </Button>

            {/* Compact Info - Always visible */}
            <CardInfo>
              <CardField>
                <FieldLabel>Powierzchnia:</FieldLabel>
                <FieldValue>{formatM2(u.area)}</FieldValue>
              </CardField>
              <CardField>
                <FieldLabel>Cena:</FieldLabel>
                <FieldValue>{formatPLN(u.price)}</FieldValue>
              </CardField>
            </CardInfo>

            {/* Expand/Collapse Indicator */}
            <Button
              onPress={() => toggleExpanded(u.id)}
              aria-expanded={isExpanded}
              aria-controls={`unit-details-${u.id}`}
              aria-label={`${isExpanded ? 'Zwiń' : 'Rozwiń'} szczegóły mieszkania ${u.building} ${u.unit}`}
              className={css({
                width: '100%',
                background: 'none',
                border: 'none',
                textAlign: 'center',
                padding: '2',
                cursor: 'pointer',
                color: 'primary',
                fontWeight: 'semibold',
                fontSize: '14px',
                borderTop: '1px solid',
                borderColor: 'border',
                _hover: { backgroundColor: 'bgGray' },
                _focusVisible: {
                  outline: '2px solid',
                  outlineColor: 'primary',
                  outlineOffset: '-2px',
                }
              })}
            >
              {isExpanded ? '▲ Zwiń szczegóły' : '▼ Rozwiń szczegóły'}
            </Button>

            {/* Expanded Details - Only when expanded */}
            {isExpanded && (
              <div
                id={`unit-details-${u.id}`}
                role="region"
                aria-label={`Szczegóły mieszkania ${u.building} ${u.unit}`}
              >
                <CardInfo>
                  <CardField>
                    <FieldLabel>Piętro:</FieldLabel>
                    <FieldValue>{u.floor ?? "—"}</FieldValue>
                  </CardField>
                  <CardField>
                    <FieldLabel>Cena/m²:</FieldLabel>
                    <FieldValue>
                      {u.pricePerM2 ? formatPLN(u.pricePerM2) : (u.price && u.area ? formatPLN(Math.round(u.price/u.area)) : "—")}
                    </FieldValue>
                  </CardField>
                  {u.extras && u.extras.length > 0 && (
                    <CardField>
                      <FieldLabel>Dodatki:</FieldLabel>
                      <FieldValue>{u.extras.join(", ")}</FieldValue>
                    </CardField>
                  )}
                </CardInfo>

                <CardActions>
                  {u.planUrl ? (
                    <PlanLink href={u.planUrl} target="_blank" rel="noopener noreferrer">
                      📄 Zobacz plan mieszkania
                    </PlanLink>
                  ) : (
                    <MutedText>Brak planu</MutedText>
                  )}
                </CardActions>
              </div>
            )}
          </UnitCard>
        );
      })}
    </CardsContainer>
  );
}

function StatusBadgeComponent({ status }: { status?: string | null }) {
  const s = (status ?? "").toLowerCase();

  const statusType =
    s === "wolny" || s === "available" ? "free" :
    s.startsWith("zarezer") || s === "reserved" ? "reserved" :
    s.startsWith("sprzed") || s === "sold" ? "sold" :
    "free";

  const label =
    s === "wolny" || s === "available" ? "WOLNE" :
    s.startsWith("zarezer") || s === "reserved" ? "ZAREZERWOWANE" :
    s.startsWith("sprzed") || s === "sold" ? "SPRZEDANE" :
    (status ?? "—");

  return <StatusBadge status={statusType}>{label}</StatusBadge>;
}
