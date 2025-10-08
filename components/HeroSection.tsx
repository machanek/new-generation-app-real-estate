import { css } from '@/styled-system/css'
import Image from 'next/image'

type HeroSectionProps = {
  heroImage?: {
    url: string
    alt?: string
  }
}

export const HeroSection = ({ heroImage }: HeroSectionProps) => {
  // Default image jeśli brak w CMS
  const defaultImage = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&h=700&fit=crop&crop=center'
  
  return (
    <section
      className={css({
        position: 'relative',
        overflow: 'hidden',
        height: { base: '400px', md: '500px', lg: '600px' },  // mobile → desktop
        width: '100%'
      })}
    >
      {/* Background Image */}
      <div 
        className={css({
          position: 'absolute',
          inset: '0',
          zIndex: '0'
        })}
      >
        <Image
          src={heroImage?.url || defaultImage}
          alt={heroImage?.alt || 'Harmonia Rząska - Osiedle'}
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Dark Overlay */}
      <div 
        className={css({
          position: 'absolute',
          inset: '0',
          zIndex: '1'
        })}
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5))'
        }}
      />

      {/* Content */}
      <div 
        className={css({
          position: 'relative',
          zIndex: '2',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          paddingX: '4',
          color: 'white'
        })}
        style={{ height: '100%' }}
      >
        <h1
          className={css({
            fontSize: { base: '32px', md: '40px', lg: '48px' },  // mobile → desktop
            fontWeight: 'bold',
            marginBottom: '4',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
          })}
        >
          Osiedla Harmonia Rząska
        </h1>
        <p
          className={css({
            fontSize: { base: '16px', md: '18px', lg: '20px' },  // mobile → desktop
            marginBottom: '8',
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
          })}
          style={{ maxWidth: '600px' }}  // maxWidth może zostać inline
        >
          Odkryj przestrzeń stworzoną dla Ciebie – nowoczesne domy w harmonii z otoczeniem.
        </p>
      </div>
    </section>
  )
}
