/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useMemo, useState, useEffect } from "react";
import { listBuildings, type Unit } from "@/lib/loadUnits";
import { applyFilters, type Filters } from "@/lib/filterSort";
import { loadGallery, type GalleryItem } from "@/lib/loadGallery";
import { getPayload } from 'payload';
import config from '@payload-config';
import AboutSection from "@/components/AboutSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import GalleryGrid from "@/components/GalleryGrid";
import AccessibleContactForm from "@/components/forms/AccessibleContactForm";
import UnitsSectionComponent from "@/components/UnitsSectionComponent";

type Props = {
  units: Unit[];
  buildings: string[];
  gallery: GalleryItem[];
};

export default function Home({ units, buildings, gallery }: Props) {
  const [filters, setFilters] = useState<Filters>({ status: "", building: "", areaMin: null, areaMax: null, sort: "" });
  const [view, setView] = useState<"table"|"cards">("table");
  const filtered = useMemo(() => applyFilters(units, filters), [units, filters]);


  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;
    const probe = (url: string) =>
      fetch(url, { method: "HEAD" }).then(r => ({ url, ok: r.ok })).catch(() => ({ url, ok: false }));
    Promise.all([
      probe("/images/logo.svg"),
      ... (Array.isArray(gallery) ? gallery.slice(0,3) : []).map(g => probe(g.src)),
    ]).then(results => {
      const misses = results.filter(r => !r.ok).map(r => r.url);
      if (misses.length) console.warn("[assets-check] Missing:", misses);
    });
  }, [gallery]);

  return (
    <>
      <Head>
        <title>Harmonia Rząska — Oferta</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main id="top">
        <section className="hero" id="hero">
          <div className="hero-inner">
            <div className="hero-gallery">
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&h=700&fit=crop&crop=center" 
                alt="Harmonia Rząska - widok osiedla" 
                loading="eager" 
              />
            </div>
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <h1>Osiedla Harmonia Rząska</h1>
              <p>Odkryj przestrzeń stworzoną dla Ciebie – nowoczesne domy w harmonii z otoczeniem.</p>
            </div>
          </div>
        </section>

        <AboutSection />

        <ArchitectureSection />

        <section className="section-plan" id="plan">
          <div className="container">
            <h2>Plan osiedla</h2>
            <div className="plan-image">
              <img 
                src="https://images.unsplash.com/photo-1524813686514-a57563d77965?w=1200&h=800&fit=crop" 
                alt="Plan zagospodarowania osiedla Harmonia Rząska" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  if (e.currentTarget.parentElement) {
                    e.currentTarget.parentElement.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Plan osiedla będzie dostępny wkrótce</p>';
                  }
                }}
              />
            </div>
          </div>
        </section>


        <UnitsSectionComponent
          filters={filters}
          buildings={buildings}
          filtered={filtered}
          view={view}
          setFilters={setFilters}
          setView={setView}
        />

        <section className="gallery" id="galeria">
          <div className="container">
            <h3>Galeria wnętrz</h3>
            <GalleryGrid items={gallery} />
          </div>
        </section>

        <section className="map-section" id="lokalizacja">
          <div className="container">
            <h3>Lokalizacja</h3>
            <p>Rząska, gm. Zabierzów — szybki dojazd do Krakowa, spokojna okolica.</p>
            <div className="map-container">
              <iframe
                title="Mapa — Harmonia Rząska"
                src="https://www.google.com/maps?q=Rząska&output=embed"
                width="100%" height="400" style={{border:0}} loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="section-contact" id="kontakt">
          <div className="container">
            <div className="contact-form-section">
              <h3>Skontaktuj się z nami</h3>
              <p>Masz pytania o dostępne lokale? Chcesz umówić się na prezentację? Napisz do nas!</p>
              <AccessibleContactForm />
              </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Harmonia Rząska</h4>
              <p>Nowoczesne osiedle domów i mieszkań pod Krakowem. Idealne miejsce dla rodzin.</p>
            </div>
            <div className="footer-section">
              <h4>Kontakt</h4>
              <p><a href="tel:730090030">730 090 030</a></p>
              <p><a href="mailto:biuro@harmoniarzaska.pl">biuro@harmoniarzaska.pl</a></p>
              <p>Rząska k. Krakowa</p>
            </div>
            <div className="footer-section">
              <h4>Informacje</h4>
              <div className="footer-links">
                <a href="/robots.txt" target="_blank" rel="noopener">Polityka prywatności / RODO</a>
                <a href="#kontakt">Kontakt</a>
                <a href="/assets/prospekt-harmonia-rzaska.pdf" target="_blank" rel="noopener">Katalog PDF</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Harmonia Rząska. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export async function getStaticProps() {
  try {
    // Pobierz dane z Payload CMS
    const payload = await getPayload({ config });
    const unitsFromCMS = await payload.find({
      collection: 'units',
      limit: 100,
      sort: 'apartment',
    });

    // Konwertuj dane z CMS do formatu Unit
        const units: Unit[] = unitsFromCMS.docs.map((unit: Record<string, unknown>) => ({
          id: (unit.unit as string) || (unit.id as string),
          building: unit.building as string,
          unit: unit.unit as string,
          floor: unit.floor as number,
          area: unit.area as number,
          price: unit.price as number,
          pricePerM2: unit.pricePerM2 as number || null,
          status: unit.status === 'available' ? 'wolny' : 
                  unit.status === 'sold' ? 'sprzedany' : 
                  unit.status === 'reserved' ? 'zarezerwowany' : 'wolny',
          planUrl: unit.planUrl as string,
          extras: null, // Extras field removed due to database schema mismatch
          slug: null, // Slug field removed due to database schema mismatch
        }));

    const buildings = listBuildings(units);
    const gallery = await loadGallery();
    
    return { 
      props: { units, buildings, gallery }, 
      revalidate: 60 
    };
  } catch (error) {
    console.error('Error loading data from CMS:', error);
    // Brak fallback - tylko dane z Payload CMS
    return { 
      props: { units: [], buildings: [], gallery: [] }, 
      revalidate: 60 
    };
  }
}
