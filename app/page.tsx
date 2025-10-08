import { Metadata } from 'next'
import { css } from '@/styled-system/css'
import SiteHeader from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import UnitsSectionWithState from '@/components/UnitsSectionWithState'
import AboutSection from '@/components/AboutSection'
import ArchitectureSection from '@/components/ArchitectureSection'
import ContactForm from '@/components/ContactForm'
import { getPayload } from 'payload'
import config from '@payload-config'

export const metadata: Metadata = {
  title: 'Harmonia Rząska - Nowoczesne Osiedle Mieszkaniowe',
  description: 'Odkryj nowoczesne mieszkania w osiedlu Harmonia Rząska. Komfort, jakość i harmonia z otoczeniem w jednym miejscu.',
}

export default async function HomePage() {
  // Fetch units from Payload CMS instead of static files
  const payload = await getPayload({ config })
  
  const unitsResult = await payload.find({
    collection: 'units',
    limit: 100, // Get all units
  })
  
  // Map Payload CMS data to Unit type
  const units = unitsResult.docs.map((unit: Record<string, unknown>) => ({
    id: String(unit.id),
    unit: String(unit.unit || unit.nr_lokalu || ''),
    building: String(unit.building || unit.nr_budynku || ''),
    floor: Number(unit.floor || unit.pietro || 0),
    area: Number(unit.area || unit.powierzchnia || 0),
    price: Number(unit.price || unit.cena || 0),
    pricePerM2: Number(unit.pricePerM2 || unit.cena_m2 || 0),
    status: String(unit.status || 'available') as 'available' | 'sold' | 'reserved',
    planUrl: String(unit.planUrl || unit.plan_url || ''),
    unitPageUrl: String(unit.unitPageUrl || ''),
    createdAt: String(unit.createdAt || new Date().toISOString()),
    updatedAt: String(unit.updatedAt || new Date().toISOString())
  }))

  return (
    <div 
      style={{ minHeight: '100vh' }}
      className={css({
        backgroundColor: 'white'
      })}
    >
      <SiteHeader />
      
      <main 
        style={{ maxWidth: '1200px', margin: '0 auto' }}
        className={css({
        paddingX: '6',
        paddingY: '8'
      })}>
        <section className={css({
          marginBottom: '16'
        })}>
          <div className={css({
            textAlign: 'center',
            marginBottom: '12'
          })}>
            <h1 className={css({
              fontSize: { base: '4xl', md: '5xl' },
              fontWeight: 'bold',
              color: 'textPrimary',
              marginBottom: '6'
            })}>
              Harmonia Rząska
            </h1>
            <p 
              style={{ maxWidth: '768px', margin: '0 auto' }}
              className={css({
                fontSize: 'xl',
                color: 'textSecondary'
              })}
            >
              Nowoczesne osiedle mieszkaniowe, gdzie komfort spotyka się z naturą. 
              Odkryj swoje wymarzone miejsce do życia.
            </p>
          </div>
        </section>

        <UnitsSectionWithState units={units} />
        
        <AboutSection />
        
        <ArchitectureSection />
        
        <section className={css({
          paddingX: '0',
          paddingY: '16'
        })}>
          <div 
            style={{ maxWidth: '896px', margin: '0 auto' }}
          >
            <h2 className={css({
              fontSize: '3xl',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '8'
            })}>Skontaktuj się z nami</h2>
             <ContactForm />
          </div>
        </section>
      </main>
      
      <SiteFooter />
    </div>
  )
}
