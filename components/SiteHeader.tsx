"use client"

// components/SiteHeader.tsx
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Menu, Download, Phone } from "lucide-react";
import { ButtonLink, Button } from "@/components/ui/Button";
import { css } from "../styled-system/css";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <a 
        href="#main-content" 
        style={{ left: '-9999px' }}
        className={css({
          position: 'absolute',
          zIndex: 999,
          paddingX: '3',
          paddingY: '2',
          backgroundColor: 'primary',
          color: 'white',
          textDecoration: 'none',
          borderRadius: 'base',
          fontWeight: 'semibold',
          transition: 'all',
          _focus: {
            left: '4',
            top: '4'
          }
        })}
      >
        Przejdź do głównej treści
      </a>
      
      <header 
        style={{ top: 0, left: 0, width: '100%', borderBottom: '1px solid' }}
        className={css({
        position: 'fixed',
        backgroundColor: 'bgWhite',
        borderColor: 'border',
        zIndex: 999,
        transition: 'all',
      })}>
        <div 
          style={{ maxWidth: '1200px', margin: '0 auto' }}
          className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '20',
          paddingX: '4',
          paddingY: '0',
        })}>
          <a 
            href="#top" 
            aria-label="Harmonia Rząska — strona główna" 
            className={css({
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              transition: 'all',
            })}
          >
            <img 
              src="/assets/logo-harmonia-rzaska.svg" 
              alt="Harmonia Rząska" 
              className={css({
                height: '10',
                width: 'auto',
                transition: 'all'
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
                paddingX: '4',
                paddingY: '3',
                transition: 'colors',
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
                paddingX: '4',
                paddingY: '3',
                transition: 'colors',
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
                paddingX: '4',
                paddingY: '3',
                transition: 'colors',
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
                paddingX: '4',
                paddingY: '3',
                transition: 'colors',
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
            <Button 
              type="button"
              variant="secondary"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
              aria-expanded={isMenuOpen}
            >
              <Menu size={24} />
            </Button>
          </nav>
        </div>

        {/* MOBILE DROPDOWN */}
        {isMenuOpen && (
          <div 
            style={{ top: '100%', left: 0, width: '100%', borderTop: '1px solid' }}
            className={css({
            position: 'absolute',
            backgroundColor: 'bgWhite',
            borderColor: 'border',
            boxShadow: 'md',
            zIndex: 'max',
            md: {
              display: 'none'
            }
          })}>
            <div 
              style={{ maxWidth: '1200px', margin: '0 auto' }}
              className={css({
              padding: '4',
            })}>
              <nav className={css({
                display: 'flex',
                flexDirection: 'column',
                gap: '4',
              })}>
                <a 
                  href="#o-nas" 
                  onClick={() => setIsMenuOpen(false)} 
                  style={{ borderBottom: '1px solid' }}
                  className={css({
                    display: 'block',
                    paddingX: '4',
                paddingY: '3',
                    color: 'textPrimary',
                    textDecoration: 'none',
                    fontWeight: 'medium',
                    borderColor: 'borderLight',
                    transition: 'colors',
                    _hover: {
                      color: 'primary'
                    }
                  })}
                >
                  O nas
                </a>
                <a 
                  href="#lokale" 
                  onClick={() => setIsMenuOpen(false)} 
                  style={{ borderBottom: '1px solid' }}
                  className={css({
                    display: 'block',
                    paddingX: '4',
                paddingY: '3',
                    color: 'textPrimary',
                    textDecoration: 'none',
                    fontWeight: 'medium',
                    borderColor: 'borderLight',
                    transition: 'colors',
                    _hover: {
                      color: 'primary'
                    }
                  })}
                >
                  Lokale
                </a>
                <a 
                  href="#galeria" 
                  onClick={() => setIsMenuOpen(false)} 
                  style={{ borderBottom: '1px solid' }}
                  className={css({
                    display: 'block',
                    paddingX: '4',
                paddingY: '3',
                    color: 'textPrimary',
                    textDecoration: 'none',
                    fontWeight: 'medium',
                    borderColor: 'borderLight',
                    transition: 'colors',
                    _hover: {
                      color: 'primary'
                    }
                  })}
                >
                  Galeria
                </a>
                <a 
                  href="#kontakt" 
                  onClick={() => setIsMenuOpen(false)} 
                  className={css({
                    display: 'block',
                    paddingX: '4',
                paddingY: '3',
                    color: 'textPrimary',
                    textDecoration: 'none',
                    fontWeight: 'medium',
                    borderBottom: 'none',
                    transition: 'colors',
                    _hover: {
                      color: 'primary'
                    }
                  })}
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