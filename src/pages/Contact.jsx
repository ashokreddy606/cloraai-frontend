import { Mail } from 'lucide-react'
import { useState } from 'react'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="section-shell fade-up max-w-3xl p-8 md:p-12">
      <h1 className="font-display text-4xl font-bold text-[var(--text)] md:text-5xl">Contact Us</h1>
      <p className="mt-4 text-lg text-[var(--text-muted)]">For billing, support, or partnership inquiries: cloraai3425@gmail.com</p>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[var(--text-muted)]">Name</span>
          <input
            type="text"
            required
            className="w-full rounded-xl border border-[var(--stroke)] bg-[var(--surface)] px-4 py-3 text-[var(--text)] outline-none transition focus:border-[var(--brand)]"
            placeholder="Enter your name"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[var(--text-muted)]">Email</span>
          <input
            type="email"
            required
            className="w-full rounded-xl border border-[var(--stroke)] bg-[var(--surface)] px-4 py-3 text-[var(--text)] outline-none transition focus:border-[var(--brand)]"
            placeholder="Enter your email"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[var(--text-muted)]">Message</span>
          <textarea
            required
            rows="5"
            className="w-full rounded-xl border border-[var(--stroke)] bg-[var(--surface)] px-4 py-3 text-[var(--text)] outline-none transition focus:border-[var(--brand)]"
            placeholder="How can we help you?"
          />
        </label>

        <button
          type="submit"
          className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--brand-strong)]"
        >
          <Mail size={16} /> Send Message
        </button>
      </form>

      {submitted ? (
        <p className="mt-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
          Thank you. Your message has been received and our team will respond as soon as possible.
        </p>
      ) : null}
    </section>
  )
}

export default Contact
