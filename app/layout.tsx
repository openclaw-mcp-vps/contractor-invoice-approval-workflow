import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "InvoiceFlow — Contractor Invoice Approval for Agencies",
  description: "Automate contractor invoice review, approval workflows, and payment scheduling for agencies with multiple contractors."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="52cf997d-157f-4693-bcc3-cb2e3968391d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
