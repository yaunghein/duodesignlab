import React, { useState, useCallback, useRef } from 'react'
import Image from 'next/image'

// third-parties
import { motion, AnimatePresence } from 'framer-motion'
import ReCAPTCHA from 'react-google-recaptcha'

// stores
import useCursorStore from '$stores/CursorStore'

// hooks
import useClickOutside from '$hooks/useClickOutside'

const defaultInputs = {
  name: '',
  email: '',
  company: '',
  brief: '',
  budget: '',
}

interface CurrencyType {
  type: 'MMK' | 'USD'
  flag: string
}

const currencies: CurrencyType[] = [
  { type: 'MMK', flag: 'https://flagcdn.com/mm.svg' },
  { type: 'USD', flag: 'https://flagcdn.com/us.svg' },
]

const ContactForm: React.FC = () => {
  const [inputs, setInputs] = useState(defaultInputs)
  const [currency, setCurrency] = useState<CurrencyType>(currencies[1])
  const [isCurrencyMenuOpen, setIsCurrencyMenuOpen] = useState(false)
  const [errors, setErrors] = useState({} as typeof defaultInputs)
  const [serverError, setServerError] = useState('')
  const [status, setStatus] = useState({ isSubmitting: false, isSubmitted: false, senderName: '' })
  const { changeCursorType } = useCursorStore()
  const currencyMenuRef = useClickOutside(() => setIsCurrencyMenuOpen(false))
  const recaptchaRef = useRef<any>()

  const resetErrorsAndStatus = () => {
    setErrors({} as typeof defaultInputs)
    setServerError('')
    setStatus({ isSubmitting: false, isSubmitted: false, senderName: '' })
  }

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    resetErrorsAndStatus()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }, [])

  const handleCurrencyChange = useCallback((e: React.MouseEvent) => {
    const button = e.target as HTMLElement
    setCurrency(currencies.find((currency) => currency.type === button.textContent) as CurrencyType)
    setIsCurrencyMenuOpen(false)
  }, [])

  const validateInputs = useCallback(() => {
    let errors = {} as typeof defaultInputs

    // check empty value
    for (let key of Object.keys(inputs)) {
      if (inputs[key as keyof typeof inputs].trim() === '') {
        errors[key as keyof typeof inputs] = `Please provide ${key}.`
      }
    }

    // check email format
    const mailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const isMailFormatValid = inputs.email?.match(mailRegex)
    if (!isMailFormatValid && !errors.email) errors.email = 'Please provide valid email.'
    setErrors(errors)

    // if the errors obj is empty, return true(valid). OR return false
    return Object.keys(errors).length === 0
  }, [inputs])

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      resetErrorsAndStatus()

      const isValid = validateInputs()
      if (isValid) {
        setStatus((prev) => ({ ...prev, isSubmitting: true }))

        const formData = {
          ...inputs,
          budget: `${inputs.budget} ${currency.type}`,
          recaptureValue: await recaptchaRef.current.executeAsync(),
        }

        const response = await fetch('/api/submit-brief', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: { 'content-type': 'application/json' },
        })

        if (response.ok) {
          const data = await response.json()
          setInputs(defaultInputs)
          setStatus({ isSubmitting: false, isSubmitted: true, senderName: data.name })
          recaptchaRef.current?.reset()
        } else {
          const error = await response.json()
          setServerError(error.message)
          setStatus((prev) => ({ ...prev, isSubmitting: false }))
        }
      }
    },
    [inputs, validateInputs, currency]
  )

  return (
    <form className="grid gap-5 lg:gap-12" onSubmit={handleSubmit}>
      <motion.div
        className="grid gap-2 lg:gap-5"
        onMouseEnter={() => changeCursorType('hover_brand')}
        onMouseLeave={() => changeCursorType('normal_brand')}
      >
        <label htmlFor="name" className="font-medium text-body text-ddl_dark">
          Name
          <span className="text-xl text-red-600">*</span>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="px-6 pb-[0.1rem] lg:pb-[0.3rem] font-medium  border-[0.175rem] rounded-full outline-none text-ddl_dark border-ddl_dark h-12 sm:h-14 text-body transition-colors focus:bg-ddl_brand focus:bg-opacity-[0.03]"
          value={inputs.name}
          onChange={handleInputChange}
        />
        {errors.name && <span className="-mt-1 text-base text-red-600 sm:-mt-2 sm:text-xl">{errors.name}</span>}
      </motion.div>

      <motion.div
        className="grid gap-2 lg:gap-5"
        onMouseEnter={() => changeCursorType('hover_brand')}
        onMouseLeave={() => changeCursorType('normal_brand')}
      >
        <label htmlFor="email" className="font-medium text-body text-ddl_dark">
          Email
          <span className="text-xl text-red-600">*</span>
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="px-6 pb-[0.1rem] lg:pb-[0.3rem] font-medium border-[0.175rem] rounded-full outline-none text-ddl_dark border-ddl_dark h-12 sm:h-14 text-body transition-colors focus:bg-ddl_brand focus:bg-opacity-[0.03]"
          value={inputs.email}
          onChange={handleInputChange}
        />
        {errors.email && <span className="-mt-1 text-base text-red-600 sm:-mt-2 sm:text-xl">{errors.email}</span>}
      </motion.div>

      <motion.div
        className="grid gap-2 lg:gap-5"
        onMouseEnter={() => changeCursorType('hover_brand')}
        onMouseLeave={() => changeCursorType('normal_brand')}
      >
        <label htmlFor="company" className="font-medium text-body text-ddl_dark">
          Company Name
          <span className="text-xl text-red-600">*</span>
        </label>
        <input
          type="text"
          name="company"
          id="company"
          className="px-6 pb-[0.1rem] lg:pb-[0.3rem] font-medium border-[0.175rem] rounded-full outline-none text-ddl_dark border-ddl_dark h-12 sm:h-14 text-body transition-colors focus:bg-ddl_brand focus:bg-opacity-[0.03]"
          value={inputs.company}
          onChange={handleInputChange}
        />
        {errors.company && <span className="-mt-1 text-base text-red-600 sm:-mt-2 sm:text-xl">{errors.company}</span>}
      </motion.div>

      <motion.div
        className="grid gap-2 lg:gap-5"
        onMouseEnter={() => changeCursorType('hover_brand')}
        onMouseLeave={() => changeCursorType('normal_brand')}
      >
        <label htmlFor="brief" className="font-medium text-body text-ddl_dark">
          Project Brief
          <span className="text-xl text-red-600">*</span>
        </label>
        <textarea
          name="brief"
          id="brief"
          className="resize-none px-6 pb-[0.1rem] lg:pb-[0.3rem] pt-2 font-medium border-[0.175rem] outline-none rounded-3xl text-ddl_dark border-ddl_dark h-60 text-body transition-colors focus:bg-ddl_brand focus:bg-opacity-[0.03]"
          value={inputs.brief}
          onChange={handleInputChange}
        />
        {errors.brief && <span className="-mt-1 text-base text-red-600 sm:-mt-2 sm:text-xl">{errors.brief}</span>}
      </motion.div>

      <motion.div
        className="flex flex-wrap items-center gap-2 lg:gap-5"
        onMouseEnter={() => changeCursorType('hover_brand')}
        onMouseLeave={() => changeCursorType('normal_brand')}
      >
        <div className="flex w-full">
          <label htmlFor="budget" className="w-3/4 font-medium text-body text-ddl_dark">
            Budget
            <span className="text-xl text-red-600">*</span>
          </label>
          <label htmlFor="budget" className="w-1/4 font-medium text-body text-ddl_dark">
            Currency
          </label>
        </div>
        <div ref={currencyMenuRef} className="relative flex w-full">
          <input
            type="text"
            name="budget"
            id="budget"
            className="w-3/4 px-6 pb-[0.1rem] lg:pb-[0.3rem] font-medium transition border-[0.175rem] rounded-full rounded-r-none outline-none text-ddl_dark border-ddl_dark h-12 sm:h-14 text-body focus:border-ddl_brand"
            value={inputs.budget}
            onChange={handleInputChange}
          />
          <div
            role="button"
            className="w-1/4 select-none lg:-mb-[0.5px] grid place-items-center lg:pb-[0.2rem] font-medium transition border-[0.175rem] border-l-0 rounded-full rounded-l-none outline-none text-ddl_dark border-ddl_dark h-12 sm:h-14 text-body focus:border-ddl_brand"
            onClick={() => setIsCurrencyMenuOpen(!isCurrencyMenuOpen)}
          >
            {currency.type}
          </div>
          <AnimatePresence>
            {isCurrencyMenuOpen && (
              <motion.div
                className="absolute z-10 right-0 grid w-36 xl:w-1/4 gap-2 sm:gap-4 p-4 sm:p-5 bg-white border-[0.175rem] bottom-[3.8rem] sm:bottom-[unset] sm:top-16 rounded-3xl border-ddl_dark"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.1, ease: 'easeOut' } }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.1, ease: 'easeOut' } }}
              >
                {currencies.map((currency) => (
                  <motion.div
                    role="button"
                    key={currency.type}
                    className="flex items-center gap-3 text-lg sm:gap-4 sm:text-2xl text-ddl_dark"
                    whileHover={{ x: 6, transition: { ease: 'easeOut', duration: 0.2 } }}
                    onClick={handleCurrencyChange}
                  >
                    <Image alt={currency.type} src={currency.flag} width={32} height={22} className="overflow-hidden rounded" />
                    {currency.type}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {errors.budget && <span className="w-full -mt-1 text-base text-red-600 sm:-mt-2 sm:text-xl">{errors.budget}</span>}
      </motion.div>

      <div className="flex flex-col items-end justify-between lg:items-center lg:flex-row">
        <motion.button
          onMouseEnter={() => changeCursorType('hover_brand')}
          onMouseLeave={() => changeCursorType('normal_brand')}
          className="px-12 py-3 mt-2 font-medium transition-colors border-[0.175rem] rounded-full whitespace-nowrap lg:mt-0 text-ddl_offwhite bg-ddl_dark text-body border-ddl_dark"
          disabled={status.isSubmitting}
        >
          {status.isSubmitting ? 'Sending...' : 'Send Brief'}
        </motion.button>

        <p className="max-w-xs mt-4 text-xs text-right opacity-50 lg:mt-0 lg:max-w-sm lg:text-base text-ddl_dark">
          This form is protected by reCAPTCHA and the Google
          <a href="https://policies.google.com/privacy">Privacy Policy</a> and
          <a href="https://policies.google.com/terms"> Terms of Service</a> apply.
        </p>
      </div>

      {serverError && <span className="block -mt-1 text-base text-right text-red-600 sm:text-xl lg:text-left lg:-mt-5">{serverError}</span>}

      {status.isSubmitted && (
        <span className="block -mt-1 text-base text-right sm:text-xl lg:text-left lg:-mt-5 text-ddl_brand">
          {`Thanks, ${status.senderName.split(' ')[0]}! You submission has been received.`}
        </span>
      )}

      <ReCAPTCHA ref={recaptchaRef} size="invisible" sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string} />
    </form>
  )
}

export default ContactForm
