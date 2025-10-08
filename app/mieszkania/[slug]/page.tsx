import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'
import UnitDetails from '@/components/ui/UnitDetails'
import { css } from '@/styled-system/css'

type Props = {
  params: Promise<{
    slug: string
  }>
}

// Generate static params for all units
export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const units = await payload.find({
    collection: 'units',
    limit: 100,
  })

  return units.docs.map((unit, index) => ({
    slug: `unit-${unit.unit || index}`, // Generate slug from unit number
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const payload = await getPayload({ config })
  
  // Parse unit number from slug (format: unit-{unitNumber})
  const unitNumber = slug.replace('unit-', '')
  
  const units = await payload.find({
    collection: 'units',
    where: {
      unit: {
        equals: unitNumber,
      },
    },
    limit: 1,
  })

  if (!units.docs[0]) {
    return {
      title: 'Mieszkanie nie znalezione',
    }
  }

  const unit = units.docs[0]
  
  return {
    title: `Mieszkanie ${unit.unit} - ${unit.area}m² - Harmonia Rząska`,
    description: `Mieszkanie ${unit.unit} o powierzchni ${unit.area}m² w budynku ${unit.building}. Cena: ${unit.price?.toLocaleString('pl-PL')} PLN. Osiedle Harmonia Rząska.`,
    openGraph: {
      title: `Mieszkanie ${unit.unit} - Harmonia Rząska`,
      description: `${unit.area}m² | ${unit.price?.toLocaleString('pl-PL')} PLN | ${unit.status === 'available' ? 'Dostępne' : 'Sprzedane'}`,
    },
  }
}

export default async function UnitPage({ params }: Props) {
  const { slug } = await params
  const payload = await getPayload({ config })

  // Parse unit number from slug (format: unit-{unitNumber})
  const unitNumber = slug.replace('unit-', '')

  const units = await payload.find({
    collection: 'units',
    where: {
      unit: {
        equals: unitNumber,
      },
    },
    limit: 1,
  })

  if (!units.docs[0]) {
    notFound()
  }

  const unit = units.docs[0]

  // Transform unit data for UnitDetails component
  const unitData = {
    unit: unit.unit,
    building: unit.building,
    floor: unit.floor,
    area: unit.area,
    price: unit.price,
    pricePerM2: unit.pricePerM2 || Math.round(unit.price / unit.area),
    status: unit.status as 'available' | 'reserved' | 'sold',
    planUrl: unit.planUrl,
    // Mock data for demonstration - in real app, these would come from CMS
    rooms: [
      { name: 'Salon', area: Math.round(unit.area * 0.4) },
      { name: 'Sypialnia', area: Math.round(unit.area * 0.25) },
      { name: 'Kuchnia', area: Math.round(unit.area * 0.15) },
      { name: 'Łazienka', area: Math.round(unit.area * 0.1) },
      { name: 'Przedpokój', area: Math.round(unit.area * 0.1) },
    ],
    priceHistory: [
      {
        date: new Date().toISOString(),
        price: unit.price,
        pricePerM2: unit.pricePerM2 || Math.round(unit.price / unit.area),
        note: 'Cena aktualna',
      },
    ],
    floorPlans: [
      {
        id: 'parter',
        name: 'Parter',
        imageUrl: '/images/plans/parter.jpg',
      },
      {
        id: 'pietro1',
        name: 'Piętro 1',
        imageUrl: '/images/plans/pietro1.jpg',
      },
    ],
  }

  return (
    <div 
      style={{ maxWidth: '1200px', margin: '0 auto' }}
      className={css({
        paddingX: '6',
        paddingY: '8'
      })}
    >
      <div 
        style={{ maxWidth: '1280px', margin: '0 auto' }}
      >
        <div className={css({
          marginBottom: '8'
        })}>
          <Link 
            href="/" 
            className={css({
              display: 'inline-flex',
              alignItems: 'center',
              color: 'primary',
              textDecoration: 'none',
              marginBottom: '4',
              _hover: {
                color: 'primaryLight'
              }
            })}
          >
            ← Powrót do oferty
          </Link>
          <h1 className={css({
            fontSize: '4xl',
            fontWeight: 'bold',
            color: 'textPrimary'
          })}>
            Mieszkanie {unit.unit}
          </h1>
        </div>
        
        <UnitDetails unit={unitData} />
      </div>
    </div>
  )
}
