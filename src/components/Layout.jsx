import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

function Layout() {
  const [theme, setTheme] = useState(() => localStorage.getItem('clora-theme') || 'light')
  const location = useLocation()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('clora-theme', theme)
  }, [theme])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar theme={theme} onToggleTheme={() => setTheme((state) => (state === 'dark' ? 'light' : 'dark'))} />
      <main className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
