import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

import { FaArrowRight, FaCheck, FaExclamationTriangle } from 'react-icons/fa'

const Contact = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState({ from_name: '', from_email: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    const subject = `Contact from Able Sunny Portfolio: ${form.from_name}`
    const body = `Name: ${form.from_name}\nEmail: ${form.from_email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    
    window.location.href = `mailto:ablesunnyofficial@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    setForm({ from_name: '', from_email: '', phone: '', message: '' })
    setStatus('sent')
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-[#0A0A0A] overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24">
          
          {/* Left Column: Typography & Graphic */}
          <div className="flex flex-col justify-between relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              <h2 className="text-[clamp(4.5rem,12vw,9rem)] font-[family-name:var(--font-display)] leading-[0.85] text-white uppercase tracking-tight">
                Let's<br />
                Get In<br />
                Touch
              </h2>
            </motion.div>

            {/* Abstract Graphic */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 right-0 md:right-10 lg:-right-10 pointer-events-none mix-blend-difference"
            >
              <svg width="200" height="150" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="25" r="22" fill="white" />
                <path d="M 20 60 L 180 60 A 80 80 0 0 1 20 60 Z" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
              </svg>
            </motion.div>
          </div>

          {/* Right Column: Form & Contact Details */}
          <div className="flex flex-col justify-between">
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="space-y-12">
                {/* Full Name */}
                <div className="relative group">
                  <label className="text-[10px] font-[family-name:var(--font-body)] font-semibold uppercase tracking-[0.2em] text-white/50 mb-3 block">
                    Full Name <span className="float-right text-white/30">*</span>
                  </label>
                  <input type="text" name="from_name" value={form.from_name} onChange={handleChange} required className="w-full bg-transparent border-b border-white/20 pb-4 text-sm text-white focus:border-white outline-none transition-colors" />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-8">
                  <div className="relative group">
                    <label className="text-[10px] font-[family-name:var(--font-body)] font-semibold uppercase tracking-[0.2em] text-white/50 mb-3 block">
                      Email <span className="float-right text-white/30">*</span>
                    </label>
                    <input type="email" name="from_email" value={form.from_email} onChange={handleChange} required className="w-full bg-transparent border-b border-white/20 pb-4 text-sm text-white focus:border-white outline-none transition-colors" />
                  </div>
                  <div className="relative group">
                    <label className="text-[10px] font-[family-name:var(--font-body)] font-semibold uppercase tracking-[0.2em] text-white/50 mb-3 block">
                      Phone <span className="float-right text-white/30">*</span>
                    </label>
                    <input type="text" name="phone" value={form.phone} onChange={handleChange} required className="w-full bg-transparent border-b border-white/20 pb-4 text-sm text-white focus:border-white outline-none transition-colors" />
                  </div>
                </div>

                {/* Message */}
                <div className="relative group">
                  <label className="text-[10px] font-[family-name:var(--font-body)] font-semibold uppercase tracking-[0.2em] text-white/50 mb-3 block">
                    Message <span className="float-right text-white/30">*</span>
                  </label>
                  <input type="text" name="message" value={form.message} onChange={handleChange} required className="w-full bg-transparent border-b border-white/20 pb-4 text-sm text-white focus:border-white outline-none transition-colors" />
                </div>

                {/* Submit Arrow */}
                <div className="flex items-center justify-between pt-4">
                  <div>
                    {status === 'sent' && (
                      <div className="flex flex-col gap-1.5">
                        <p className="text-xs text-white/90 font-[family-name:var(--font-body)] font-semibold tracking-widest uppercase flex items-center gap-2">
                          <FaCheck /> Opening Email App...
                        </p>
                        <p className="text-[9px] text-white/40 tracking-wider">
                          If it didn't open, email ablesunnyofficial@gmail.com
                        </p>
                      </div>
                    )}
                    {status === 'error' && <p className="text-xs text-red-400/80 font-[family-name:var(--font-body)] font-semibold tracking-widest uppercase flex items-center gap-2"><FaExclamationTriangle /> Failed to open</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={`text-2xl md:text-3xl text-white hover:text-white/60 transition-colors ${status === 'sending' ? 'opacity-50 animate-pulse' : ''}`}
                  >
                    <FaArrowRight className="font-light" />
                  </button>
                </div>
              </div>
            </motion.form>

            {/* Contact Details */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-24 pt-12 border-t border-white/10 grid grid-cols-2 gap-8 text-[9px] md:text-[10px] font-[family-name:var(--font-body)] font-semibold uppercase tracking-[0.2em] text-white/40"
            >
              <div>
                <p className="text-white mb-4">Location</p>
                <p className="leading-relaxed">Iritty, Kannur<br/>Kerala, India</p>
              </div>
              <div>
                <p className="text-white mb-4">Direct Contact</p>
                <p className="leading-relaxed">ablesunnyofficial@gmail.com<br/>+91 9526815773</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact

