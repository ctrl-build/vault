'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { label: 'Platform', href: '/platform' },
    { label: 'Our Thesis', href: '/thesis' },
    { label: 'Journal', href: '/journal' },
  ]

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-[#F7F5F2] border-b-[1px] border-[#EAE3DB] transition-all duration-300 ${
          isScrolled ? 'py-6' : 'py-10'
        } hidden md:block`}
      >
        <div className="max-w-7xl mx-auto px-6 xl:px-0">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-[#332D2A]" style={{ fontFamily: 'var(--font-switzer)', fontWeight: 600 }}>
              VAULT
            </Link>

            <div className="flex items-center gap-8">
              <nav className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative text-[#332D2A] text-base tracking-wide group"
                    style={{ 
                      fontFamily: 'var(--font-switzer)',
                      fontWeight: 500,
                      letterSpacing: '0.08em'
                    }}
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#C07A56] transition-all duration-300 group-hover:w-full group-hover:left-0" />
                  </Link>
                ))}
              </nav>

              <Link
                href="/briefing"
                className="relative px-6 py-2.5 border-[1px] border-[#C07A56] text-[#C07A56] transition-all duration-300 hover:bg-[#C07A56] hover:text-[#F7F5F2] whitespace-nowrap inline-block"
                style={{ 
                  fontFamily: 'var(--font-switzer)',
                  fontWeight: 500,
                  letterSpacing: '0.5px'
                }}
              >
                Request a Private Briefing
              </Link>
            </div>
          </div>
        </div>
      </header>

      <header className="sticky top-0 z-50 bg-[#F7F5F2] border-b-[1px] border-[#EAE3DB] py-4 md:hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-[#332D2A]" style={{ fontFamily: 'var(--font-switzer)', fontWeight: 600 }}>
              VAULT
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center gap-2 text-[#332D2A] uppercase tracking-wide"
              style={{ fontFamily: 'var(--font-switzer)', fontWeight: 500 }}
            >
              <span className="transition-all duration-300">
                {isMobileMenuOpen ? 'Close' : 'Menu'}
              </span>
              <div className="flex flex-col gap-1 ml-1">
                <div 
                  className={`w-6 h-[2px] bg-[#332D2A] transition-all duration-300 origin-center ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-[3px]' : ''
                  }`}
                />
                <div 
                  className={`w-6 h-[2px] bg-[#332D2A] transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <div 
                  className={`w-6 h-[2px] bg-[#332D2A] transition-all duration-300 origin-center ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-[3px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-[#F7F5F2] transition-opacity duration-500 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full px-6">
          <nav className="flex flex-col items-center gap-8 mb-12">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-[#332D2A] text-5xl font-normal transition-all duration-500 ${
                  isMobileMenuOpen 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-4'
                }`}
                style={{ 
                  fontFamily: 'var(--font-viscomo)',
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/briefing"
            className={`px-8 py-4 bg-[#C07A56] text-[#F7F5F2] font-semibold text-lg transition-all duration-500 inline-block ${
              isMobileMenuOpen 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}
            style={{ 
              fontFamily: 'var(--font-switzer)',
              letterSpacing: '0.5px',
              transitionDelay: `${navLinks.length * 100}ms`
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Request a Private Briefing
          </Link>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-30 bg-[#F7F5F2] md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}

