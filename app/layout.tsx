import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Auto Vote Detector — Detect Suspicious Voting Patterns',
  description: 'API service that analyzes voting patterns to detect bots, manipulation, and fake engagement across platforms.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a2136f72-912f-4c25-8555-ff2265149812"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
