// components/UnitsCards.tsx
import React from "react";
import type { Unit } from "@/types/unit";
import { formatM2, formatPLN } from "@/lib/format";
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
  return (
    <CardsContainer id="unitsCards" aria-live="polite">
      {items.map((u) => (
        <UnitCard key={u.id} sold={u.status?.toLowerCase().startsWith("sprzed") || false}>
          <CardHeader>
            <CardId>{u.building ?? "—"} {u.unit ?? ""}</CardId>
            <StatusBadgeComponent status={u.status} />
          </CardHeader>
          <CardInfo>
            <CardField>
              <FieldLabel>Piętro:</FieldLabel>
              <FieldValue>{u.floor ?? "—"}</FieldValue>
            </CardField>
            <CardField>
              <FieldLabel>Powierzchnia:</FieldLabel>
              <FieldValue>{formatM2(u.area)}</FieldValue>
            </CardField>
            <CardField>
              <FieldLabel>Dodatki:</FieldLabel>
              <FieldValue>{u.extras?.join(", ") ?? "—"}</FieldValue>
            </CardField>
            <CardField>
              <FieldLabel>Cena:</FieldLabel>
              <FieldValue>{formatPLN(u.price)}</FieldValue>
            </CardField>
            <CardField>
              <FieldLabel>Cena/m²:</FieldLabel>
              <FieldValue>
                {u.pricePerM2 ? formatPLN(u.pricePerM2) : (u.price && u.area ? formatPLN(Math.round(u.price/u.area)) : "—")}
              </FieldValue>
            </CardField>
            <CardField>
              <FieldLabel>Status:</FieldLabel>
              <FieldValue><StatusBadgeComponent status={u.status} /></FieldValue>
            </CardField>
          </CardInfo>
          {u.extras && u.extras.length > 0 && (
            <CardDetails>
              <p><strong>Dodatki:</strong> {u.extras.join(", ")}</p>
            </CardDetails>
          )}
          <CardActions>
            {u.planUrl ? (
              <PlanLink href={u.planUrl} target="_blank" rel="noopener noreferrer">
                Zobacz plan
              </PlanLink>
            ) : (
              <MutedText>Brak planu</MutedText>
            )}
          </CardActions>
        </UnitCard>
      ))}
    </CardsContainer>
  );
}

function StatusBadgeComponent({ status }: { status?: string | null }) {
  const s = (status ?? "").toLowerCase();
  
  // Handle both Polish and English statuses from Payload CMS
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
