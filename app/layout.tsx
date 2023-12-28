import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css"
import Header from "@/components/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Chestbox",
    description: "Dropbox clone using latest technologies",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>
                    <Header />

                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}
