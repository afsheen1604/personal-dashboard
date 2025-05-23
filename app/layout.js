import './globals.css'

export const metadata = {
  title: 'Personal Dashboard',
  description: 'My personal dashboard built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}