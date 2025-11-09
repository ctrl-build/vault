'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function JournalPage() {
  const [showCTA, setShowCTA] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)
  const [isInputFocused, setIsInputFocused] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const ctaSection = document.getElementById('final-cta')
      if (ctaSection) {
        const rect = ctaSection.getBoundingClientRect()
        if (rect.top < window.innerHeight) {
          setShowCTA(true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev)
    }, 530)

    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribed(true)
  }

  return (
    <main className="bg-[#F7F5F2]">
      <section className="relative bg-[#F7F5F2] py-32 md:py-40">
        <div className="max-w-6xl mx-auto px-6 xl:px-0">
          
          <h1 
            className="text-[80px] md:text-[100px] lg:text-[110px] leading-[0.95] text-[#332D2A] mb-8 text-left"
            style={{ fontFamily: 'var(--font-viscomo)' }}
          >
            Journal.
          </h1>

          <p 
            className="text-[#332D2A] leading-relaxed max-w-4xl mb-12 text-left"
            style={{ 
              fontFamily: 'var(--font-switzer)',
              fontSize: '20px'
            }}
          >
            A curated archive of strategic insights, analysis, and reports. We publish with precision, not frequency.
          </p>

          <div className="h-[1px] bg-[#EAE3DB] max-w-4xl"></div>
        </div>
      </section>

      <section className="relative bg-[#F7F5F2] py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 xl:px-0">
          
          <div className="mb-6">
            <p 
              className="text-[#C07A56] uppercase tracking-wider mb-8"
              style={{ 
                fontFamily: 'var(--font-switzer)',
                fontWeight: 600,
                fontSize: '16px',
                letterSpacing: '0.1em'
              }}
            >
              FORTHCOMING: ISSUE NO. 01
            </p>
          </div>

          <div className="flex items-start gap-3 mb-8 flex-wrap">
            <h2 
              className="text-[48px] md:text-[56px] lg:text-[64px] leading-[0.95] text-[#332D2A]"
              style={{ fontFamily: 'var(--font-viscomo)' }}
            >
              Our first briefing is in preparation.
            </h2>
            <div 
              className={`w-[3px] bg-[#C07A56] transition-opacity duration-300 flex-shrink-0 ${
                cursorVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ 
                height: '1.2em',
                marginTop: '0.05em',
                alignSelf: 'flex-start'
              }}
            />
          </div>

          <p 
            className="text-[#332D2A] leading-relaxed max-w-3xl mb-16"
            style={{ 
              fontFamily: 'var(--font-switzer)',
              fontSize: '19px'
            }}
          >
            Strategic insights from the intersection of luxury and intelligence are being finalized by our team. Subscribe to be notified upon publication and receive our work directly.
          </p>

          {!isSubscribed ? (
            <div className="max-w-2xl mx-auto">
              <h3 
                className="text-[36px] md:text-[42px] lg:text-[48px] leading-[0.95] text-[#332D2A] mb-12 text-center"
                style={{ fontFamily: 'var(--font-viscomo)' }}
              >
                Be the First to Read.
              </h3>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setIsInputFocused(true)}
                    onBlur={() => setIsInputFocused(false)}
                    placeholder="Your Work Email"
                    required
                    className="w-full bg-transparent border-0 border-b-[1px] border-[#EAE3DB] pb-4 text-[#332D2A] focus:outline-none transition-all duration-300"
                    style={{ 
                      fontFamily: 'var(--font-switzer)',
                      fontSize: '18px'
                    }}
                  />
                  <div 
                    className="absolute bottom-0 left-1/2 h-[1px] bg-[#C07A56] transition-all duration-500 ease-out"
                    style={{
                      width: isInputFocused ? '100%' : '0%',
                      transform: 'translateX(-50%)',
                      transformOrigin: 'center'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 py-4 bg-[#C07A56] text-[#F7F5F2] transition-all duration-300 hover:bg-[#D48660]"
                  style={{ 
                    fontFamily: 'var(--font-switzer)',
                    fontWeight: 500,
                    letterSpacing: '0.5px'
                  }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              <p 
                className="text-[#332D2A] text-center"
                style={{ 
                  fontFamily: 'var(--font-viscomo)',
                  fontSize: '24px'
                }}
              >
                Thank you. You are on the list.
              </p>
            </div>
          )}
        </div>
      </section>

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
    </main>
  )
}

