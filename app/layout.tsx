import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
export const metadata: Metadata = {
  title: { default: 'WorldPIN AI | Global Postal Code Directory', template: '%s | WorldPIN AI' },
  description: 'Explore a growing directory of postal codes, ZIP codes, cities and regions around the world.',
  robots: { index: true, follow: true }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><header className="bg-white border-b border-slate-200"><div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between"><Link href="/" className="text-xl font-extrabold text-sky-700">🌐 WorldPIN <span className="text-slate-900">AI</span></Link><nav className="flex gap-5 text-sm font-semibold"><Link href="/countries">Countries</Link><Link href="/about">About</Link></nav></div></header>{children}<footer className="mt-20 border-t bg-white py-9 text-sm text-slate-600"><div className="max-w-6xl mx-auto px-5">© {new Date().getFullYear()} WorldPIN AI · Coverage is currently limited to demonstration records.</div></footer></body></html>;
}
