/* eslint-disable @next/next/no-img-element */
import React from "react";
import type { GalleryItem } from "@/lib/loadGallery";
import { css } from "@/styled-system/css";

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  if (!items.length) return null;
  return (
    <div 
      className={css({
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      })}
      aria-label="Galeria zdjęć osiedla"
    >
      <div className={css({
        width: '100%',
        height: '400px',
        overflow: 'hidden',
        borderRadius: 'base'
      })}>
        <img 
          src={items[0]?.src} 
          alt={items[0]?.alt ?? "Zdjęcie 1"} 
          loading="eager"
          className={css({
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          })}
        />
      </div>
      <div className={css({
        display: 'flex',
        gap: '8px',
        overflowX: 'auto',
        padding: '8px 0'
      })}>
        {items.map((it, i) => (
          <div 
            key={i} 
            className={css({
              flexShrink: 0,
              width: '80px',
              height: '60px',
              borderRadius: 'base',
              overflow: 'hidden',
              opacity: i === 0 ? 1 : 0.7,
              cursor: 'pointer',
              _hover: {
                opacity: 1
              }
            })}
          >
            <img 
              src={it.src} 
              alt={it.alt ?? `Zdjęcie ${i+1}`} 
              loading="lazy"
              className={css({
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              })}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
