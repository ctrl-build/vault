'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ThesisPage() {
  const [imageState, setImageState] = useState<'art' | 'data'>('art')
  const [showCTA, setShowCTA] = useState(false)
  const thesisTextRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const keyPhrase = document.getElementById('key-phrase')
      if (keyPhrase && thesisTextRef.current) {
        const rect = keyPhrase.getBoundingClientRect()
        const viewportCenter = window.innerHeight / 2
        
        if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
          setImageState('data')
        } else {
          setImageState('art')
        }
      }

      const ctaSection = document.getElementById('final-cta')
      if (ctaSection) {
        const ctaRect = ctaSection.getBoundingClientRect()
        if (ctaRect.top < window.innerHeight) {
          setShowCTA(true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const strategists = [
    {
      name: 'Olaitan Ajilore',
      title: 'Founder & CEO',
      bio: 'Ex Apple, IDEO alum, engineer turned creative director turned founder.',
      image: '/assets/images/68acdc146960375eb18b69b0_IMG_8756.jpg'
    },
    {
      name: 'Haboon Nur',
      title: 'Co-Founder & CTO',
      bio: 'Bridging the gap between timelessness and novelty.',
      image: '/assets/images/68acdc1488cc81d5b8d80dba_IMG_8759.jpg'
    }
  ]

  return (
    <main className="bg-[#F7F5F2]">
      <section className="relative bg-[#F7F5F2] py-32 md:py-40">
        <div className="max-w-6xl mx-auto px-6 xl:px-0 text-center">
          
          <h1 
            className="text-[60px] md:text-[80px] lg:text-[90px] leading-[0.95] text-[#332D2A] mb-6"
            style={{ fontFamily: 'var(--font-viscomo)' }}
          >
            Luxury is not random.<br />It is engineered.
          </h1>

          <p 
            className="text-[#332D2A] leading-relaxed max-w-4xl mx-auto mb-12"
            style={{ 
              fontFamily: 'var(--font-switzer)',
              fontSize: '20px'
            }}
          >
            Our thesis on the future of luxury retail—and the intelligence required to lead it.
          </p>

          <div className="h-[1px] bg-[#EAE3DB] max-w-2xl mx-auto"></div>
        </div>
      </section>

      <section className="relative bg-[#F7F5F2] py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 xl:px-0">
          
          <h2 
            className="text-[40px] md:text-[48px] leading-tight text-[#332D2A] mb-12"
            style={{ fontFamily: 'var(--font-viscomo)' }}
          >
            Chapter 01. The Intuition Trap.
          </h2>

          <div className="space-y-6">
            <p 
              className="text-[#332D2A] leading-[1.6]"
              style={{ 
                fontFamily: 'var(--font-switzer)',
                fontSize: '19px'
              }}
            >
              <span 
                className="float-left text-[120px] leading-[0.8] text-[#332D2A] pr-2"
                style={{ fontFamily: 'var(--font-viscomo)' }}
              >
                F
              </span>
              or decades, luxury has run on "gut feel" and "merchant intuition." While essential to the craft, in a globally fragmented, high-speed market, "intuition without data is just a guess." This is not a criticism of artistry—it is a recognition of scale. The quiet chaos of siloed data and missed opportunities has become the silent enemy of margin. Client insights live in CRM systems. Inventory truth sits in disparate ERPs. Stylist notes exist on pads and Post-its. Trend intelligence arrives fragmented. In this disconnected landscape, even the most skilled merchant is navigating with partial information.
            </p>
            
            <p 
              className="text-[#332D2A] leading-[1.6]"
              style={{ 
                fontFamily: 'var(--font-switzer)',
                fontSize: '19px'
              }}
            >
              This is the "Intuition Trap." The assumption that "knowing your client" or "understanding your market" is enough when the complexity—and speed—of global luxury retail has fundamentally changed. The tools have not kept pace with the task.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-[#F7F5F2] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 xl:px-0">
          
          <div className="hidden md:grid md:grid-cols-2 md:gap-16">
            
            <div className="sticky top-32 h-[600px]">
              <div className="relative h-full">
                <div 
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    imageState === 'art' ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                    <Image
                      src="/assets/images/68acdc146960375eb18b69b0_IMG_8756.jpg"
                      alt="Fashion workspace"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                <div 
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    imageState === 'data' ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="relative aspect-[4/5] bg-gradient-to-br from-[#EAE3DB] to-[#D4CCC4] rounded-lg p-8 flex items-center justify-center">
                    <div className="space-y-6 w-full">
                      <div className="grid grid-cols-3 gap-3">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                          <div 
                            key={i}
                            className="aspect-square bg-[#C07A56]/20 rounded flex items-center justify-center"
                          >
                            <div className="w-2 h-2 bg-[#C07A56] rounded-full"></div>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-[#C07A56]/20 rounded w-full"></div>
                        <div className="h-2 bg-[#C07A56]/20 rounded w-5/6"></div>
                        <div className="h-2 bg-[#C07A56]/20 rounded w-4/6"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div ref={thesisTextRef} className="space-y-6">
              <h2 
                className="text-[40px] md:text-[48px] leading-tight text-[#332D2A]"
                style={{ fontFamily: 'var(--font-viscomo)' }}
              >
                Chapter 02. The Synthesis.
              </h2>

              <div className="space-y-6">
                <p 
                  className="text-[#332D2A] leading-[1.6]"
                  style={{ 
                    fontFamily: 'var(--font-switzer)',
                    fontSize: '19px'
                  }}
                >
                  Data does not replace artistry; it empowers it. The next era of luxury belongs to those who fuse the two.
                </p>
                
                <p 
                  className="text-[#332D2A] leading-[1.6]"
                  style={{ 
                    fontFamily: 'var(--font-switzer)',
                    fontSize: '19px'
                  }}
                >
                  We believe that by unifying craft (the product) with context (the client), you create precision. 
                </p>
                
                <p 
                  id="key-phrase"
                  className="text-[#332D2A] leading-[1.6] font-semibold"
                  style={{ 
                    fontFamily: 'var(--font-switzer)',
                    fontSize: '19px'
                  }}
                >
                  Precision is the new luxury.
                </p>
                
                <p 
                  className="text-[#332D2A] leading-[1.6]"
                  style={{ 
                    fontFamily: 'var(--font-switzer)',
                    fontSize: '19px'
                  }}
                >
                  Vault is the bridge. We connect the merchant's intuition with real-time intelligence. We connect the stylist's craft with predictive insights. We connect the brand's integrity with margin protection. We turn "what if" into "what works."
                </p>
              </div>
            </div>
          </div>

          <div className="md:hidden space-y-8">
            
            <h2 
              className="text-[40px] leading-tight text-[#332D2A]"
              style={{ fontFamily: 'var(--font-viscomo)' }}
            >
              Chapter 02. The Synthesis.
            </h2>

            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <div 
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  imageState === 'art' ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src="/assets/images/68acdc146960375eb18b69b0_IMG_8756.jpg"
                  alt="Fashion workspace"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>

              <div 
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  imageState === 'data' ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#EAE3DB] to-[#D4CCC4] p-8 flex items-center justify-center">
                  <div className="space-y-6 w-full">
                    <div className="grid grid-cols-3 gap-3">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div 
                          key={i}
                          className="aspect-square bg-[#C07A56]/20 rounded flex items-center justify-center"
                        >
                          <div className="w-2 h-2 bg-[#C07A56] rounded-full"></div>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-[#C07A56]/20 rounded w-full"></div>
                      <div className="h-2 bg-[#C07A56]/20 rounded w-5/6"></div>
                      <div className="h-2 bg-[#C07A56]/20 rounded w-4/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div ref={thesisTextRef} className="space-y-6">
              <p 
                className="text-[#332D2A] leading-[1.6]"
                style={{ 
                  fontFamily: 'var(--font-switzer)',
                  fontSize: '19px'
                }}
              >
                Data does not replace artistry; it empowers it. The next era of luxury belongs to those who fuse the two.
              </p>
              
              <p 
                className="text-[#332D2A] leading-[1.6]"
                style={{ 
                  fontFamily: 'var(--font-switzer)',
                  fontSize: '19px'
                }}
              >
                We believe that by unifying craft (the product) with context (the client), you create precision. 
              </p>
              
              <p 
                id="key-phrase"
                className="text-[#332D2A] leading-[1.6] font-semibold"
                style={{ 
                  fontFamily: 'var(--font-switzer)',
                  fontSize: '19px'
                }}
              >
                Precision is the new luxury.
              </p>
              
              <p 
                className="text-[#332D2A] leading-[1.6]"
                style={{ 
                  fontFamily: 'var(--font-switzer)',
                  fontSize: '19px'
                }}
              >
                Vault is the bridge. We connect the merchant's intuition with real-time intelligence. We connect the stylist's craft with predictive insights. We connect the brand's integrity with margin protection. We turn "what if" into "what works."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#F7F5F2] py-32 md:py-40">
        <div className="max-w-6xl mx-auto px-6 xl:px-0">
          
          <h2 
            className="text-[50px] md:text-[80px] lg:text-[100px] leading-[0.95] text-[#332D2A] mb-16 text-center"
            style={{ fontFamily: 'var(--font-viscomo)' }}
          >
            The Strategists.
          </h2>

          <div className="hidden md:grid md:grid-cols-2 md:gap-16">
            {strategists.map((person, index) => (
              <div key={index} className="space-y-6">
                
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover grayscale-[100%] brightness-[0.9] contrast-[1.1]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <h3 
                  className="font-semibold text-[#332D2A]"
                  style={{ 
                    fontFamily: 'var(--font-switzer)',
                    fontSize: '24px'
                  }}
                >
                  {person.name}
                </h3>

                <p 
                  className="text-[#332D2A]"
                  style={{ 
                    fontFamily: 'var(--font-switzer)',
                    fontSize: '18px'
                  }}
                >
                  {person.title}
                </p>

                <p 
                  className="text-[#332D2A] leading-relaxed"
                  style={{ 
                    fontFamily: 'var(--font-switzer)',
                    fontSize: '18px'
                  }}
                >
                  {person.bio}
                </p>
              </div>
            ))}
          </div>

          <div className="md:hidden space-y-16">
            {strategists.map((person, index) => (
              <div key={index} className="space-y-6">
                
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover grayscale-[100%] brightness-[0.9] contrast-[1.1]"
                    sizes="100vw"
                  />
                </div>

                <h3 
                  className="text-2xl font-semibold text-[#332D2A]"
                  style={{ fontFamily: 'var(--font-switzer)' }}
                >
                  {person.name}
                </h3>

                <p 
                  className="text-lg text-[#332D2A]"
                  style={{ fontFamily: 'var(--font-switzer)' }}
                >
                  {person.title}
                </p>

                <p 
                  className="text-base text-[#332D2A] leading-relaxed"
                  style={{ fontFamily: 'var(--font-switzer)' }}
                >
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
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

