import { Moon, SunMedium } from 'lucide-react'

function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--stroke)] bg-[var(--surface)] text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--brand)]"
      aria-label="Toggle color theme"
    >
      {theme === 'dark' ? <SunMedium size={18} /> : <Moon size={18} />}
    </button>
  )
}

export default ThemeToggle
