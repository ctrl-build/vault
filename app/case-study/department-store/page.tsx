'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function DepartmentStoreCaseStudy() {
  const [hasAnimated, setHasAnimated] = useState(false)
  const [showCTA, setShowCTA] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const metricsSection = document.getElementById('key-metrics')
      if (metricsSection && !hasAnimated) {
        const rect = metricsSection.getBoundingClientRect()
        if (rect.top < window.innerHeight) {
          setHasAnimated(true)
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
  }, [hasAnimated])

  return (
    <main className="bg-[#F7F5F2]">
      
      <section className="py-16 md:py-24 border-b border-[#EAE3DB]">
        <div className="max-w-6xl mx-auto px-6 xl:px-0">
          
          <div 
            className="text-[#C07A56] mb-4"
            style={{ 
              fontFamily: 'var(--font-switzer)',
              fontWeight: 600,
              fontSize: '16px',
              letterSpacing: '0.1em'
            }}
          >
            DOSSIER: MAJOR DEPARTMENT STORE
          </div>

          <h1 
            className="text-[40px] md:text-[60px] lg:text-[80px] leading-[0.95] text-[#332D2A] mb-6"
            style={{ fontFamily: 'var(--font-viscomo)' }}
          >
            How 95% Full-Price Sell-Through Was Achieved by Unifying Inventory and Client Data.
          </h1>

          <p 
            className="text-lg md:text-xl text-[#332D2A] leading-relaxed max-w-4xl"
            style={{ 
              fontFamily: 'var(--font-switzer)',
              fontSize: '20px'
            }}
          >
            A detailed analysis of the integration, execution, and performance of the Vault platform.
          </p>
        </div>
      </section>

      <section id="key-metrics" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 xl:px-0">
          
          <div className="hidden md:grid md:grid-cols-4 md:gap-8">
            <MetricBlock 
              data="95%"
              context="Full-Price Sell-Through"
              hasAnimated={hasAnimated}
            />
            <MetricBlock 
              data="30%"
              context="Reduction in Markdowns"
              hasAnimated={hasAnimated}
            />
            <MetricBlock 
              data="2.5x"
              context="Inventory Turnover"
              hasAnimated={hasAnimated}
            />
            <MetricBlock 
              data="18%"
              context="Margin Improvement"
              hasAnimated={hasAnimated}
            />
          </div>

          <div className="md:hidden space-y-8">
            <MetricBlock 
              data="95%"
              context="Full-Price Sell-Through"
              hasAnimated={hasAnimated}
              isMobile={true}
            />
            <MetricBlock 
              data="30%"
              context="Reduction in Markdowns"
              hasAnimated={hasAnimated}
              isMobile={true}
            />
            <MetricBlock 
              data="2.5x"
              context="Inventory Turnover"
              hasAnimated={hasAnimated}
              isMobile={true}
            />
            <MetricBlock 
              data="18%"
              context="Margin Improvement"
              hasAnimated={hasAnimated}
              isMobile={true}
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 xl:px-0">
          
          <div className="mb-24">
            <h2 
              className="text-[40px] md:text-[48px] leading-tight text-[#332D2A] mb-8"
              style={{ fontFamily: 'var(--font-viscomo)' }}
            >
              Chapter 01. The Challenge.
            </h2>
            
            <div className="space-y-6 mb-12">
              <p 
                className="text-[#332D2A] leading-[1.6]"
                style={{ 
                  fontFamily: 'var(--font-switzer)',
                  fontSize: '19px'
                }}
              >
                The client was operating a fragmented retail ecosystem. Five flagship locations across major urban centers, an e-commerce hub, and a network of international wholesale accounts were managed through disparate systems.
              </p>
              
              <p 
                className="text-[#332D2A] leading-[1.6]"
                style={{ 
                  fontFamily: 'var(--font-switzer)',
                  fontSize: '19px'
                }}
              >
                The result was a chronic data disconnect. Store-level inventory wasn't visible to e-commerce buyers. Client preferences captured by in-store stylists never informed online merchandising. Markdowns were eroding brand integrity, as excess stock was cleared without strategic insight into what was selling and where.
              </p>
            </div>

            <div className="relative aspect-[16/9] overflow-hidden -mx-6 md:mx-0 mb-12">
              <Image
                src="/assets/images/68acdc1488cc81d5b8d80dba_IMG_8759.jpg"
                alt="Stockroom"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 100%"
              />
            </div>

            <p 
              className="text-[#332D2A] leading-[1.6]"
              style={{ 
                fontFamily: 'var(--font-switzer)',
                fontSize: '19px'
              }}
            >
              By the time Vault was engaged, the merchandising team was spending 40% of their time on manual reconciliation and reconciliation between systems, not on trend analysis or client engagement. The "quiet chaos" had become an expensive operational norm.
            </p>
          </div>

          <div className="mb-24">
            <h2 
              className="text-[40px] md:text-[48px] leading-tight text-[#332D2A] mb-8"
              style={{ fontFamily: 'var(--font-viscomo)' }}
            >
              Chapter 02. The Solution.
            </h2>
            
            <div className="space-y-6 mb-12">
              <p 
                className="text-[#332D2A] leading-[1.6]"
                style={{ 
                  fontFamily: 'var(--font-switzer)',
                  fontSize: '19px'
                }}
              >
                Vault's integration began with the Live Inventory Engine, connecting real-time stock across all five flagship locations and the e-commerce warehouse. The Unified Client Profile module followed, merging CRM data, stylist notes, and purchase history into a single, dynamic view.
              </p>
              
              <p 
                className="text-[#332D2A] leading-[1.6]"
                style={{ 
                  fontFamily: 'var(--font-switzer)',
                  fontSize: '19px'
                }}
              >
                The Predictive Merchandising engine was calibrated to analyze sell-through velocity and generate reorder cues, protecting against both stockouts and over-stocking. Within six weeks, the entire merchandising team was operating from a single, unified view.
              </p>
            </div>

            <div className="relative aspect-[16/9] bg-white border border-[#EAE3DB] rounded-lg overflow-hidden mb-12">
              <div className="p-8 h-full flex items-center justify-center">
                <div className="space-y-6 w-full">
                  <div className="h-8 bg-[#EAE3DB] rounded w-1/3"></div>
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-32 bg-[#F7F5F2] rounded p-4 border border-[#EAE3DB]">
                        <div className="h-6 bg-[#D4CCC4] rounded mb-2"></div>
                        <div className="h-4 bg-[#EAE3DB] rounded"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p 
              className="text-[#332D2A] leading-[1.6]"
              style={{ 
                fontFamily: 'var(--font-switzer)',
                fontSize: '19px'
              }}
            >
              The transformation was immediate. What previously required multiple system logins and manual cross-referencing was now accessible through a single interface. The "silos" were dismantled, and the merchandising team could focus on what mattered: serving clients and protecting margins.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 xl:px-0">
          
          <div className="text-center">
            <p 
              className="text-[#332D2A] leading-relaxed mb-6"
              style={{ 
                fontFamily: 'var(--font-viscomo)',
                fontSize: '64px',
                lineHeight: '1.2'
              }}
            >
              <span className="text-[#C07A56]">"</span>
              Vault is the single most important tool we have for margin protection. It's the source of truth for our entire merchandising team.
              <span className="text-[#C07A56]">"</span>
            </p>
            
            <p 
              className="font-semibold text-[#332D2A]"
              style={{ fontFamily: 'var(--font-switzer)' }}
            >
              Chief Merchandising Officer, Major Department Store
            </p>
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

function MetricBlock({ data, context, hasAnimated, isMobile = false }: { data: string, context: string, hasAnimated: boolean, isMobile?: boolean }) {
  const [displayedValue, setDisplayedValue] = useState(0)
  
  const numericValue = parseFloat(data.replace(/[^0-9.]/g, ''))
  const suffix = data.includes('%') ? '%' : data.includes('x') ? 'x' : ''
  
  useEffect(() => {
    if (hasAnimated && displayedValue < numericValue) {
      const duration = 1500
      const startTime = performance.now()
      
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        const currentValue = numericValue * progress
        
        setDisplayedValue(currentValue)
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      requestAnimationFrame(animate)
    }
  }, [hasAnimated, numericValue])
  
  return (
    <div className="text-center">
      <div 
        className="font-normal text-[#332D2A] mb-2"
        style={{ 
          fontFamily: 'var(--font-switzer)',
          fontSize: isMobile ? '80px' : '120px'
        }}
      >
        {hasAnimated ? `${Math.round(displayedValue)}${suffix}` : `0${suffix}`}
      </div>
      <div 
        className="font-semibold text-[#332D2A]"
        style={{ 
          fontFamily: 'var(--font-switzer)',
          fontSize: isMobile ? '18px' : '24px'
        }}
      >
        {context}
      </div>
    </div>
  )
}

