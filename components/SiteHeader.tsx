"use client"

// components/SiteHeader.tsx
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Menu, Download, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { css } from "../styled-system/css";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <a 
        href="#main-content" 
        style={{
          position: 'absolute',
          left: '-9999px',
          zIndex: 999,
          padding: '8px 12px',
          backgroundColor: '#065F46',
          color: '#FFFFFF',
          textDecoration: 'none',
          borderRadius: '6px',
          fontWeight: '600',
        }}
        onFocus={(e) => {
          e.target.style.left = '16px';
          e.target.style.top = '16px';
        }}
      >
        Przejdź do głównej treści
      </a>
      
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E5E7EB',
        zIndex: 999,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '80px',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 16px',
        }}>
          <a 
            href="#top" 
            aria-label="Harmonia Rząska — strona główna" 
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
          >
            <img 
              src="/assets/logo-harmonia-rzaska.svg" 
              alt="Harmonia Rząska" 
              className={css({
                height: '10',
                width: 'auto',
                transition: 'all 0.3s ease',
                '&:hover': {
                  filter: 'brightness(1.1)',
                  transform: 'scale(1.02)'
                }
              })}
            />
          </a>

          {/* DESKTOP NAV */}
          <nav className={css({
            display: 'none',
            alignItems: 'center',
            gap: '6',
            md: {
              display: 'flex'
            }
          })}>
            <a 
              href="#o-nas" 
              className={css({
                color: 'textPrimary',
                textDecoration: 'none',
                fontWeight: 'medium',
                padding: '8px 16px',
                transition: 'color 0.3s ease',
                position: 'relative',
                _hover: {
                  color: 'primary'
                }
              })}
            >
              O nas
            </a>
            <a 
              href="#lokale" 
              className={css({
                color: 'textPrimary',
                textDecoration: 'none',
                fontWeight: 'medium',
                padding: '8px 16px',
                transition: 'color 0.3s ease',
                position: 'relative',
                _hover: {
                  color: 'primary'
                }
              })}
            >
              Lokale
            </a>
            <a 
              href="#galeria" 
              className={css({
                color: 'textPrimary',
                textDecoration: 'none',
                fontWeight: 'medium',
                padding: '8px 16px',
                transition: 'color 0.3s ease',
                position: 'relative',
                _hover: {
                  color: 'primary'
                }
              })}
            >
              Galeria
            </a>
            <a 
              href="#kontakt" 
              className={css({
                color: 'textPrimary',
                textDecoration: 'none',
                fontWeight: 'medium',
                padding: '8px 16px',
                transition: 'color 0.3s ease',
                position: 'relative',
                _hover: {
                  color: 'primary'
                }
              })}
            >
              Kontakt
            </a>
            <ButtonLink 
              href="/assets/prospekt-harmonia-rzaska.pdf" 
              target="_blank" 
              rel="noopener"
              variant="primary"
              size="md"
            >
              <Download size={16} />
              Prospekt
            </ButtonLink>
            <ButtonLink 
              href="tel:+48730090030"
              variant="secondary"
              size="md"
            >
              <Phone size={16} />
              730 090 030
            </ButtonLink>
          </nav>

          {/* MOBILE NAV */}
          <nav className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '3',
            md: {
              display: 'none'
            }
          })}>
            <ButtonLink 
              href="/assets/prospekt-harmonia-rzaska.pdf" 
              target="_blank" 
              rel="noopener"
              variant="primary"
              size="sm"
            >
              <Download size={16} />
              Prospekt
            </ButtonLink>
            <ButtonLink 
              href="tel:+48730090030"
              variant="secondary"
              size="sm"
            >
              <Phone size={16} />
              730 090 030
            </ButtonLink>
            <button 
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
              aria-expanded={isMenuOpen}
              style={{
                background: 'none',
                border: '1px solid #065F46',
                borderRadius: '4px',
                padding: '8px',
                cursor: 'pointer',
                color: '#065F46',
                transition: 'all 0.3s ease',
              }}
            >
              <Menu size={24} />
            </button>
          </nav>
        </div>

        {/* MOBILE DROPDOWN */}
        {isMenuOpen && (
          <div className={css({
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            backgroundColor: 'bg-white',
            borderTop: '1px solid',
            borderColor: 'border',
            boxShadow: 'md',
            zIndex: 'max',
            md: {
              display: 'none'
            }
          })}>
            <div style={{
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '16px',
            }}>
              <nav style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}>
                <a 
                  href="#o-nas" 
                  onClick={() => setIsMenuOpen(false)} 
                  style={{
                    display: 'block',
                    padding: '12px 0',
                    color: '#1F2937',
                    textDecoration: 'none',
                    fontWeight: '500',
                    borderBottom: '1px solid #F3F4F6',
                    transition: 'color 0.3s ease',
                  }}
                >
                  O nas
                </a>
                <a 
                  href="#lokale" 
                  onClick={() => setIsMenuOpen(false)} 
                  style={{
                    display: 'block',
                    padding: '12px 0',
                    color: '#1F2937',
                    textDecoration: 'none',
                    fontWeight: '500',
                    borderBottom: '1px solid #F3F4F6',
                    transition: 'color 0.3s ease',
                  }}
                >
                  Lokale
                </a>
                <a 
                  href="#galeria" 
                  onClick={() => setIsMenuOpen(false)} 
                  style={{
                    display: 'block',
                    padding: '12px 0',
                    color: '#1F2937',
                    textDecoration: 'none',
                    fontWeight: '500',
                    borderBottom: '1px solid #F3F4F6',
                    transition: 'color 0.3s ease',
                  }}
                >
                  Galeria
                </a>
                <a 
                  href="#kontakt" 
                  onClick={() => setIsMenuOpen(false)} 
                  style={{
                    display: 'block',
                    padding: '12px 0',
                    color: '#1F2937',
                    textDecoration: 'none',
                    fontWeight: '500',
                    borderBottom: 'none',
                    transition: 'color 0.3s ease',
                  }}
                >
                  Kontakt
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
}