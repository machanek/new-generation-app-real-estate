import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'

type Props = {
  params: Promise<{
    slug: string
  }>
}

// Generate static params for all units
export async function generateStaticParams() {
  const payload = await getPayloadHMR({ config })
  const units = await payload.find({
    collection: 'units',
    limit: 100,
  })

  return units.docs.map((unit) => ({
    slug: unit.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const payload = await getPayloadHMR({ config })
  
  const units = await payload.find({
    collection: 'units',
    where: {
      slug: {
        equals: slug,
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
  const payload = await getPayloadHMR({ config })

  const units = await payload.find({
    collection: 'units',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  })

  if (!units.docs[0]) {
    notFound()
  }

  const unit = units.docs[0]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Mieszkanie {unit.unit}
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Podstawowe informacje</h2>
              <ul className="space-y-2">
                <li><strong>Budynek:</strong> {unit.building}</li>
                <li><strong>Piętro:</strong> {unit.floor}</li>
                <li><strong>Powierzchnia:</strong> {unit.area} m²</li>
                <li><strong>Cena:</strong> {unit.price?.toLocaleString('pl-PL')} PLN</li>
                    <li><strong>Cena za m²:</strong> {unit.pricePerM2?.toLocaleString('pl-PL')} PLN/m²</li>
                <li><strong>Status:</strong> 
                  <span className={`ml-2 px-2 py-1 rounded text-sm ${
                    unit.status === 'available' ? 'bg-green-100 text-green-800' :
                    unit.status === 'sold' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {unit.status === 'available' ? 'Dostępne' :
                     unit.status === 'sold' ? 'Sprzedane' : 'Rezerwacja'}
                  </span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Działania</h3>
              {unit.planUrl && (
                <a 
                  href={unit.planUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 mb-4"
                >
                  Zobacz plan mieszkania
                </a>
              )}
              
              <div className="mt-4">
                <Link 
                  href="/#kontakt" 
                  className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                >
                  Skontaktuj się w sprawie mieszkania
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
