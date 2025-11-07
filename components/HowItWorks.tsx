'use client'

import { useEffect, useRef, useState } from 'react'

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeBlock, setActiveBlock] = useState(1)
  const [mobileActive, setMobileActive] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const sectionTop = rect.top
        const sectionHeight = rect.height
        const viewportHeight = window.innerHeight
        
        const scrolled = Math.max(0, viewportHeight - sectionTop - 300)
        const totalScrollable = sectionHeight + viewportHeight - 300
        const progress = Math.min(1, scrolled / totalScrollable)
        
        if (progress < 0.35) {
          setActiveBlock(1)
        } else if (progress < 0.60) {
          setActiveBlock(2)
        } else {
          setActiveBlock(3)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const blocks = [
    {
      number: '01',
      title: 'Unify Intelligence',
      body: 'Vault connects every data point. From client profiles and stylist notes to live inventory and warehouse receipts, every item is tracked from plan to purchase.'
    },
    {
      number: '02',
      title: 'Predict Demand',
      body: 'Our engine analyzes sales history, trend data, and client taste to deliver predictive insights. Receive edit-ready capsules, calibrated fit guidance, and reorder cues that protect brand integrity.'
    },
    {
      number: '03',
      title: 'Activate Sales',
      body: 'Equip your teams with actionable intelligence. Associates receive one-tap client lists for remote selling. Editors plan stories, and leaders see precise sell-through and profit analysis.'
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="relative bg-[#F7F5F2] py-32 md:py-40"
    >
      <div className="max-w-7xl mx-auto px-6 xl:px-0">
        
        <div className="text-center mb-16 md:mb-20">
          <h2 
            className="text-[50px] md:text-[80px] lg:text-[100px] leading-[0.95] text-[#332D2A]"
            style={{ fontFamily: 'var(--font-viscomo)' }}
          >
            How Vault Works
          </h2>
        </div>

        <div className="hidden md:grid md:grid-cols-2 md:gap-16">
          
          <div className="space-y-32">
            {blocks.map((block, index) => {
              const isActive = activeBlock === index + 1
              const isUpcoming = activeBlock < index + 1
              
              return (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    isActive 
                      ? 'opacity-100 translate-y-0' 
                      : isUpcoming 
                      ? 'opacity-30 translate-y-4' 
                      : 'opacity-50 -translate-y-4'
                  }`}
                >
                  <h3 
                    className="text-6xl mb-6 text-[#332D2A]"
                    style={{ fontFamily: 'var(--font-switzer)', fontWeight: 600 }}
                  >
                    {block.number}. {block.title}
                  </h3>
                  <p 
                    className="text-xl leading-relaxed text-[#332D2A] max-w-xl"
                    style={{ fontFamily: 'var(--font-switzer)' }}
                  >
                    {block.body}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="sticky top-32 h-[600px]">
            <div className="relative h-full bg-white border border-[#EAE3DB] rounded-lg shadow-lg overflow-hidden">
              
              <div 
                className={`absolute inset-0 p-8 transition-opacity duration-1000 ${
                  activeBlock === 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="space-y-6">
                  <div className="h-8 bg-[#EAE3DB] rounded w-1/3"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 bg-[#F7F5F2] rounded p-4 border border-[#EAE3DB]">
                      <div className="h-6 bg-[#D4CCC4] rounded mb-2"></div>
                      <div className="h-4 bg-[#EAE3DB] rounded"></div>
                    </div>
                    <div className="h-32 bg-[#F7F5F2] rounded p-4 border border-[#EAE3DB]">
                      <div className="h-6 bg-[#D4CCC4] rounded mb-2"></div>
                      <div className="h-4 bg-[#EAE3DB] rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div 
                className={`absolute inset-0 p-8 transition-opacity duration-1000 ${
                  activeBlock === 2 ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="space-y-6">
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
                    <div className="h-3 bg-[#EAE3DB] rounded w-4/6"></div>
                  </div>
                </div>
              </div>

              <div 
                className={`absolute inset-0 p-8 transition-opacity duration-1000 ${
                  activeBlock === 3 ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="space-y-6">
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
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden space-y-8">
          
          <div className="relative bg-white border border-[#EAE3DB] rounded-lg shadow-sm overflow-hidden h-[400px]">
            <div 
              className={`absolute inset-0 transition-opacity duration-700 ${
                mobileActive === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <div className="p-6 space-y-4">
                <div className="h-6 bg-[#EAE3DB] rounded w-1/3"></div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-24 bg-[#F7F5F2] rounded p-3 border border-[#EAE3DB]">
                    <div className="h-4 bg-[#D4CCC4] rounded mb-2"></div>
                    <div className="h-3 bg-[#EAE3DB] rounded"></div>
                  </div>
                  <div className="h-24 bg-[#F7F5F2] rounded p-3 border border-[#EAE3DB]">
                    <div className="h-4 bg-[#D4CCC4] rounded mb-2"></div>
                    <div className="h-3 bg-[#EAE3DB] rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className={`absolute inset-0 transition-opacity duration-700 ${
                mobileActive === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <div className="p-6 space-y-4">
                <div className="flex gap-2">
                  <div className="h-2 w-2 bg-[#C07A56] rounded-full"></div>
                  <div className="h-6 bg-[#EAE3DB] rounded flex-1"></div>
                </div>
                <div className="h-32 bg-gradient-to-br from-[#EAE3DB] to-[#D4CCC4] rounded border border-[#EAE3DB] p-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="h-5 bg-white/50 rounded w-20 mx-auto mb-2"></div>
                    <div className="h-3 bg-white/30 rounded w-28 mx-auto"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-[#EAE3DB] rounded"></div>
                  <div className="h-2 bg-[#D4CCC4] rounded w-5/6"></div>
                </div>
              </div>
            </div>

            <div 
              className={`absolute inset-0 transition-opacity duration-700 ${
                mobileActive === 3 ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <div className="p-6 space-y-4">
                <div className="h-6 bg-[#D4CCC4] rounded"></div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 h-14 bg-[#F7F5F2] rounded p-3 border border-[#EAE3DB]">
                    <div className="w-10 h-10 bg-[#EAE3DB] rounded-full"></div>
                    <div className="flex-1 space-y-1">
                      <div className="h-2 bg-[#D4CCC4] rounded w-2/3"></div>
                      <div className="h-2 bg-[#EAE3DB] rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 h-14 bg-[#F7F5F2] rounded p-3 border border-[#EAE3DB]">
                    <div className="w-10 h-10 bg-[#EAE3DB] rounded-full"></div>
                    <div className="flex-1 space-y-1">
                      <div className="h-2 bg-[#D4CCC4] rounded w-2/3"></div>
                      <div className="h-2 bg-[#EAE3DB] rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            {blocks.map((block, index) => {
              const isActive = mobileActive === index + 1
              return (
                <div key={index}>
                  <button
                    onClick={() => setMobileActive(index + 1)}
                    className="w-full text-left p-4 rounded transition-all duration-300"
                    style={{
                      color: isActive ? '#332D2A' : '#D4CCC4',
                      backgroundColor: isActive ? '#F7F5F2' : 'transparent'
                    }}
                  >
                    <h3 
                      className="text-2xl mb-2"
                      style={{ fontFamily: 'var(--font-switzer)', fontWeight: isActive ? 600 : 400 }}
                    >
                      {block.number}. {block.title}
                    </h3>
                    <div 
                      className={`overflow-hidden transition-all duration-500 ${
                        isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p 
                        className="text-base leading-relaxed"
                        style={{ fontFamily: 'var(--font-switzer)' }}
                      >
                        {block.body}
                      </p>
                    </div>
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

