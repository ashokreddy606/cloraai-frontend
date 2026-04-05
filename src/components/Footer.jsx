import { Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms-and-conditions', label: 'Terms & Conditions' },
  { to: '/refund-policy', label: 'Refund Policy' },
]

function Footer() {
  return (
    <footer className="border-t border-[var(--stroke)] bg-[var(--surface)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 md:px-6">
        <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
          {links.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-3 py-2 text-sm font-semibold text-[var(--text-muted)] transition hover:bg-[var(--bg-soft)] hover:text-[var(--text)]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2 text-center md:text-left">
          <p className="font-display text-xl font-bold text-[var(--text)]">CloraAI</p>
          <p className="text-sm text-[var(--text-muted)]">Email: cloraai3425@gmail.com</p>
          <p className="text-xs text-[var(--text-muted)]">© {new Date().getFullYear()} CloraAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
