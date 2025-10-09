/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from "react";
import { Button } from 'react-aria-components';
import type { GalleryItem } from "@/lib/loadGallery";
import { css } from "@/styled-system/css";

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!items.length) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        gap: '4'
      })}
      role="region"
      aria-label="Galeria zdjęć osiedla"
    >
      {/* Main Image */}
      <div
        className={css({
          overflow: 'hidden',
          borderRadius: 'base',
          height: { base: '300px', md: '400px', lg: '500px' },
          width: '100%'
        })}
      >
        <img
          src={currentItem?.src}
          alt={currentItem?.alt ?? `Zdjęcie ${currentIndex + 1}`}
          loading="eager"
          aria-live="polite"
          className={css({
            objectFit: 'cover',
            width: '100%',
            height: '100%'
          })}
        />
      </div>

      {/* Thumbnail Navigation */}
      <div
        role="tablist"
        aria-label="Nawigacja miniatur galerii"
        className={css({
          display: 'flex',
          gap: '2',
          overflowX: 'auto',
          paddingX: '0',
          paddingY: '2'
        })}
      >
        {items.map((it, i) => (
          <Button
            key={i}
            role="tab"
            aria-selected={i === currentIndex}
            aria-controls="gallery-main"
            aria-label={`Zobacz ${it.alt ?? `zdjęcie ${i + 1}`}`}
            onPress={() => setCurrentIndex(i)}
            className={css({
              flexShrink: 0,
              borderRadius: 'base',
              overflow: 'hidden',
              opacity: i === currentIndex ? 1 : 0.6,
              cursor: 'pointer',
              border: i === currentIndex ? '3px solid' : '2px solid transparent',
              borderColor: i === currentIndex ? 'primary' : 'transparent',
              transition: 'all',
              padding: '0',
              background: 'none',
              _hover: {
                opacity: 1,
                transform: 'scale(1.05)'
              },
              _focusVisible: {
                outline: '2px solid',
                outlineColor: 'primary',
                outlineOffset: '2px',
                opacity: 1
              }
            })}
            style={{
              width: '80px',
              height: '60px'
            }}
          >
            <img
              src={it.src}
              alt={it.alt ?? `Miniatura ${i+1}`}
              loading="lazy"
              className={css({
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                display: 'block'
              })}
            />
          </Button>
        ))}
      </div>
    </div>
  );
}
