'use client'

import { useEffect, useRef, useState } from 'react'

export default function TheSolution() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const elementTop = rect.top
        
        if (elementTop < windowHeight && elementTop > -rect.height) {
          const progress = Math.max(0, Math.min(1, 1 - (elementTop / windowHeight)))
          setScrollProgress(progress)
          
          if (progress > 0.2 && !hasAnimated) {
            setHasAnimated(true)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasAnimated])

  return (
    <section 
      ref={sectionRef}
      className="relative bg-[#F7F5F2] py-32 md:py-40 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 xl:px-0">
        
        <div 
          className="text-center space-y-6 mb-16 md:mb-20"
          style={{
            opacity: hasAnimated ? 1 : 0,
            transform: hasAnimated ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
          }}
        >          
          <h2
            className="text-[36px] md:text-[80px] lg:text-[100px] leading-[0.95] text-[#332D2A] mb-6"
            style={{ fontFamily: 'var(--font-viscomo)' }}
          >
            <span className="block">From Chaos</span>
            <span className="block">to Clarity.</span>
          </h2>

          <p 
            className="text-base md:text-lg lg:text-xl text-[#332D2A] leading-relaxed max-w-2xl mx-auto"
            style={{ 
              fontFamily: 'var(--font-switzer)',
              fontWeight: 400
            }}
          >
            Vault unifies your entire retail ecosystem. We connect client profiles, stylist notes, live inventory, and trend intelligence into a single, predictive, and effortless interface.
          </p>
        </div>

        <div className="hidden md:block relative">
          <div 
            className="relative bg-white border border-[#EAE3DB] rounded-lg shadow-sm overflow-hidden"
            style={{
              opacity: hasAnimated ? 1 : 0,
              transform: hasAnimated ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 1s ease-out 0.3s, transform 1s ease-out 0.3s'
            }}
          >
            <div className="aspect-[16/10] bg-gradient-to-br from-[#F7F5F2] to-[#EAE3DB]">
              
              <div className="absolute top-0 left-0 right-0 h-12 bg-[#EAE3DB] border-b border-[#D4CCC4] flex items-center px-4 gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>

              <div className="absolute inset-0 pt-12 p-6 grid grid-cols-12 gap-4">
                
                <div 
                  className="col-span-4 bg-white p-6 rounded border border-[#EAE3DB] shadow-sm"
                  style={{
                    opacity: scrollProgress > 0.4 ? 1 : 0,
                    transform: scrollProgress > 0.4 
                      ? 'translateX(0) scale(1)' 
                      : 'translateX(-100px) scale(0.9)',
                    transition: 'opacity 0.7s ease-out 0.1s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
                  }}
                >
                  <h3 className="text-sm uppercase tracking-wider text-[#332D2A] mb-4" style={{ fontFamily: 'var(--font-switzer)', fontWeight: 500 }}>
                    Client Profile
                  </h3>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-[#EAE3DB] rounded-full"></div>
                    <div className="h-4 bg-[#D4CCC4] rounded w-3/4"></div>
                    <div className="h-3 bg-[#EAE3DB] rounded w-1/2"></div>
                  </div>
                </div>

                <div 
                  className="col-span-8 space-y-4"
                  style={{
                    opacity: scrollProgress > 0.3 ? 1 : 0,
                    transform: scrollProgress > 0.3 ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.95)',
                    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
                  }}
                >
                  <div 
                    className="bg-white p-4 rounded border border-[#EAE3DB] shadow-sm"
                    style={{
                      opacity: scrollProgress > 0.35 ? 1 : 0,
                      transform: scrollProgress > 0.35 ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.98)',
                      transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
                    }}
                  >
                    <h3 className="text-sm uppercase tracking-wider text-[#332D2A] mb-3" style={{ fontFamily: 'var(--font-switzer)', fontWeight: 500 }}>
                      Stylist Notes
                    </h3>
                    <div className="space-y-2">
                      <div className="h-3 bg-[#EAE3DB] rounded"></div>
                      <div className="h-3 bg-[#D4CCC4] rounded w-5/6"></div>
                    </div>
                  </div>

                  <div 
                    className="bg-white p-4 rounded border border-[#EAE3DB] shadow-sm"
                    style={{
                      opacity: scrollProgress > 0.6 ? 1 : 0,
                      transform: scrollProgress > 0.6 
                        ? 'translateX(0) translateY(0) scale(1)' 
                        : 'translateX(100px) translateY(20px) scale(0.95)',
                      transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s'
                    }}
                  >
                    <h3 className="text-sm uppercase tracking-wider text-[#332D2A] mb-3" style={{ fontFamily: 'var(--font-switzer)', fontWeight: 500 }}>
                      Live Inventory
                    </h3>
                    <div className="grid grid-cols-4 gap-2">
                      <div className="aspect-square bg-[#EAE3DB] rounded"></div>
                      <div className="aspect-square bg-[#D4CCC4] rounded"></div>
                      <div className="aspect-square bg-[#EAE3DB] rounded"></div>
                      <div className="aspect-square bg-[#D4CCC4] rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden relative">
          <div 
            className="relative bg-black rounded-[2rem] p-2 shadow-xl"
            style={{
              opacity: hasAnimated ? 1 : 0,
              transform: hasAnimated ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 1s ease-out 0.3s, transform 1s ease-out 0.3s'
            }}
          >
            <div className="bg-white rounded-[1.5rem] overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-2xl z-10"></div>
              
              <div className="space-y-3 p-4 pt-8">
                
                <div 
                  className="bg-white rounded-lg p-4 border border-[#EAE3DB] shadow-sm"
                  style={{
                    opacity: scrollProgress > 0.4 ? 1 : 0,
                    transform: scrollProgress > 0.4 ? 'translateY(0) scale(1)' : 'translateY(-40px) scale(0.95)',
                    transition: 'opacity 0.7s ease-out 0.2s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#EAE3DB] rounded-full"></div>
                    <div className="space-y-1 flex-1">
                      <div className="h-3 bg-[#D4CCC4] rounded w-2/3"></div>
                      <div className="h-2 bg-[#EAE3DB] rounded w-1/3"></div>
                    </div>
                  </div>
                  <h3 className="text-xs uppercase tracking-wider text-[#332D2A] mb-2" style={{ fontFamily: 'var(--font-switzer)', fontWeight: 500 }}>
                    Client Profile
                  </h3>
                </div>

                <div 
                  className="bg-[#F7F5F2] rounded-lg p-4 border border-[#EAE3DB] shadow-sm"
                  style={{
                    opacity: scrollProgress > 0.55 ? 1 : 0,
                    transform: scrollProgress > 0.55 ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
                    transition: 'opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s'
                  }}
                >
                  <h3 className="text-xs uppercase tracking-wider text-[#332D2A] mb-3" style={{ fontFamily: 'var(--font-switzer)', fontWeight: 500 }}>
                    Recommended Capsule
                  </h3>
                  <div className="flex gap-2">
                    <div className="flex-1 aspect-square bg-[#EAE3DB] rounded"></div>
                    <div className="flex-1 aspect-square bg-[#D4CCC4] rounded"></div>
                  </div>
                </div>

                <div 
                  className="bg-white rounded-lg p-4 border border-[#EAE3DB] shadow-sm"
                  style={{
                    opacity: scrollProgress > 0.7 ? 1 : 0,
                    transform: scrollProgress > 0.7 ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
                    transition: 'opacity 0.6s ease-out 0.4s, transform 0.6s ease-out 0.4s'
                  }}
                >
                  <h3 className="text-xs uppercase tracking-wider text-[#332D2A] mb-2" style={{ fontFamily: 'var(--font-switzer)', fontWeight: 500 }}>
                    Inventory Status
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-8 bg-green-100 rounded flex items-center justify-center">
                      <span className="text-xs text-green-600 font-medium" style={{ fontFamily: 'var(--font-switzer)' }}>In Stock</span>
                    </div>
                    <div className="h-8 bg-[#EAE3DB] rounded flex items-center justify-center">
                      <span className="text-xs text-[#332D2A]" style={{ fontFamily: 'var(--font-switzer)' }}>Low Stock</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
