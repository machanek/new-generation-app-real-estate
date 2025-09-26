import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mieszkania - Harmonia Rząska',
  description: 'Dostępne mieszkania w osiedlu Harmonia Rząska. Sprawdź ofertę i znajdź swoje wymarzone mieszkanie.',
}

export default function MieszkaniaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body>
        {children}
      </body>
    </html>
  )
}
