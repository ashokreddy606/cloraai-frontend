import {
  AtSign,
  CheckCircle2,
  ShieldCheck,
  Gauge,
  MessageSquareReply,
  Play,
  Sparkles,
  Workflow,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { openRazorpayCheckout } from '../utils/razorpayCheckout'

const features = [
  {
    title: 'AI Auto Reply',
    description: 'CloraAI instantly responds to comments with context-aware responses that feel human.',
    icon: MessageSquareReply,
  },
  {
    title: 'Instagram & YouTube Integration',
    description: 'Connect your channels and manage engagement workflows from one place.',
    icon: AtSign,
    secondaryIcon: Play,
  },
  {
    title: 'Smart Response Generation',
    description: 'Generate replies based on tone, intent, and custom business rules.',
    icon: Sparkles,
  },
  {
    title: 'Dashboard Control Panel',
    description: 'Set reply rules, monitor activity, and optimize automation performance.',
    icon: Gauge,
  },
]

const steps = [
  {
    title: 'Connect account',
    description: 'Securely connect your Instagram and YouTube profiles in minutes.',
  },
  {
    title: 'Set rules',
    description: 'Define keywords, tone, and filters for exactly how replies should behave.',
  },
  {
    title: 'AI replies automatically',
    description: 'CloraAI continuously handles incoming comments while you focus on growth.',
  },
]

const plans = [
  {
    name: 'Basic Plan',
    price: '₹199/month',
    amount: 19900,
    description: 'Perfect for solo creators getting started with social automation.',
    points: ['1 social account', 'Basic AI response rules', 'Weekly insights'],
  },
  {
    name: 'Pro Plan',
    price: '₹499/month',
    amount: 49900,
    description: 'For growing teams that need advanced controls and larger volumes.',
    points: ['Up to 5 social accounts', 'Advanced smart reply workflows', 'Priority analytics dashboard'],
    featured: true,
  },
]

function Home() {
  return (
    <div className="space-y-10 md:space-y-14">
      <section className="section-shell overflow-hidden p-8 md:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="fade-up inline-flex items-center gap-2 rounded-full border border-[var(--stroke)] bg-[var(--surface)] px-3 py-1 text-sm font-semibold text-[var(--text-muted)]">
            <Workflow size={16} /> AI-Powered Social Automation
          </div>
          <h1 className="font-display fade-up mt-5 text-4xl font-bold leading-tight text-[var(--text)] md:text-6xl">
            Automate Your Social Media Replies with AI
          </h1>
          <p className="fade-up stagger-1 mt-4 text-lg text-[var(--text-muted)] md:text-xl">
            Save time and boost engagement with CloraAI
          </p>
          <div className="fade-up stagger-2 mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              className="rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--brand-strong)]"
            >
              Get Started
            </button>
            <button
              type="button"
              className="rounded-full border border-[var(--stroke)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--brand)]"
            >
              Explore Platform
            </button>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Features</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const SecondaryIcon = feature.secondaryIcon
            return (
              <article key={feature.title} className={`surface-card fade-up rounded-2xl p-6 ${index > 0 ? 'stagger-1' : ''}`}>
                <div className="mb-4 flex items-center gap-2 text-[var(--brand)]">
                  <Icon size={20} />
                  {SecondaryIcon ? <SecondaryIcon size={20} /> : null}
                </div>
                <h3 className="text-xl font-bold text-[var(--text)]">{feature.title}</h3>
                <p className="mt-2 text-[var(--text-muted)]">{feature.description}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="section-shell p-8 md:p-10">
        <h2 className="font-display text-3xl font-bold md:text-4xl">How It Works</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className={`surface-card fade-up rounded-2xl p-5 ${index === 1 ? 'stagger-1' : ''} ${index === 2 ? 'stagger-2' : ''}`}>
              <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Step {index + 1}</p>
              <h3 className="mt-2 text-lg font-bold text-[var(--text)]">{step.title}</h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Pricing</h2>
            <p className="mt-1 text-[var(--text-muted)]">Choose the plan that fits your scale and automation volume.</p>
          </div>
          <Link
            to="/pricing"
            className="rounded-full border border-[var(--stroke)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
          >
            Compare Full Pricing
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {plans.map((plan, index) => (
            <article
              key={plan.name}
              className={`surface-card fade-up rounded-2xl p-7 ${index === 1 ? 'stagger-1' : ''} ${plan.featured ? 'ring-2 ring-[var(--brand)]' : ''}`}
            >
              {plan.featured ? (
                <p className="mb-2 inline-flex rounded-full bg-[var(--brand-soft)] px-3 py-1 text-xs font-bold text-[var(--brand)]">
                  Most Popular
                </p>
              ) : null}
              <p className="text-sm font-semibold text-[var(--text-muted)]">{plan.name}</p>
              <p className="mt-2 font-display text-4xl font-bold text-[var(--text)]">{plan.price}</p>
              <p className="mt-3 text-[var(--text-muted)]">{plan.description}</p>
              <ul className="mt-4 grid gap-2">
                {plan.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                    <CheckCircle2 size={16} className="text-[var(--brand)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => openRazorpayCheckout({ amount: plan.amount, planName: plan.name })}
                className={`mt-6 rounded-full px-5 py-2 text-sm font-semibold transition ${
                  plan.featured
                    ? 'bg-[var(--brand)] text-white hover:bg-[var(--brand-strong)]'
                    : 'border border-[var(--stroke)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--brand)] hover:text-[var(--brand)]'
                }`}
              >
                {plan.featured ? 'Start Pro' : 'Start Basic'}
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell p-8 md:p-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Built for Production Teams</h2>
            <p className="mt-2 text-[var(--text-muted)]">
              CloraAI is designed for real-world operations with stable automation, policy controls, and measurable
              engagement outcomes.
            </p>
          </div>
          <ShieldCheck className="text-[var(--brand)]" size={34} />
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="surface-card rounded-2xl p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Reliability</p>
            <p className="mt-2 text-base font-bold text-[var(--text)]">Always-on reply automation</p>
          </div>
          <div className="surface-card rounded-2xl p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Control</p>
            <p className="mt-2 text-base font-bold text-[var(--text)]">Rule-based response governance</p>
          </div>
          <div className="surface-card rounded-2xl p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Visibility</p>
            <p className="mt-2 text-base font-bold text-[var(--text)]">Clear performance insights</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
