'use client'

import { useState } from 'react'

export default function BriefingPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    message: ''
  })
  const [activeField, setActiveField] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <main className="bg-[#F7F5F2] min-h-screen">
      
      <section className="py-16 md:py-24 border-b border-[#EAE3DB]">
        <div className="max-w-7xl mx-auto px-6 xl:px-0">
          
          <h1 
            className="text-[50px] md:text-[70px] lg:text-[90px] leading-[0.95] text-[#332D2A] mb-6"
            style={{ fontFamily: 'var(--font-viscomo)' }}
          >
            Request a Private Briefing.
          </h1>

          <p 
            className="text-lg md:text-xl text-[#332D2A] leading-relaxed max-w-4xl"
            style={{ 
              fontFamily: 'var(--font-switzer)',
              fontSize: '20px'
            }}
          >
            Our strategy team will prepare a calibrated demonstration based on your specific challenges and goals.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 xl:px-0">
          
          <div className="hidden md:grid md:grid-cols-2 md:gap-16 lg:gap-24">
            
            <div className="sticky top-32 h-fit">
              
              <div className="mb-12">
                <h2 
                  className="font-semibold text-[#332D2A] mb-6"
                  style={{ 
                    fontFamily: 'var(--font-switzer)',
                    fontSize: '24px'
                  }}
                >
                  What to Expect.
                </h2>
                
                <ul className="space-y-4">
                  {[
                    'A one-on-one consultation with a senior strategist.',
                    'A guided tour of the platform, calibrated to your brand\'s vertical.',
                    'A collaborative discussion of your current data infrastructure.',
                    'A confidential, bespoke proposal.'
                  ].map((item, index) => (
                    <li 
                      key={index}
                      className="text-[#332D2A] leading-relaxed flex items-start"
                      style={{ 
                        fontFamily: 'var(--font-switzer)',
                        fontSize: '18px'
                      }}
                    >
                      <span className="text-[#C07A56] mr-3 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-[#EAE3DB]">
                <p 
                  className="text-[#332D2A] leading-relaxed mb-4"
                  style={{ 
                    fontFamily: 'var(--font-viscomo)',
                    fontSize: '28px'
                  }}
                >
                  "The briefing process itself was insightful. We identified two areas of opportunity before we even signed on."
                </p>
                <p 
                  className="font-semibold text-[#332D2A]"
                  style={{ fontFamily: 'var(--font-switzer)' }}
                >
                  COO, Global Fashion House
                </p>
              </div>
            </div>

            <div>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  <div>
                    <label 
                      htmlFor="firstName"
                      className="block mb-2 text-[#332D2A]"
                      style={{ 
                        fontFamily: 'var(--font-switzer)',
                        fontWeight: 500,
                        fontSize: '16px'
                      }}
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField('firstName')}
                      onBlur={() => setActiveField(null)}
                      className="w-full pb-2 bg-transparent text-[#332D2A] outline-none transition-all duration-300"
                      style={{ 
                        fontFamily: 'var(--font-switzer)',
                        fontSize: '18px',
                        borderBottom: `1px solid ${activeField === 'firstName' ? '#C07A56' : '#EAE3DB'}`
                      }}
                      required
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="lastName"
                      className="block mb-2 text-[#332D2A]"
                      style={{ 
                        fontFamily: 'var(--font-switzer)',
                        fontWeight: 500,
                        fontSize: '16px'
                      }}
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField('lastName')}
                      onBlur={() => setActiveField(null)}
                      className="w-full pb-2 bg-transparent text-[#332D2A] outline-none transition-all duration-300"
                      style={{ 
                        fontFamily: 'var(--font-switzer)',
                        fontSize: '18px',
                        borderBottom: `1px solid ${activeField === 'lastName' ? '#C07A56' : '#EAE3DB'}`
                      }}
                      required
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="email"
                      className="block mb-2 text-[#332D2A]"
                      style={{ 
                        fontFamily: 'var(--font-switzer)',
                        fontWeight: 500,
                        fontSize: '16px'
                      }}
                    >
                      Your Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField('email')}
                      onBlur={() => setActiveField(null)}
                      className="w-full pb-2 bg-transparent text-[#332D2A] outline-none transition-all duration-300"
                      style={{ 
                        fontFamily: 'var(--font-switzer)',
                        fontSize: '18px',
                        borderBottom: `1px solid ${activeField === 'email' ? '#C07A56' : '#EAE3DB'}`
                      }}
                      required
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="company"
                      className="block mb-2 text-[#332D2A]"
                      style={{ 
                        fontFamily: 'var(--font-switzer)',
                        fontWeight: 500,
                        fontSize: '16px'
                      }}
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField('company')}
                      onBlur={() => setActiveField(null)}
                      className="w-full pb-2 bg-transparent text-[#332D2A] outline-none transition-all duration-300"
                      style={{ 
                        fontFamily: 'var(--font-switzer)',
                        fontSize: '18px',
                        borderBottom: `1px solid ${activeField === 'company' ? '#C07A56' : '#EAE3DB'}`
                      }}
                      required
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="jobTitle"
                      className="block mb-2 text-[#332D2A]"
                      style={{ 
                        fontFamily: 'var(--font-switzer)',
                        fontWeight: 500,
                        fontSize: '16px'
                      }}
                    >
                      Job Title
                    </label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField('jobTitle')}
                      onBlur={() => setActiveField(null)}
                      className="w-full pb-2 bg-transparent text-[#332D2A] outline-none transition-all duration-300"
                      style={{ 
                        fontFamily: 'var(--font-switzer)',
                        fontSize: '18px',
                        borderBottom: `1px solid ${activeField === 'jobTitle' ? '#C07A56' : '#EAE3DB'}`
                      }}
                      required
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="message"
                      className="block mb-2 text-[#332D2A]"
                      style={{ 
                        fontFamily: 'var(--font-switzer)',
                        fontWeight: 500,
                        fontSize: '16px'
                      }}
                    >
                      How can we help?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField('message')}
                      onBlur={() => setActiveField(null)}
                      rows={4}
                      className="w-full pb-2 bg-transparent text-[#332D2A] outline-none transition-all duration-300 resize-none"
                      style={{ 
                        fontFamily: 'var(--font-switzer)',
                        fontSize: '18px',
                        borderBottom: `1px solid ${activeField === 'message' ? '#C07A56' : '#EAE3DB'}`
                      }}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#C07A56] text-[#F7F5F2] transition-all duration-300 hover:bg-[#D48660]"
                    style={{ 
                      fontFamily: 'var(--font-switzer)',
                      fontWeight: 600,
                      fontSize: '18px',
                      letterSpacing: '0.5px'
                    }}
                  >
                    Submit Request
                  </button>
                </form>
              ) : (
                <div className="py-12">
                  <h2 
                    className="text-[#332D2A] mb-6"
                    style={{ 
                      fontFamily: 'var(--font-viscomo)',
                      fontSize: '36px'
                    }}
                  >
                    Thank you. Your request is confirmed.
                  </h2>
                  <p 
                    className="text-[#332D2A] leading-relaxed"
                    style={{ 
                      fontFamily: 'var(--font-switzer)',
                      fontSize: '18px'
                    }}
                  >
                    Our team has received your request and will be in contact within one business day to schedule your private consultation.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="md:hidden space-y-12">
            
            <div>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  <div>
                    <label 
                      htmlFor="firstName-mobile"
                      className="block mb-2 text-[#332D2A]"
                      style={{ 
                        fontFamily: 'var(--font-switzer)',
                        fontWeight: 500,
                        fontSize: '16px'
                      }}
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName-mobile"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField('firstName')}
                      onBlur={() => setActiveField(null)}
                      className="w-full pb-2 bg-transparent text-[#332D2A] outline-none transition-all duration-300"
                      style={{ 
                        fontFamily: 'var(--font-switzer)',
                        fontSize: '18px',
                        borderBottom: `1px solid ${activeField === 'firstName' ? '#C07A56' : '#EAE3DB'}`
                      }}
                      required
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="lastName-mobile"
                      className="block mb-2 text-[#332D2A]"
                      style={{ 
                        fontFamily: 'var(--font-switzer)',
                        fontWeight: 500,
                        fontSize: '16px'
                      }}
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName-mobile"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField('lastName')}
                      onBlur={() => setActiveField(null)}
                      className="w-full pb-2 bg-transparent text-[#332D2A] outline-none transition-all duration-300"
                      style={{ 
                        fontFamily: 'var(--font-switzer)',
                        fontSize: '18px',
                        borderBottom: `1px solid ${activeField === 'lastName' ? '#C07A56' : '#EAE3DB'}`
                      }}
                      required
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="email-mobile"
                      className="block mb-2 text-[#332D2A]"
                      style={{ 
                        fontFamily: 'var(--font-switzer)',
                        fontWeight: 500,
                        fontSize: '16px'
                      }}
                    >
                      Your Work Email
                    </label>
                    <input
                      type="email"
                      id="email-mobile"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField('email')}
                      onBlur={() => setActiveField(null)}
                      className="w-full pb-2 bg-transparent text-[#332D2A] outline-none transition-all duration-300"
                      style={{ 
                        fontFamily: 'var(--font-switzer)',
                        fontSize: '18px',
                        borderBottom: `1px solid ${activeField === 'email' ? '#C07A56' : '#EAE3DB'}`
                      }}
                      required
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="company-mobile"
                      className="block mb-2 text-[#332D2A]"
                      style={{ 
                        fontFamily: 'var(--font-switzer)',
                        fontWeight: 500,
                        fontSize: '16px'
                      }}
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company-mobile"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField('company')}
                      onBlur={() => setActiveField(null)}
                      className="w-full pb-2 bg-transparent text-[#332D2A] outline-none transition-all duration-300"
                      style={{ 
                        fontFamily: 'var(--font-switzer)',
                        fontSize: '18px',
                        borderBottom: `1px solid ${activeField === 'company' ? '#C07A56' : '#EAE3DB'}`
                      }}
                      required
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="jobTitle-mobile"
                      className="block mb-2 text-[#332D2A]"
                      style={{ 
                        fontFamily: 'var(--font-switzer)',
                        fontWeight: 500,
                        fontSize: '16px'
                      }}
                    >
                      Job Title
                    </label>
                    <input
                      type="text"
                      id="jobTitle-mobile"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField('jobTitle')}
                      onBlur={() => setActiveField(null)}
                      className="w-full pb-2 bg-transparent text-[#332D2A] outline-none transition-all duration-300"
                      style={{ 
                        fontFamily: 'var(--font-switzer)',
                        fontSize: '18px',
                        borderBottom: `1px solid ${activeField === 'jobTitle' ? '#C07A56' : '#EAE3DB'}`
                      }}
                      required
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="message-mobile"
                      className="block mb-2 text-[#332D2A]"
                      style={{ 
                        fontFamily: 'var(--font-switzer)',
                        fontWeight: 500,
                        fontSize: '16px'
                      }}
                    >
                      How can we help?
                    </label>
                    <textarea
                      id="message-mobile"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField('message')}
                      onBlur={() => setActiveField(null)}
                      rows={4}
                      className="w-full pb-2 bg-transparent text-[#332D2A] outline-none transition-all duration-300 resize-none"
                      style={{ 
                        fontFamily: 'var(--font-switzer)',
                        fontSize: '18px',
                        borderBottom: `1px solid ${activeField === 'message' ? '#C07A56' : '#EAE3DB'}`
                      }}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#C07A56] text-[#F7F5F2] transition-all duration-300 hover:bg-[#D48660]"
                    style={{ 
                      fontFamily: 'var(--font-switzer)',
                      fontWeight: 600,
                      fontSize: '18px',
                      letterSpacing: '0.5px'
                    }}
                  >
                    Submit Request
                  </button>
                </form>
              ) : (
                <div className="py-12">
                  <h2 
                    className="text-[#332D2A] mb-6"
                    style={{ 
                      fontFamily: 'var(--font-viscomo)',
                      fontSize: '36px'
                    }}
                  >
                    Thank you. Your request is confirmed.
                  </h2>
                  <p 
                    className="text-[#332D2A] leading-relaxed"
                    style={{ 
                      fontFamily: 'var(--font-switzer)',
                      fontSize: '18px'
                    }}
                  >
                    Our team has received your request and will be in contact within one business day to schedule your private consultation.
                  </p>
                </div>
              )}
            </div>

            <div className="pt-8 border-t border-[#EAE3DB]">
              
              <div className="mb-8">
                <h2 
                  className="font-semibold text-[#332D2A] mb-6"
                  style={{ 
                    fontFamily: 'var(--font-switzer)',
                    fontSize: '24px'
                  }}
                >
                  What to Expect.
                </h2>
                
                <ul className="space-y-4">
                  {[
                    'A one-on-one consultation with a senior strategist.',
                    'A guided tour of the platform, calibrated to your brand\'s vertical.',
                    'A collaborative discussion of your current data infrastructure.',
                    'A confidential, bespoke proposal.'
                  ].map((item, index) => (
                    <li 
                      key={index}
                      className="text-[#332D2A] leading-relaxed flex items-start"
                      style={{ 
                        fontFamily: 'var(--font-switzer)',
                        fontSize: '18px'
                      }}
                    >
                      <span className="text-[#C07A56] mr-3 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-[#EAE3DB]">
                <p 
                  className="text-[#332D2A] leading-relaxed mb-4"
                  style={{ 
                    fontFamily: 'var(--font-viscomo)',
                    fontSize: '28px'
                  }}
                >
                  "The briefing process itself was insightful. We identified two areas of opportunity before we even signed on."
                </p>
                <p 
                  className="font-semibold text-[#332D2A]"
                  style={{ fontFamily: 'var(--font-switzer)' }}
                >
                  COO, Global Fashion House
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

