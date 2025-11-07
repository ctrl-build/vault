'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

function MatchScoreTicker({ targetValue, progress }: { targetValue: number; progress: number }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (progress > 0.5) {
      const duration = 1500
      const startTime = Date.now()
      const startValue = 0

      const updateValue = () => {
        const elapsed = Date.now() - startTime
        const currentProgress = Math.min(elapsed / duration, 1)
        const currentValue = Math.floor(startValue + (targetValue - startValue) * currentProgress)
        setDisplayValue(currentValue)

        if (currentProgress < 1) {
          requestAnimationFrame(updateValue)
        }
      }

      requestAnimationFrame(updateValue)
    }
  }, [progress, targetValue])

  return <span>{displayValue}%</span>
}

export default function Context() {
  const spread1Ref = useRef<HTMLDivElement>(null)
  const spread2Ref = useRef<HTMLDivElement>(null)
  const [spread1Progress, setSpread1Progress] = useState(0)
  const [spread2Progress, setSpread2Progress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (spread1Ref.current) {
        const rect = spread1Ref.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight * 0.8)))
        setSpread1Progress(progress)
      }

      if (spread2Ref.current) {
        const rect = spread2Ref.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight * 0.8)))
        setSpread2Progress(progress)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative bg-[#F7F5F2] py-32 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 xl:px-0">
        
        <div className="text-center mb-20 md:mb-32">
          <h2 
            className="text-[50px] md:text-[80px] lg:text-[100px] leading-[0.95] text-[#332D2A]"
            style={{ fontFamily: 'var(--font-viscomo)' }}
          >
            From Atelier to Analytics.
          </h2>
        </div>

        <div className="hidden md:block space-y-32">
          
          <div ref={spread1Ref} className="grid grid-cols-2 gap-12">
            <div 
              className="relative overflow-hidden"
              style={{
                transform: `translateY(${-spread1Progress * 20}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <div 
                className="aspect-[4/5] overflow-hidden relative"
                style={{
                  clipPath: `inset(0 0 ${(1 - spread1Progress) * 100}% 0)`,
                  transition: 'clip-path 1.2s ease-out'
                }}
              >
                <Image
                  src="/assets/images/68acdc146960375eb18b69b0_IMG_8756.jpg"
                  alt="Pleated sculptural garment detail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#332D2A]/30 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white/90 text-sm uppercase tracking-wider" style={{ fontFamily: 'var(--font-switzer)', fontWeight: 500 }}>
                  Structure & Form
                </div>
              </div>
            </div>

            <div 
              className="flex items-center"
              style={{
                opacity: spread1Progress > 0.3 ? spread1Progress : 0,
                transform: `translateY(${(1 - spread1Progress) * 60}px)`,
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
              }}
            >
              <div className="w-full bg-white border border-[#EAE3DB] rounded-lg p-8 shadow-sm">
                <h3 className="text-lg uppercase tracking-wider text-[#332D2A] mb-6" style={{ fontFamily: 'var(--font-switzer)', fontWeight: 600 }}>
                  Calibrated Fit & Material Guidance
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-xs uppercase tracking-wide text-[#332D2A]/60 mb-1" style={{ fontFamily: 'var(--font-switzer)' }}>Fabric</div>
                    <div className="text-base text-[#332D2A]" style={{ fontFamily: 'var(--font-switzer)' }}>Chiffon/Pleated Fabric with Layered Construction</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-[#332D2A]/60 mb-1" style={{ fontFamily: 'var(--font-switzer)' }}>Structure</div>
                    <div className="text-base text-[#332D2A]" style={{ fontFamily: 'var(--font-switzer)' }}>Dramatic Volume, Architectural Silhouette</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-[#332D2A]/60 mb-1" style={{ fontFamily: 'var(--font-switzer)' }}>Special Details</div>
                    <div className="text-base text-[#332D2A]" style={{ fontFamily: 'var(--font-switzer)' }}>Fan Pleats, Ruffles, Tiered Layers</div>
                  </div>
                  <div className="pt-4 border-t border-[#EAE3DB]">
                    <div className="text-xs uppercase tracking-wide text-[#C07A56] mb-1" style={{ fontFamily: 'var(--font-switzer)', fontWeight: 500 }}>Stylist Note</div>
                    <div className="text-base text-[#332D2A]" style={{ fontFamily: 'var(--font-switzer)' }}>Requires space-conscious storage. Best for architectural silhouettes.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p 
            className="text-center text-lg text-[#332D2A] max-w-2xl mx-auto leading-relaxed"
            style={{ 
              fontFamily: 'var(--font-switzer)',
              opacity: spread1Progress > 0.6 ? 1 : 0,
              transition: 'opacity 0.8s ease-out'
            }}
          >
            Translate craftsmanship into confidence. Ensure every piece is presented with the precision it deserves.
          </p>

          <div ref={spread2Ref} className="grid grid-cols-2 gap-12">
            <div 
              className="relative overflow-hidden"
              style={{
                transform: `translateY(${-spread2Progress * 20}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <div 
                className="aspect-[4/5] overflow-hidden relative"
                style={{
                  clipPath: `inset(0 0 ${(1 - spread2Progress) * 100}% 0)`,
                  transition: 'clip-path 1.2s ease-out'
                }}
              >
                <Image
                  src="/assets/images/68acdc1488cc81d5b8d80dba_IMG_8759.jpg"
                  alt="Elegant boutique interior with curated garments"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#332D2A]/30 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white/90 text-sm uppercase tracking-wider" style={{ fontFamily: 'var(--font-switzer)', fontWeight: 500 }}>
                  Silhouette & Taste
                </div>
              </div>
            </div>

            <div 
              className="flex items-center"
              style={{
                opacity: spread2Progress > 0.3 ? spread2Progress : 0,
                transform: `translateY(${(1 - spread2Progress) * 60}px)`,
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
              }}
            >
              <div className="w-full bg-white border border-[#EAE3DB] rounded-lg p-8 shadow-sm">
                <h3 className="text-lg uppercase tracking-wider text-[#332D2A] mb-8" style={{ fontFamily: 'var(--font-switzer)', fontWeight: 600 }}>
                  Client Taste Profile
                </h3>
                
                <div className="mb-8 pb-8 border-b border-[#EAE3DB]">
                  <div className="text-xs uppercase tracking-wide text-[#332D2A]/60 mb-4" style={{ fontFamily: 'var(--font-switzer)' }}>Item Profile:</div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs uppercase tracking-wide text-[#332D2A]/60 mb-1" style={{ fontFamily: 'var(--font-switzer)' }}>Aesthetic:</div>
                      <div className="text-base text-[#332D2A]" style={{ fontFamily: 'var(--font-switzer)' }}>Architectural</div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wide text-[#332D2A]/60 mb-1" style={{ fontFamily: 'var(--font-switzer)' }}>Palette:</div>
                      <div className="text-base text-[#332D2A]" style={{ fontFamily: 'var(--font-switzer)' }}>Neutral</div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wide text-[#332D2A]/60 mb-1" style={{ fontFamily: 'var(--font-switzer)' }}>Fit:</div>
                      <div className="text-base text-[#332D2A]" style={{ fontFamily: 'var(--font-switzer)' }}>Structured</div>
                    </div>
                  </div>
                </div>

                <div className="mb-8 pb-8 border-b border-[#EAE3DB]">
                  <div className="text-xs uppercase tracking-wide text-[#332D2A]/60 mb-4" style={{ fontFamily: 'var(--font-switzer)' }}>Client Match:</div>
                  <div className="space-y-3">
                    <div 
                      style={{
                        opacity: spread2Progress > 0.5 ? 1 : 0,
                        transform: spread2Progress > 0.5 ? 'translateX(0)' : 'translateX(-10px)',
                        transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
                      }}
                    >
                      <div className="text-base text-[#332D2A]" style={{ fontFamily: 'var(--font-switzer)' }}>✓  Prefers: Architectural</div>
                    </div>
                    <div 
                      style={{
                        opacity: spread2Progress > 0.5 ? 1 : 0,
                        transform: spread2Progress > 0.5 ? 'translateX(0)' : 'translateX(-10px)',
                        transition: 'opacity 0.6s ease-out 0.4s, transform 0.6s ease-out 0.4s'
                      }}
                    >
                      <div className="text-base text-[#332D2A]" style={{ fontFamily: 'var(--font-switzer)' }}>✓  Prefers: Neutral Palette</div>
                    </div>
                    <div 
                      style={{
                        opacity: spread2Progress > 0.5 ? 1 : 0,
                        transform: spread2Progress > 0.5 ? 'translateX(0)' : 'translateX(-10px)',
                        transition: 'opacity 0.6s ease-out 0.6s, transform 0.6s ease-out 0.6s'
                      }}
                    >
                      <div className="text-base text-[#332D2A]" style={{ fontFamily: 'var(--font-switzer)' }}>✓  Prefers: Structured Fit</div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-wide text-[#332D2A]/60 mb-2" style={{ fontFamily: 'var(--font-switzer)' }}>Client Match Score</div>
                  <div className="text-[72px] leading-none text-[#C07A56]" style={{ fontFamily: 'var(--font-switzer)' }}>
                    <MatchScoreTicker targetValue={92} progress={spread2Progress} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p 
            className="text-center text-lg text-[#332D2A] max-w-2xl mx-auto leading-relaxed"
            style={{ 
              fontFamily: 'var(--font-switzer)',
              opacity: spread2Progress > 0.6 ? 1 : 0,
              transition: 'opacity 0.8s ease-out'
            }}
          >
            Connect the editorial vision to the individual client. Our engine analyzes every item against each client's unique taste profile, turning inventory into a predictive, personal recommendation.
          </p>
        </div>

        <div className="md:hidden space-y-20">
          
          <div ref={spread1Ref}>
            <div className="relative aspect-[4/5] mb-6 -mx-6 overflow-hidden">
              <div 
                className="absolute inset-0"
                style={{
                  clipPath: `inset(0 0 ${(1 - spread1Progress) * 100}% 0)`,
                  transition: 'clip-path 1.2s ease-out'
                }}
              >
                <Image
                  src="/assets/images/68acdc146960375eb18b69b0_IMG_8756.jpg"
                  alt="Pleated sculptural garment detail"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#332D2A]/30 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white/90 text-sm uppercase tracking-wider" style={{ fontFamily: 'var(--font-switzer)', fontWeight: 500 }}>
                  Structure & Form
                </div>
              </div>
            </div>

            <div 
              className="bg-white border border-[#EAE3DB] rounded-lg p-6 mb-6"
              style={{
                opacity: spread1Progress > 0.5 ? 1 : 0,
                transform: `translateY(${(1 - Math.max(0, spread1Progress - 0.2)) * 40}px)`,
                clipPath: spread1Progress > 0.2 ? `inset(0 0 ${(1 - spread1Progress) * 100}% 0)` : 'inset(0 0 100% 0)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out, clip-path 0.8s ease-out'
              }}
            >
              <h3 className="text-base uppercase tracking-wider text-[#332D2A] mb-4" style={{ fontFamily: 'var(--font-switzer)', fontWeight: 600 }}>
                Calibrated Fit & Material Guidance
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="text-xs uppercase tracking-wide text-[#332D2A]/60 mb-1" style={{ fontFamily: 'var(--font-switzer)' }}>Fabric</div>
                  <div className="text-sm text-[#332D2A]" style={{ fontFamily: 'var(--font-switzer)' }}>Chiffon/Pleated Fabric with Layered Construction</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-[#332D2A]/60 mb-1" style={{ fontFamily: 'var(--font-switzer)' }}>Structure</div>
                  <div className="text-sm text-[#332D2A]" style={{ fontFamily: 'var(--font-switzer)' }}>Dramatic Volume, Architectural Silhouette</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-[#332D2A]/60 mb-1" style={{ fontFamily: 'var(--font-switzer)' }}>Special Details</div>
                  <div className="text-sm text-[#332D2A]" style={{ fontFamily: 'var(--font-switzer)' }}>Fan Pleats, Ruffles, Tiered Layers</div>
                </div>
                <div className="pt-3 border-t border-[#EAE3DB]">
                  <div className="text-xs uppercase tracking-wide text-[#C07A56] mb-1" style={{ fontFamily: 'var(--font-switzer)', fontWeight: 500 }}>Stylist Note</div>
                  <div className="text-sm text-[#332D2A]" style={{ fontFamily: 'var(--font-switzer)' }}>Requires space-conscious storage. Best for architectural silhouettes.</div>
                </div>
              </div>
            </div>

            <p 
              className="text-center text-base text-[#332D2A] leading-relaxed"
              style={{ 
                fontFamily: 'var(--font-switzer)',
                opacity: spread1Progress > 0.7 ? 1 : 0,
                transition: 'opacity 0.8s ease-out'
              }}
            >
              Translate craftsmanship into confidence. Ensure every piece is presented with the precision it deserves.
            </p>
          </div>

          <div ref={spread2Ref}>
            <div className="relative aspect-[4/5] mb-6 -mx-6 overflow-hidden">
              <div 
                className="absolute inset-0"
                style={{
                  clipPath: `inset(0 0 ${(1 - spread2Progress) * 100}% 0)`,
                  transition: 'clip-path 1.2s ease-out'
                }}
              >
                <Image
                  src="/assets/images/68acdc1488cc81d5b8d80dba_IMG_8759.jpg"
                  alt="Elegant boutique interior with curated garments"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#332D2A]/30 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white/90 text-sm uppercase tracking-wider" style={{ fontFamily: 'var(--font-switzer)', fontWeight: 500 }}>
                  Silhouette & Taste
                </div>
              </div>
            </div>

            <div 
              className="bg-white border border-[#EAE3DB] rounded-lg p-6 mb-6"
              style={{
                opacity: spread2Progress > 0.5 ? 1 : 0,
                transform: `translateY(${(1 - Math.max(0, spread2Progress - 0.2)) * 40}px)`,
                clipPath: spread2Progress > 0.2 ? `inset(0 0 ${(1 - spread2Progress) * 100}% 0)` : 'inset(0 0 100% 0)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out, clip-path 0.8s ease-out'
              }}
            >
              <h3 className="text-base uppercase tracking-wider text-[#332D2A] mb-6" style={{ fontFamily: 'var(--font-switzer)', fontWeight: 600 }}>
                Client Taste Profile
              </h3>
              
              <div className="mb-6 pb-6 border-b border-[#EAE3DB]">
                <div className="text-xs uppercase tracking-wide text-[#332D2A]/60 mb-3" style={{ fontFamily: 'var(--font-switzer)' }}>Item Profile:</div>
                <div className="space-y-2">
                  <div>
                    <div className="text-xs uppercase tracking-wide text-[#332D2A]/60 mb-1" style={{ fontFamily: 'var(--font-switzer)' }}>Aesthetic:</div>
                    <div className="text-sm text-[#332D2A]" style={{ fontFamily: 'var(--font-switzer)' }}>Architectural</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-[#332D2A]/60 mb-1" style={{ fontFamily: 'var(--font-switzer)' }}>Palette:</div>
                    <div className="text-sm text-[#332D2A]" style={{ fontFamily: 'var(--font-switzer)' }}>Neutral</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-[#332D2A]/60 mb-1" style={{ fontFamily: 'var(--font-switzer)' }}>Fit:</div>
                    <div className="text-sm text-[#332D2A]" style={{ fontFamily: 'var(--font-switzer)' }}>Structured</div>
                  </div>
                </div>
              </div>

              <div className="mb-6 pb-6 border-b border-[#EAE3DB]">
                <div className="text-xs uppercase tracking-wide text-[#332D2A]/60 mb-3" style={{ fontFamily: 'var(--font-switzer)' }}>Client Match:</div>
                <div className="space-y-2">
                  <div 
                    style={{
                      opacity: spread2Progress > 0.5 ? 1 : 0,
                      transform: spread2Progress > 0.5 ? 'translateX(0)' : 'translateX(-10px)',
                      transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
                    }}
                  >
                    <div className="text-sm text-[#332D2A]" style={{ fontFamily: 'var(--font-switzer)' }}>✓  Prefers: Architectural</div>
                  </div>
                  <div 
                    style={{
                      opacity: spread2Progress > 0.5 ? 1 : 0,
                      transform: spread2Progress > 0.5 ? 'translateX(0)' : 'translateX(-10px)',
                      transition: 'opacity 0.6s ease-out 0.4s, transform 0.6s ease-out 0.4s'
                    }}
                  >
                    <div className="text-sm text-[#332D2A]" style={{ fontFamily: 'var(--font-switzer)' }}>✓  Prefers: Neutral Palette</div>
                  </div>
                  <div 
                    style={{
                      opacity: spread2Progress > 0.5 ? 1 : 0,
                      transform: spread2Progress > 0.5 ? 'translateX(0)' : 'translateX(-10px)',
                      transition: 'opacity 0.6s ease-out 0.6s, transform 0.6s ease-out 0.6s'
                    }}
                  >
                    <div className="text-sm text-[#332D2A]" style={{ fontFamily: 'var(--font-switzer)' }}>✓  Prefers: Structured Fit</div>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-xs uppercase tracking-wide text-[#332D2A]/60 mb-2" style={{ fontFamily: 'var(--font-switzer)' }}>Client Match Score</div>
                <div className="text-[48px] leading-none text-[#C07A56]" style={{ fontFamily: 'var(--font-switzer)' }}>
                  <MatchScoreTicker targetValue={92} progress={spread2Progress} />
                </div>
              </div>
            </div>

            <p 
              className="text-center text-base text-[#332D2A] leading-relaxed"
              style={{ 
                fontFamily: 'var(--font-switzer)',
                opacity: spread2Progress > 0.7 ? 1 : 0,
                transition: 'opacity 0.8s ease-out'
              }}
            >
              Connect the editorial vision to the individual client. Our engine analyzes every item against each client's unique taste profile, turning inventory into a predictive, personal recommendation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


