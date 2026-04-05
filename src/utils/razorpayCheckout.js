const RAZORPAY_SCRIPT_URL = 'https://checkout.razorpay.com/v1/checkout.js'

function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true)
      return
    }

    const script = document.createElement('script')
    script.src = RAZORPAY_SCRIPT_URL
    script.async = true
    script.onload = () => resolve(true)
    script.onerror = () => resolve(false)
    document.body.appendChild(script)
  })
}

export async function openRazorpayCheckout({
  amount,
  planName,
  prefillEmail = 'cloraai3425@gmail.com',
  prefillContact = '9876543210',
}) {
  const scriptLoaded = await loadRazorpayScript()

  if (!scriptLoaded) {
    alert('Unable to load Razorpay. Please check your internet connection and try again.')
    return
  }

  const key = import.meta.env.VITE_RAZORPAY_KEY_ID

  if (!key || key === 'YOUR_KEY_ID') {
    alert('Razorpay key is missing. Set VITE_RAZORPAY_KEY_ID in your deployment environment and redeploy.')
    return
  }

  const options = {
    key,
    amount,
    currency: 'INR',
    name: 'Clora AI',
    description: planName,
    prefill: {
      email: prefillEmail,
      contact: prefillContact,
    },
    theme: {
      color: '#0f6fde',
    },
    handler() {
      alert('Payment flow opened successfully. This is test mode checkout.')
    },
  }

  const razorpay = new window.Razorpay(options)
  razorpay.on('payment.failed', (response) => {
    const message = response?.error?.description || 'Payment failed. Please retry with a valid test payment method.'
    alert(message)
  })
  razorpay.open()
}
