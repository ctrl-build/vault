'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function PlatformPage() {
  const [activeModule, setActiveModule] = useState(1)
  const sectionRefs = useRef<{[key: number]: HTMLDivElement | null}>({})

  const modules = [
    {
      number: 1,
      title: 'Unified Client Profile',
      body: `Vault connects CRM data, stylist notes, purchase history, and real-time browsing into one dynamic profile that lives across every touchpoint. Each client's taste, fit, budget, and occasion preferences are tracked, calibrated, and instantly accessible to stylists, associates, and merchandisers alike.`,
      subFeatures: [
        'Taste-Profile Matching',
        'In-Store & Remote History',
        'Fit & Size Calibration'
      ],
      visual: '/assets/images/68add0a5857582de29c59aa3_client-taste-profile-screen-removebg-preview.png'
    },
    {
      number: 2,
      title: 'Live Inventory Engine',
      body: `Real-time visibility across warehouses, stores, and digital platforms. The Live Inventory Engine provides instant stock status, cross-location availability, and intelligent reorder signals. Merchandisers can make buying decisions based on actual, up-to-the-minute data, not last week's spreadsheets.`,
      subFeatures: [
        'Real-Time Stock Status',
        'Cross-Location Availability',
        'Intelligent Reorder Signals'
      ],
      visual: '/assets/images/68add0a5857582de29c59aa3_client-taste-profile-screen-removebg-preview.png'
    },
    {
      number: 3,
      title: 'Predictive Merchandising',
      body: `Vault's proprietary AI analyzes sales velocity, trend forecasts, fabric composition, and historical performance to deliver predictive capsules. Merchandisers receive edit-ready collections calibrated by client taste, regional preferences, and margin optimization. No more guesswork.`,
      subFeatures: [
        'Predictive Capsules',
        'Trend Forecast Integration',
        'Margin Optimization'
      ],
      visual: '/assets/images/68add0a5857582de29c59aa3_client-taste-profile-screen-removebg-preview.png'
    },
    {
      number: 4,
      title: 'Associate & Editorial Tools',
      body: `Empower your team with actionable intelligence. Associates receive one-tap client lists for remote selling. Editors plan stories with trend-matched visuals. Leaders see precise sell-through and profit analysis across all channels. Everyone speaks the same language of intelligence.`,
      subFeatures: [
        'One-Tap Client Lists',
        'Editorial Story Planning',
        'Multi-Channel Analytics'
      ],
      visual: '/assets/images/68add0a5857582de29c59aa3_client-taste-profile-screen-removebg-preview.png'
    }
  ]

  const integrations = ['Salesforce', 'Shopify Plus', 'NetSuite', 'Magento']

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const moduleNumber = parseInt(entry.target.getAttribute('data-module') || '1')
          setActiveModule(moduleNumber)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToModule = (moduleNumber: number) => {
    const ref = sectionRefs.current[moduleNumber]
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const getUIVisual = (moduleNumber: number) => {
    switch(moduleNumber) {
      case 1:
        return (
          <div className="p-8 space-y-6">
            <div className="h-8 bg-[#EAE3DB] rounded w-1/3"></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-32 bg-[#F7F5F2] rounded p-4 border border-[#EAE3DB]">
                <div className="w-12 h-12 bg-[#EAE3DB] rounded-full mb-3"></div>
                <div className="h-6 bg-[#D4CCC4] rounded mb-2"></div>
                <div className="h-4 bg-[#EAE3DB] rounded"></div>
              </div>
              <div className="h-32 bg-[#F7F5F2] rounded p-4 border border-[#EAE3DB]">
                <div className="h-6 bg-[#D4CCC4] rounded mb-2"></div>
                <div className="h-4 bg-[#EAE3DB] rounded"></div>
              </div>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="p-8 space-y-6">
            <div className="space-y-3">
              <div className="h-6 bg-[#D4CCC4] rounded w-2/3"></div>
              <div className="h-4 bg-[#EAE3DB] rounded w-full"></div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-20 bg-[#F7F5F2] rounded p-3 border border-[#EAE3DB]">
                  <div className="h-4 bg-[#D4CCC4] rounded mb-2"></div>
                  <div className="h-3 bg-[#EAE3DB] rounded"></div>
                </div>
              ))}
            </div>
          </div>
        )
      case 3:
        return (
          <div className="p-8 space-y-6">
            <div className="flex gap-2">
              <div className="h-3 w-3 bg-[#C07A56] rounded-full"></div>
              <div className="h-8 bg-[#EAE3DB] rounded flex-1"></div>
            </div>
            <div className="h-32 bg-gradient-to-br from-[#EAE3DB] to-[#D4CCC4] rounded border border-[#EAE3DB] p-4 flex items-center justify-center">
              <div className="text-center">
                <div className="h-6 bg-white/50 rounded w-24 mx-auto mb-2"></div>
                <div className="h-4 bg-white/30 rounded w-32 mx-auto"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-[#EAE3DB] rounded"></div>
              <div className="h-3 bg-[#D4CCC4] rounded w-5/6"></div>
            </div>
          </div>
        )
      case 4:
        return (
          <div className="p-8 space-y-6">
            <div className="h-8 bg-[#D4CCC4] rounded"></div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 h-16 bg-[#F7F5F2] rounded p-4 border border-[#EAE3DB]">
                <div className="w-12 h-12 bg-[#EAE3DB] rounded-full"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-3 bg-[#D4CCC4] rounded w-2/3"></div>
                  <div className="h-2 bg-[#EAE3DB] rounded w-1/2"></div>
                </div>
              </div>
              <div className="flex items-center gap-3 h-16 bg-[#F7F5F2] rounded p-4 border border-[#EAE3DB]">
                <div className="w-12 h-12 bg-[#EAE3DB] rounded-full"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-3 bg-[#D4CCC4] rounded w-2/3"></div>
                  <div className="h-2 bg-[#EAE3DB] rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <main className="bg-[#F7F5F2]">
      <section className="relative bg-[#F7F5F2] py-32 md:py-40">
        <div className="max-w-6xl mx-auto px-6 xl:px-0">
          
          <h1 
            className="text-[60px] md:text-[80px] lg:text-[100px] leading-[0.95] text-[#332D2A] mb-6"
            style={{ fontFamily: 'var(--font-ogg-display)' }}
          >
            The Single Source of Truth.
          </h1>

          <p 
            className="text-[#332D2A] leading-relaxed max-w-3xl mb-12"
            style={{ 
              fontFamily: 'var(--font-switzer)',
              fontSize: '20px'
            }}
          >
            A detailed exploration of the Vault platform, from unified data infrastructure to predictive, actionable tools.
          </p>

          <div className="relative aspect-[16/9] bg-white border border-[#EAE3DB] rounded-lg overflow-hidden shadow-sm">
            <div className="absolute top-0 left-0 right-0 h-12 bg-[#EAE3DB] border-b border-[#D4CCC4] flex items-center px-4 gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
            </div>

            <div className="absolute inset-0 pt-12 p-6 grid grid-cols-12 gap-4">
              
              <div className="col-span-3 bg-[#F7F5F2] p-4 rounded border border-[#EAE3DB]">
                <div className="w-16 h-16 bg-[#EAE3DB] rounded-full mx-auto mb-3"></div>
                <div className="h-4 bg-[#D4CCC4] rounded w-3/4 mx-auto mb-2"></div>
                <div className="h-3 bg-[#EAE3DB] rounded w-1/2 mx-auto"></div>
              </div>

              <div className="col-span-9 space-y-4">
                
                <div className="h-8 bg-[#EAE3DB] rounded w-1/3"></div>
                
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-24 bg-[#F7F5F2] rounded p-3 border border-[#EAE3DB]">
                      <div className="h-5 bg-[#D4CCC4] rounded mb-2"></div>
                      <div className="h-4 bg-[#EAE3DB] rounded w-3/4"></div>
                    </div>
                  ))}
                </div>

                <div className="h-32 bg-gradient-to-br from-[#EAE3DB] to-[#D4CCC4] rounded border border-[#EAE3DB] p-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="h-6 bg-white/50 rounded w-32 mx-auto mb-2"></div>
                    <div className="h-4 bg-white/30 rounded w-40 mx-auto"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  {[1, 2].map((i) => (
                    <div key={i} className="flex items-center gap-3 h-12 bg-[#F7F5F2] rounded p-3 border border-[#EAE3DB]">
                      <div className="w-8 h-8 bg-[#EAE3DB] rounded-full"></div>
                      <div className="flex-1 space-y-1">
                        <div className="h-3 bg-[#D4CCC4] rounded w-2/3"></div>
                        <div className="h-2 bg-[#EAE3DB] rounded w-1/2"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#F7F5F2] py-20 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 xl:px-0">
          <div className="grid grid-cols-4 gap-16">
            
            <div className="col-span-1">
              <div className="sticky top-32">
                <nav className="space-y-2">
                  {modules.map((module) => (
                    <button
                      key={module.number}
                      onClick={() => scrollToModule(module.number)}
                      className={`block w-full text-left py-3 px-4 transition-all duration-300 ${
                        activeModule === module.number
                          ? 'text-[#C07A56]'
                          : 'text-[#EAE3DB] hover:text-[#332D2A]'
                      }`}
                      style={{ fontFamily: 'var(--font-switzer)', fontWeight: 500 }}
                    >
                      {String(module.number).padStart(2, '0')}. {module.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            <div className="col-span-3 space-y-32">
              {modules.map((module) => (
                <div
                  key={module.number}
                  ref={(el) => { sectionRefs.current[module.number] = el }}
                  data-module={module.number}
                  className="scroll-mt-32"
                >
                  <h2 
                    className="mb-6 text-[#332D2A]"
                    style={{ 
                      fontFamily: 'var(--font-switzer)',
                      fontWeight: 600,
                      fontSize: '32px'
                    }}
                  >
                    {String(module.number).padStart(2, '0')}. {module.title}
                  </h2>

                  <p 
                    className="text-xl leading-relaxed text-[#332D2A] mb-8 max-w-3xl"
                    style={{ fontFamily: 'var(--font-switzer)' }}
                  >
                    {module.body}
                  </p>

                  <ul className="space-y-3 mb-12">
                    {module.subFeatures.map((feature) => (
                      <li 
                        key={feature}
                        className="text-lg text-[#332D2A]"
                        style={{ fontFamily: 'var(--font-switzer)' }}
                      >
                        • {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="relative aspect-[16/10] bg-white border border-[#EAE3DB] rounded-lg overflow-hidden">
                    {getUIVisual(module.number)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <MobilePlatform modules={modules} />

      <section className="relative bg-[#F7F5F2] py-32 md:py-40">
        <div className="max-w-6xl mx-auto px-6 xl:px-0 text-center">
          
          <h2 
            className="text-[50px] md:text-[80px] lg:text-[100px] leading-[0.95] text-[#332D2A] mb-8"
            style={{ fontFamily: 'var(--font-ogg-display)' }}
          >
            The Engine Behind the Edit.
          </h2>

          <p 
            className="text-xl text-[#332D2A] leading-relaxed max-w-3xl mx-auto mb-12"
            style={{ fontFamily: 'var(--font-switzer)' }}
          >
            Vault's proprietary AI analyzes millions of data points—from sales velocity and trend forecasts to fabric composition and stylist sentiment—to deliver insights that are not just fast, but right.
          </p>

          <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
            <Image
              src="/assets/images/68acdbeab43201c94bbf5ed3_IMG_8758.jpg"
              alt="Fashion workspace with laptop showing curated products"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
            />
          </div>
        </div>
      </section>

      <section className="relative bg-[#F7F5F2] py-32 md:py-40">
        <div className="max-w-6xl mx-auto px-6 xl:px-0">
          
          <h2 
            className="text-[50px] md:text-[80px] lg:text-[100px] leading-[0.95] text-[#332D2A] mb-8 text-center"
            style={{ fontFamily: 'var(--font-ogg-display)' }}
          >
            Works With Your World.
          </h2>

          <p 
            className="text-xl text-[#332D2A] leading-relaxed max-w-3xl mx-auto mb-16 text-center"
            style={{ fontFamily: 'var(--font-switzer)' }}
          >
            Vault layers onto your existing stack, unifying your tools without replacing them. We connect seamlessly with your e-commerce platform, ERP, and CRM.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {integrations.map((integration) => (
              <div
                key={integration}
                className="text-center py-8 border border-[#EAE3DB] rounded-lg"
              >
                <p 
                  className="text-2xl font-semibold text-[#332D2A]"
                  style={{ fontFamily: 'var(--font-switzer)' }}
                >
                  {integration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function UIVisualDisplay({ moduleNumber }: { moduleNumber: number }) {
  switch(moduleNumber) {
    case 1:
      return (
        <div className="p-8 space-y-6">
          <div className="h-8 bg-[#EAE3DB] rounded w-1/3"></div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-32 bg-[#F7F5F2] rounded p-4 border border-[#EAE3DB]">
              <div className="w-12 h-12 bg-[#EAE3DB] rounded-full mb-3"></div>
              <div className="h-6 bg-[#D4CCC4] rounded mb-2"></div>
              <div className="h-4 bg-[#EAE3DB] rounded"></div>
            </div>
            <div className="h-32 bg-[#F7F5F2] rounded p-4 border border-[#EAE3DB]">
              <div className="h-6 bg-[#D4CCC4] rounded mb-2"></div>
              <div className="h-4 bg-[#EAE3DB] rounded"></div>
            </div>
          </div>
        </div>
      )
    case 2:
      return (
        <div className="p-8 space-y-6">
          <div className="space-y-3">
            <div className="h-6 bg-[#D4CCC4] rounded w-2/3"></div>
            <div className="h-4 bg-[#EAE3DB] rounded w-full"></div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-20 bg-[#F7F5F2] rounded p-3 border border-[#EAE3DB]">
                <div className="h-4 bg-[#D4CCC4] rounded mb-2"></div>
                <div className="h-3 bg-[#EAE3DB] rounded"></div>
              </div>
            ))}
          </div>
        </div>
      )
    case 3:
      return (
        <div className="p-8 space-y-6">
          <div className="flex gap-2">
            <div className="h-3 w-3 bg-[#C07A56] rounded-full"></div>
            <div className="h-8 bg-[#EAE3DB] rounded flex-1"></div>
          </div>
          <div className="h-32 bg-gradient-to-br from-[#EAE3DB] to-[#D4CCC4] rounded border border-[#EAE3DB] p-4 flex items-center justify-center">
            <div className="text-center">
              <div className="h-6 bg-white/50 rounded w-24 mx-auto mb-2"></div>
              <div className="h-4 bg-white/30 rounded w-32 mx-auto"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-[#EAE3DB] rounded"></div>
            <div className="h-3 bg-[#D4CCC4] rounded w-5/6"></div>
          </div>
        </div>
      )
    case 4:
      return (
        <div className="p-8 space-y-6">
          <div className="h-8 bg-[#D4CCC4] rounded"></div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 h-16 bg-[#F7F5F2] rounded p-4 border border-[#EAE3DB]">
              <div className="w-12 h-12 bg-[#EAE3DB] rounded-full"></div>
              <div className="flex-1 space-y-2">
                <div className="h-3 bg-[#D4CCC4] rounded w-2/3"></div>
                <div className="h-2 bg-[#EAE3DB] rounded w-1/2"></div>
              </div>
            </div>
            <div className="flex items-center gap-3 h-16 bg-[#F7F5F2] rounded p-4 border border-[#EAE3DB]">
              <div className="w-12 h-12 bg-[#EAE3DB] rounded-full"></div>
              <div className="flex-1 space-y-2">
                <div className="h-3 bg-[#D4CCC4] rounded w-2/3"></div>
                <div className="h-2 bg-[#EAE3DB] rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      )
    default:
      return null
  }
}

function MobilePlatform({ modules }: { modules: any[] }) {
  const [mobileActive, setMobileActive] = useState(1)
  
  return (
    <section className="relative bg-[#F7F5F2] py-20 md:hidden px-6">
      <div className="space-y-8">
        
        <div className="space-y-1">
          {modules.map((module) => {
            const isActive = mobileActive === module.number
            return (
              <div key={module.number}>
                <button
                  onClick={() => setMobileActive(module.number)}
                  className="w-full text-left p-4 rounded transition-all duration-300"
                  style={{
                    color: isActive ? '#332D2A' : '#EAE3DB',
                    backgroundColor: isActive ? '#F7F5F2' : 'transparent'
                  }}
                >
                  <h3
                    className="text-xl mb-2"
                    style={{ fontFamily: 'var(--font-switzer)', fontWeight: isActive ? 600 : 400 }}
                  >
                    {String(module.number).padStart(2, '0')}. {module.title}
                  </h3>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p
                      className="text-base leading-relaxed mb-4"
                      style={{ fontFamily: 'var(--font-switzer)' }}
                    >
                      {module.body}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {module.subFeatures.map((feature: string) => (
                        <li 
                          key={feature}
                          className="text-base"
                          style={{ fontFamily: 'var(--font-switzer)' }}
                        >
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </button>
              </div>
            )
          })}
        </div>

        <div className="relative h-[400px]">
          {modules.map((module) => (
            <div
              key={module.number}
              className={`absolute inset-0 transition-opacity duration-700 ${
                mobileActive === module.number ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <div className="relative aspect-[16/10] bg-white border border-[#EAE3DB] rounded-lg overflow-hidden">
                <UIVisualDisplay moduleNumber={module.number} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

