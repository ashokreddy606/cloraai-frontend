import { CheckCircle2 } from 'lucide-react'
import { openRazorpayCheckout } from '../utils/razorpayCheckout'

const plans = [
  {
    name: 'Basic Plan',
    price: '₹199/month',
    amount: 19900,
    description: 'Best for individual creators starting social automation.',
    features: [
      '1 social account connection',
      'AI auto-replies for comments',
      'Basic response rules',
      'Weekly activity insights',
    ],
    cta: 'Start Basic',
  },
  {
    name: 'Pro Plan',
    price: '₹499/month',
    amount: 49900,
    description: 'Designed for businesses and creators who need scale.',
    features: [
      'Up to 5 social account connections',
      'Advanced AI smart reply generation',
      'Priority processing and queue handling',
      'Detailed dashboard analytics',
    ],
    cta: 'Choose Pro',
    featured: true,
  },
]

function Pricing() {
  return (
    <section className="space-y-6">
      <div className="section-shell p-8 md:p-10">
        <h1 className="font-display text-4xl font-bold text-[var(--text)] md:text-5xl">Simple, Transparent Pricing</h1>
        <p className="mt-3 max-w-3xl text-[var(--text-muted)] md:text-lg">
          CloraAI plans are built to help creators and teams automate social engagement with predictable monthly costs.
          No hidden fees and no long-term lock-in.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`surface-card rounded-2xl p-7 ${plan.featured ? 'ring-2 ring-[var(--brand)]' : ''}`}
          >
            {plan.featured ? (
              <p className="mb-3 inline-flex rounded-full bg-[var(--brand-soft)] px-3 py-1 text-xs font-bold text-[var(--brand)]">
                Most Popular
              </p>
            ) : null}
            <h2 className="text-2xl font-bold text-[var(--text)]">{plan.name}</h2>
            <p className="mt-2 font-display text-4xl font-bold text-[var(--text)]">{plan.price}</p>
            <p className="mt-3 text-[var(--text-muted)]">{plan.description}</p>

            <ul className="mt-5 grid gap-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <CheckCircle2 size={16} className="mt-0.5 text-[var(--brand)]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => openRazorpayCheckout({ amount: plan.amount, planName: plan.name })}
              className={`mt-7 w-full rounded-full px-5 py-3 text-sm font-semibold transition ${
                plan.featured
                  ? 'bg-[var(--brand)] text-white hover:bg-[var(--brand-strong)]'
                  : 'border border-[var(--stroke)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--brand)] hover:text-[var(--brand)]'
              }`}
            >
              {plan.cta}
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Pricing
