'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Footer() {
  const [showCTA, setShowCTA] = useState(false)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const handleScroll = () => {
      const ctaElement = document.getElementById('final-cta')
      if (ctaElement) {
        const rect = ctaElement.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        if (rect.top < windowHeight) {
          setShowCTA(true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <section 
        id="final-cta"
        className="relative bg-[#332D2A] py-32 md:py-40 overflow-hidden"
        style={{
          clipPath: showCTA ? 'inset(0 0 0 0)' : 'inset(100% 0 0 0)',
          transition: 'clip-path 1.2s ease-out'
        }}
      >
        <div className="max-w-4xl mx-auto px-6 xl:px-0 text-center">
          
          <h2 
            className="mb-8 text-[#F7F5F2]"
            style={{ 
              fontFamily: 'var(--font-viscomo)',
              fontSize: '80px',
              lineHeight: '1.1'
            }}
          >
            See the Intelligence in Action.
          </h2>

          <p 
            className="text-lg md:text-xl mb-10 text-[#EAE3DB] max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-switzer)' }}
          >
            Request a private briefing with our strategy team to see how Vault's infrastructure can be calibrated for your brand.
          </p>

          <Link
            href="/briefing"
            className="inline-block px-8 py-4 bg-[#C07A56] text-[#F7F5F2] transition-all duration-300 hover:bg-[#D48660]"
            style={{ 
              fontFamily: 'var(--font-switzer)',
              fontWeight: 500,
              letterSpacing: '0.5px'
            }}
          >
            Request a Private Briefing
          </Link>
        </div>
      </section>

      <footer className="relative bg-[#F7F5F2] border-t border-[#EAE3DB] py-16">
        <div className="max-w-7xl mx-auto px-6 xl:px-0">
          
          <div className="hidden md:grid md:grid-cols-4 md:gap-12">
            
            <div>
              <div 
                className="text-2xl mb-4 text-[#332D2A]"
                style={{ fontFamily: 'var(--font-switzer)', fontWeight: 600 }}
              >
                VAULT
              </div>
              <p 
                className="text-base text-[#332D2A] leading-relaxed"
                style={{ fontFamily: 'var(--font-switzer)' }}
              >
                Intelligence Infrastructure for the Next Era of Luxury Retail.
              </p>
            </div>

            <div>
              <nav className="space-y-3">
                {[
                  { label: 'Platform', href: '/platform' },
                  { label: 'Our Thesis', href: '/thesis' },
                  { label: 'Journal', href: '/journal' }
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-base text-[#332D2A] relative group"
                    style={{ fontFamily: 'var(--font-switzer)' }}
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#C07A56] transition-all duration-300 group-hover:w-full group-hover:left-0" />
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <nav className="space-y-3">
                <a
                  href="https://linkedin.com/company/vault"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-base text-[#332D2A] relative group"
                  style={{ fontFamily: 'var(--font-switzer)' }}
                >
                  LinkedIn
                  <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#C07A56] transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </a>
                <a
                  href="/terms"
                  className="block text-base text-[#332D2A] relative group"
                  style={{ fontFamily: 'var(--font-switzer)' }}
                >
                  Terms of Service
                  <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#C07A56] transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </a>
                <a
                  href="/privacy"
                  className="block text-base text-[#332D2A] relative group"
                  style={{ fontFamily: 'var(--font-switzer)' }}
                >
                  Privacy Policy
                  <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#C07A56] transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </a>
              </nav>
            </div>

            <div>
              <p 
                className="text-base text-[#332D2A] mb-3"
                style={{ fontFamily: 'var(--font-switzer)' }}
              >
                © {currentYear} Vault. All Rights Reserved.
              </p>
              <button
                onClick={scrollToTop}
                className="text-base text-[#332D2A] relative group"
                style={{ fontFamily: 'var(--font-switzer)' }}
              >
                Top ↑
                <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#C07A56] transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </button>
            </div>
          </div>

          <div className="md:hidden space-y-10">
            
            <div>
              <div 
                className="text-2xl mb-4 text-[#332D2A]"
                style={{ fontFamily: 'var(--font-switzer)', fontWeight: 600 }}
              >
                VAULT
              </div>
              <p 
                className="text-base text-[#332D2A] leading-relaxed"
                style={{ fontFamily: 'var(--font-switzer)' }}
              >
                Intelligence Infrastructure for the Next Era of Luxury Retail.
              </p>
            </div>

            <div>
              <nav className="space-y-3">
                {[
                  { label: 'Platform', href: '/platform' },
                  { label: 'Our Thesis', href: '/thesis' },
                  { label: 'Journal', href: '/journal' }
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-base text-[#332D2A] relative group"
                    style={{ fontFamily: 'var(--font-switzer)' }}
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#C07A56] transition-all duration-300 group-hover:w-full group-hover:left-0" />
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <nav className="space-y-3">
                <a
                  href="https://linkedin.com/company/vault"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-base text-[#332D2A] relative group"
                  style={{ fontFamily: 'var(--font-switzer)' }}
                >
                  LinkedIn
                  <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#C07A56] transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </a>
                <a
                  href="/terms"
                  className="block text-base text-[#332D2A] relative group"
                  style={{ fontFamily: 'var(--font-switzer)' }}
                >
                  Terms of Service
                  <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#C07A56] transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </a>
                <a
                  href="/privacy"
                  className="block text-base text-[#332D2A] relative group"
                  style={{ fontFamily: 'var(--font-switzer)' }}
                >
                  Privacy Policy
                  <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#C07A56] transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </a>
              </nav>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#EAE3DB]">
              <p 
                className="text-sm text-[#332D2A]"
                style={{ fontFamily: 'var(--font-switzer)' }}
              >
                © {currentYear} Vault. All Rights Reserved.
              </p>
              <button
                onClick={scrollToTop}
                className="text-sm text-[#332D2A] relative group"
                style={{ fontFamily: 'var(--font-switzer)' }}
              >
                Top ↑
                <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#C07A56] transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

