import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import SectionHeading from '../components/SectionHeading'
import { contactInfo } from '../data'
import { FaPaperPlane, FaCheck, FaExclamationTriangle } from 'react-icons/fa'

const Contact = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState({ from_name: '', from_email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      // EmailJS configuration
      // To set up: go to emailjs.com, create a free account, and get your:
      // 1. Service ID (from Email Services)
      // 2. Template ID (from Email Templates)
      // 3. Public Key (from Account > API Keys)
      // Then replace the placeholder values below
      await emailjs.sendForm(
        'service_portfolio',    // Replace with your EmailJS Service ID
        'template_contact',     // Replace with your EmailJS Template ID
        formRef.current,
        'YOUR_PUBLIC_KEY'       // Replace with your EmailJS Public Key
      )
      setStatus('sent')
      setForm({ from_name: '', from_email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="section-padding relative">
      <div className="container">
        <SectionHeading title="Get In Touch" subtitle="Contact" />
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="space-y-8"
          >
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's build something great together.
            </p>
            <div className="space-y-5">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100, damping: 15, delay: i * 0.08 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors duration-300">
                    <item.icon className="text-sm text-[var(--color-text-muted)] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-[10px] font-[family-name:var(--font-heading)] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-sm text-white hover:text-white/80 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-white">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="from_name" className="text-[10px] font-[family-name:var(--font-heading)] uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-2 block">Name</label>
                <input type="text" id="from_name" name="from_name" value={form.from_name} onChange={handleChange} required className="w-full bg-transparent border border-white/10 px-4 py-3 text-sm text-white focus:border-white/40 outline-none transition-colors" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="from_email" className="text-[10px] font-[family-name:var(--font-heading)] uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-2 block">Email</label>
                <input type="email" id="from_email" name="from_email" value={form.from_email} onChange={handleChange} required className="w-full bg-transparent border border-white/10 px-4 py-3 text-sm text-white focus:border-white/40 outline-none transition-colors" placeholder="your@email.com" />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="text-[10px] font-[family-name:var(--font-heading)] uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-2 block">Subject</label>
              <input type="text" id="subject" name="subject" value={form.subject} onChange={handleChange} required className="w-full bg-transparent border border-white/10 px-4 py-3 text-sm text-white focus:border-white/40 outline-none transition-colors" placeholder="What's this about?" />
            </div>
            <div>
              <label htmlFor="message" className="text-[10px] font-[family-name:var(--font-heading)] uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-2 block">Message</label>
              <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows={5} className="w-full bg-transparent border border-white/10 px-4 py-3 text-sm text-white focus:border-white/40 outline-none transition-colors resize-none" placeholder="Tell me about your project..." />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className={`btn-primary w-full justify-center group ${status === 'sending' ? 'opacity-70 cursor-wait' : ''}`}
            >
              <span className="flex items-center gap-2">
                {status === 'idle' && <><span>Send Message</span> <FaPaperPlane className="text-xs group-hover:translate-x-1 transition-transform" /></>}
                {status === 'sending' && <><span>Sending...</span></>}
                {status === 'sent' && <><FaCheck className="text-xs" /> <span>Message Sent!</span></>}
                {status === 'error' && <><FaExclamationTriangle className="text-xs" /> <span>Failed — Try Again</span></>}
              </span>
            </button>
            {status === 'sent' && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-green-400/80 text-center"
              >
                Thank you! I'll get back to you soon.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
