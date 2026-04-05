import { Link, useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()

  function handleLogout() {
    localStorage.removeItem('isLoggedIn')
    navigate('/login')
  }

  const stats = [
    { label: 'Instagram Status', value: 'Connected' },
    { label: 'Auto Replies', value: 'Active' },
    { label: 'Responses Sent', value: '120' },
    { label: 'Plan', value: 'Pro Plan' },
  ]

  return (
    <section className="space-y-6">
      <div className="section-shell p-8 md:p-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="font-display text-4xl font-bold text-[var(--text)] md:text-5xl">CloraAI Dashboard</h1>
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-full border border-[var(--stroke)] bg-[var(--surface)] px-5 py-2 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
          >
            Logout
          </button>
        </div>
        <p className="mt-3 text-[var(--text-muted)]">
          Your automation status is healthy and active across connected channels.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {stats.map((item) => (
          <article key={item.label} className="surface-card rounded-2xl p-6">
            <p className="text-sm font-semibold text-[var(--text-muted)]">{item.label}</p>
            <p className="mt-2 text-2xl font-bold text-[var(--text)]">{item.value}</p>
          </article>
        ))}
      </div>

      <Link
        to="/"
        className="inline-flex rounded-full bg-[var(--brand)] px-5 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--brand-strong)]"
      >
        Back to Home
      </Link>
    </section>
  )
}

export default Dashboard
