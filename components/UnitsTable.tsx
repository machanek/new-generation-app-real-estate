// components/UnitsTable.tsx
import React from "react";
import type { Unit } from "@/types/unit";
import { formatM2, formatPLN } from "@/lib/format";
import { css } from "@/styled-system/css";
import {
  TableContainer,
  UnitsTable as StyledUnitsTable,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  StatusBadge,
  PlanLink,
} from "@/components/ui/UnitsSection";

type Props = { items: Unit[] };

export default function UnitsTable({ items }: Props) {
  return (
    <TableContainer>
      <StyledUnitsTable id="unitsTable" aria-label="Tabela jednostek">
        <TableHeader>
          <TableHeaderCell>ID</TableHeaderCell>
          <TableHeaderCell>Budynek</TableHeaderCell>
          <TableHeaderCell>Lokal</TableHeaderCell>
          <TableHeaderCell>Piętro</TableHeaderCell>
          <TableHeaderCell>Pow. (m²)</TableHeaderCell>
          <TableHeaderCell>Dodatki</TableHeaderCell>
          <TableHeaderCell>Cena (PLN)</TableHeaderCell>
          <TableHeaderCell>Cena/m²</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell>Plan</TableHeaderCell>
        </TableHeader>
        <TableBody>
          {items.length === 0 ? (
            <TableRow>
              <TableCell 
                colSpan={10} 
                className={css({
                  textAlign: 'center',
                  padding: '32px 0',
                  color: 'textSecondary'
                })}
              >
                Brak dostępnych mieszkań
              </TableCell>
            </TableRow>
          ) : (
            items.map((u) => (
            <TableRow key={u.id}>
                  <TableCell>
                    <a 
                      href={`/mieszkania/unit-${u.unit || u.id}`} 
                      className={css({
                        color: 'primary',
                        textDecoration: 'none',
                        _hover: {
                          textDecoration: 'underline'
                        }
                      })}
                    >
                      {u.id}
                    </a>
                  </TableCell>
              <TableCell>{u.building ?? "—"}</TableCell>
              <TableCell>{u.unit ?? "—"}</TableCell>
              <TableCell>{u.floor ?? "—"}</TableCell>
              <TableCell>{formatM2(u.area)}</TableCell>
              <TableCell>{u.extras?.join(", ") ?? "—"}</TableCell>
              <TableCell>{formatPLN(u.price)}</TableCell>
              <TableCell>{u.pricePerM2 ? formatPLN(u.pricePerM2) : (u.price && u.area ? formatPLN(Math.round(u.price/u.area)) : "—")}</TableCell>
              <TableCell><StatusBadgeComponent status={u.status} /></TableCell>
              <TableCell>{u.planUrl ? <PlanLink href={u.planUrl} target="_blank" rel="noopener noreferrer">Zobacz</PlanLink> : "—"}</TableCell>
            </TableRow>
          ))
          )}
        </TableBody>
      </StyledUnitsTable>
    </TableContainer>
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
