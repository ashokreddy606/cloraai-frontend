import { Lock, Mail } from 'lucide-react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const VALID_EMAIL = 'cloraai3425@gmail.com'
const VALID_PASSWORD = '123456'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'

  function handleSubmit(event) {
    event.preventDefault()

    if (email.trim() === VALID_EMAIL && password === VALID_PASSWORD) {
      localStorage.setItem('isLoggedIn', 'true')
      navigate('/')
      return
    }

    alert('Invalid credentials')
  }

  if (isLoggedIn) {
    return <Navigate to="/" replace />
  }

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-5xl items-center justify-center">
      <div className="section-shell w-full max-w-md p-8 md:p-10">
        <h1 className="font-display text-center text-4xl font-bold text-[var(--text)]">Welcome Back</h1>
        <p className="mt-3 text-center text-sm text-[var(--text-muted)]">
          Sign in to access your CloraAI workspace and automation dashboard.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-[var(--text-muted)]">Work Email</span>
            <div className="flex items-center gap-2 rounded-xl border border-[var(--stroke)] bg-[var(--surface)] px-3">
              <Mail size={16} className="text-[var(--text-muted)]" />
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="name@company.com"
                className="w-full bg-transparent px-1 py-3 text-[var(--text)] outline-none"
              />
            </div>
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-semibold text-[var(--text-muted)]">Password</span>
            <div className="flex items-center gap-2 rounded-xl border border-[var(--stroke)] bg-[var(--surface)] px-3">
              <Lock size={16} className="text-[var(--text-muted)]" />
              <input
                type="password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter password"
                className="w-full bg-transparent px-1 py-3 text-[var(--text)] outline-none"
              />
            </div>
          </label>

          <button
            type="submit"
            className="mt-2 rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--brand-strong)]"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  )
}

export default Login
