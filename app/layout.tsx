import './globals.css'
import type { Metadata } from 'next'
import { Inter, Amaranth } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const amaranth = Amaranth({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
    title: 'ksterx',
    description: 'Who am I?',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <header className="bg-cyan-700 text-stone-50 py-4">
                    <div className="container mx-auto px-4 flex justify-between items-center">
                        <h1 className={`text-3xl font-bold ${amaranth.className}`}>ksterx</h1>
                        <nav>
                            <ul className="flex space-x-6">
                                <li><a href="/" className="text-stone-100 hover:text-stone-300 transition-colors">Home</a></li>
                                <li><a href="/blog" className="text-stone-100 hover:text-stone-300 transition-colors">Blog</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <main>{children}</main>
                <footer className="bg-cyan-700 text-stone-50 py-4 text-center">
                    <p>© 2024 Kosuke Ishikawa</p>
                </footer>
            </body>
        </html>
    )
}