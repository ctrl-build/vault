'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function TheChallenge() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const elementTop = rect.top
        const elementHeight = rect.height
        
        const progress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight)))
        setScrollProgress(progress)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getParallaxTransform = (speed: number) => {
    const translateY = scrollProgress * 200 * speed
    return `translateY(${translateY}px)`
  }

  return (
    <section 
      ref={sectionRef}
      className="relative bg-[#F7F5F2] py-32 md:py-40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-0 md:px-6 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          
          <div 
            className="relative px-6 md:px-0 order-1"
            style={{
              animation: 'slideInRight 1s ease-out 0.2s both',
              transform: getParallaxTransform(0.2),
            }}
          >
            <h2 
              className="text-[40px] md:text-[80px] lg:text-[100px] leading-[0.95] text-[#332D2A] mb-8 md:mb-4"
              style={{ fontFamily: 'var(--font-viscomo)' }}
            >
              Complexity is the enemy of luxury.
            </h2>
          </div>

          <div 
            className="relative mt-4 mb-8 md:mt-16 md:mb-0 order-2"
            style={{
              animation: 'fadeIn 1s ease-out 0.4s both',
              transform: getParallaxTransform(-0.15),
            }}
          >
            <div className="aspect-[4/5] md:aspect-[4/5] bg-[#EAE3DB] overflow-hidden relative -mx-6 md:mx-0">
              <Image
                src="/assets/images/68acdc70b486ec00160c769e_charlota-blunarova-r5xHI_H44aM-unsplash-p-1600.jpg"
                alt="Fashion sketches"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div 
            className="relative mt-12 md:mt-8 md:-mt-8 order-4 md:order-3"
            style={{
              animation: 'fadeIn 1s ease-out 0.6s both',
              transform: getParallaxTransform(-0.2),
            }}
          >
            <div className="aspect-[5/4] bg-[#EAE3DB] overflow-hidden relative -mx-6 md:mx-0">
              <Image
                src="/assets/images/68acdbeab43201c94bbf5ed3_IMG_8758.jpg"
                alt="Handwritten stylist notes"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div 
            className="relative mt-6 mb-8 md:mt-20 md:mb-0 px-8 md:px-0 order-3 md:order-4"
            style={{
              animation: 'slideInFromLeft 1s ease-out 0.8s both',
              transform: getParallaxTransform(0.25),
            }}
          >
            <p 
              className="text-base md:text-lg lg:text-xl text-[#332D2A] leading-relaxed max-w-xl md:max-w-xl"
              style={{ fontFamily: 'var(--font-switzer)' }}
            >
              Siloed client books. Disconnected inventory systems. Guesswork in merchandising. The tools that run luxury retail are rarely as refined as the product itself, leading to missed opportunities and margin erosion.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}

