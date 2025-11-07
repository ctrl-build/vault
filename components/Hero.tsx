'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [deviceOrientation, setDeviceOrientation] = useState({ beta: 0, gamma: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  const isMobile = useRef(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current && !isMobile.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        setMousePosition({ x, y })
      }
    }

    const hero = heroRef.current
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove)
      return () => hero.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.beta !== null && e.gamma !== null) {
        setDeviceOrientation({ 
          beta: e.beta, 
          gamma: e.gamma 
        })
      }
    }

    if (typeof window !== 'undefined' && 'DeviceOrientationEvent' in window) {
      const DeviceOrientationEvent = window.DeviceOrientationEvent as any
      if (DeviceOrientationEvent.requestPermission) {
        DeviceOrientationEvent.requestPermission().then((response: string) => {
          if (response === 'granted') {
            window.addEventListener('deviceorientation', handleOrientation)
          }
        })
      } else {
        window.addEventListener('deviceorientation', handleOrientation)
      }
    }

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation)
    }
  }, [])

  useEffect(() => {
    const checkMobile = () => {
      isMobile.current = window.innerWidth < 768
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const gridTransform = isMobile.current 
    ? `translate(${deviceOrientation.gamma * 0.5}px, ${deviceOrientation.beta * 0.5}px)`
    : `translate(${-mousePosition.x * 0.15}px, ${-mousePosition.y * 0.15}px)`

  return (
    <section 
      ref={heroRef}
      className="relative h-screen min-h-[90vh] md:h-screen bg-[#F7F5F2] overflow-hidden"
    >
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle, #EAE3DB 0.5px, transparent 0.5px)',
          backgroundSize: '50px 50px',
          backgroundPosition: '0 0',
          transform: gridTransform,
          transition: 'transform 0.4s ease-out'
        }}
      />

      <div className="hidden md:block relative z-10 h-full flex flex-col">
        <div className="flex-1 flex items-center justify-start">
          <div className="max-w-7xl mx-auto px-6 xl:px-0 w-full mt-12">
            <div className="max-w-4xl space-y-8">
              <div className="space-y-4" style={{ animation: 'fadeInLetterReveal 1.2s ease-out 0.2s both' }}>
                <h2 
                  className="text-[18px] uppercase tracking-[0.125em] text-[#332D2A]"
                  style={{ 
                    fontFamily: 'var(--font-switzer)',
                    fontWeight: 600,
                    letterSpacing: '2px'
                  }}
                >
                  INTELLIGENCE INFRASTRUCTURE
                </h2>
                <div 
                  className="h-[1px] bg-[#EAE3DB]"
                  style={{ 
                    animation: 'drawLine 1s ease-out 0.8s both',
                    transformOrigin: 'left'
                  }}
                />
              </div>

              <div style={{ animation: 'wipeInUp 1.5s ease-out 1.2s both' }}>
                <h1 
                  className="text-[80px] lg:text-[110px] leading-[0.95] text-[#332D2A] break-normal"
                  style={{ fontFamily: 'var(--font-viscomo)' }}
                >
                  For the Next Era<br />
                  of Luxury Retail.
                </h1>
              </div>

              <p 
                className="text-lg text-[#332D2A] max-w-[600px] leading-relaxed"
                style={{ 
                  fontFamily: 'var(--font-switzer)',
                  fontWeight: 400,
                  animation: 'fadeIn 1s ease-out 2.2s both'
                }}
              >
                Vault unifies client profiles, stylist notes, live inventory, and trend intelligence to deliver predictive, actionable insights.
              </p>

              <div style={{ animation: 'fadeIn 1s ease-out 2.5s both' }}>
                <Link
                  href="/briefing"
                  className="inline-block px-6 py-2.5 border-[1px] border-[#C07A56] text-[#C07A56] transition-all duration-300 hover:bg-[#C07A56] hover:text-[#F7F5F2]"
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
        </div>
      </div>

      <div className="md:hidden relative z-10 h-full flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-md space-y-6 text-center">
          <div className="space-y-4" style={{ animation: 'fadeInLetterReveal 1.2s ease-out 0.2s both' }}>
            <h2 
              className="text-[14px] uppercase tracking-[0.2em] text-[#332D2A]"
              style={{ 
                fontFamily: 'var(--font-switzer)',
                fontWeight: 600
              }}
            >
              INTELLIGENCE INFRASTRUCTURE
            </h2>
            <div 
              className="h-[1px] bg-[#EAE3DB] mx-auto max-w-[200px]"
              style={{ 
                animation: 'drawLineCenter 1s ease-out 0.8s both',
                transformOrigin: 'center'
              }}
            />
          </div>

          <div style={{ animation: 'wipeInUp 1.5s ease-out 1.2s both' }}>
            <h1 
              className="text-[56px] leading-[0.95] text-[#332D2A]"
              style={{ fontFamily: 'var(--font-viscomo)' }}
            >
              For the Next<br />
              Era of Luxury<br />
              Retail.
            </h1>
          </div>

          <p 
            className="text-base text-[#332D2A] leading-relaxed"
            style={{ 
              fontFamily: 'var(--font-switzer)',
              fontWeight: 400,
              animation: 'fadeIn 1s ease-out 2.2s both'
            }}
          >
            Vault unifies client profiles, stylist notes, live inventory, and trend intelligence to deliver predictive, actionable insights.
          </p>

          <div style={{ animation: 'fadeIn 1s ease-out 2.5s both' }}>
            <Link
              href="/briefing"
              className="inline-block px-6 py-2.5 border-[1px] border-[#C07A56] text-[#C07A56] transition-all duration-300"
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

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes drawLine {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes drawLineCenter {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes fadeInLetterReveal {
          0% {
            opacity: 0;
            transform: translateY(10px);
            letter-spacing: 0px;
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            letter-spacing: 2px;
          }
        }

        @keyframes wipeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
            clip-path: inset(100% 0% 0% 0%);
          }
          50% {
            opacity: 0.5;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            clip-path: inset(0% 0% 0% 0%);
          }
        }
      `}</style>
    </section>
  )
}
