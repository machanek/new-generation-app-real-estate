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
    <div className={css({
      minHeight: '100vh',
      backgroundColor: 'white'
    })}>
      <SiteHeader />
      
      <main className={css({
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '32px 24px'
      })}>
        <section className={css({
          marginBottom: '64px'
        })}>
          <div className={css({
            textAlign: 'center',
            marginBottom: '48px'
          })}>
            <h1 className={css({
              fontSize: { base: '36px', md: '48px' },
              fontWeight: 'bold',
              color: 'textPrimary',
              marginBottom: '24px'
            })}>
              Harmonia Rząska
            </h1>
            <p className={css({
              fontSize: 'xl',
              color: 'textSecondary',
              maxWidth: '768px',
              margin: '0 auto'
            })}>
              Nowoczesne osiedle mieszkaniowe, gdzie komfort spotyka się z naturą. 
              Odkryj swoje wymarzone miejsce do życia.
            </p>
          </div>
        </section>

        <UnitsSectionWithState units={units} />
        
        <AboutSection />
        
        <ArchitectureSection />
        
        <section className={css({
          padding: '64px 0'
        })}>
          <div className={css({
            maxWidth: '896px',
            margin: '0 auto'
          })}>
            <h2 className={css({
              fontSize: '30px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '32px'
            })}>Skontaktuj się z nami</h2>
             <ContactForm />
          </div>
        </section>
      </main>
      
      <SiteFooter />
    </div>
  )
}
