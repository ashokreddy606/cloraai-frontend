import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms-and-conditions', label: 'Terms & Conditions' },
  { to: '/refund-policy', label: 'Refund Policy' },
]

function navClass({ isActive }) {
  return `rounded-full px-3 py-2 text-sm font-semibold transition ${
    isActive
      ? 'bg-[var(--brand-soft)] text-[var(--brand)]'
      : 'text-[var(--text-muted)] hover:bg-[var(--bg-soft)] hover:text-[var(--text)]'
  }`
}

function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  function handleLogout() {
    localStorage.removeItem('isLoggedIn')
    navigate('/login')
  }

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--stroke)] bg-[color:color-mix(in_oklab,var(--bg)_85%,white)]/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link to="/" className="font-display text-2xl font-bold text-[var(--text)]">
          CloraAI
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleLogout}
            className="hidden rounded-full border border-[var(--stroke)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--brand)] hover:text-[var(--brand)] md:inline-flex"
          >
            Logout
          </button>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setMenuOpen((state) => !state)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--stroke)] bg-[var(--surface)] text-[var(--text)] lg:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-[var(--stroke)] bg-[var(--surface)] px-4 py-3 lg:hidden">
          <nav className="grid gap-2">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navClass}>
                {item.label}
              </NavLink>
            ))}
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-full px-3 py-2 text-left text-sm font-semibold text-[var(--text-muted)] transition hover:bg-[var(--bg-soft)] hover:text-[var(--text)]"
            >
              Logout
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
