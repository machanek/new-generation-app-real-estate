import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Harmonia Rząska - Nowoczesne Osiedle Mieszkaniowe',
  description: 'Odkryj nowoczesne mieszkania w osiedlu Harmonia Rząska. Komfort, jakość i harmonia z otoczeniem w jednym miejscu.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
