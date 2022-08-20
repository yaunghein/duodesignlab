import React, { useState, useCallback, useRef } from 'react'
import Image from 'next/image'

// third-parties
import { motion, AnimatePresence } from 'framer-motion'

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

      const formData = { ...inputs, budget: `${inputs.budget} ${currency.type}` }
      const isValid = validateInputs()
      if (isValid) {
        setStatus((prev) => ({ ...prev, isSubmitting: true }))
        const response = await fetch('/api/submit-brief', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: { 'content-type': 'application/json' },
        })

        if (response.ok) {
          const data = await response.json()
          setInputs(defaultInputs)
          setStatus({ isSubmitting: false, isSubmitted: true, senderName: data.name })
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
          className="px-6 lg:px-12 pb-[0.1rem] lg:pb-[0.3rem] font-medium transition border-2 rounded-full outline-none text-ddl_dark border-ddl_dark h-14 text-body focus:border-ddl_brand"
          value={inputs.name}
          onChange={handleInputChange}
        />
        {errors.name && <span className="-mt-2 text-xl text-red-600">{errors.name}</span>}
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
          className="px-6 lg:px-12 pb-[0.1rem] lg:pb-[0.3rem] font-medium transition border-2 rounded-full outline-none text-ddl_dark border-ddl_dark h-14 text-body focus:border-ddl_brand"
          value={inputs.email}
          onChange={handleInputChange}
        />
        {errors.email && <span className="-mt-2 text-xl text-red-600">{errors.email}</span>}
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
          className="px-6 lg:px-12 pb-[0.1rem] lg:pb-[0.3rem] font-medium transition border-2 rounded-full outline-none text-ddl_dark border-ddl_dark h-14 text-body focus:border-ddl_brand"
          value={inputs.company}
          onChange={handleInputChange}
        />
        {errors.company && <span className="-mt-2 text-xl text-red-600">{errors.company}</span>}
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
          className="resize-none px-6 lg:px-12 pb-[0.1rem] lg:pb-[0.3rem] pt-2 font-medium transition border-2 outline-none rounded-3xl text-ddl_dark border-ddl_dark h-60 text-body focus:border-ddl_brand"
          value={inputs.brief}
          onChange={handleInputChange}
        />
        {errors.brief && <span className="-mt-2 text-xl text-red-600">{errors.brief}</span>}
      </motion.div>

      <motion.div
        className="flex flex-wrap items-center"
        onMouseEnter={() => changeCursorType('hover_brand')}
        onMouseLeave={() => changeCursorType('normal_brand')}
      >
        <div className="flex flex-col w-3/4 gap-2 lg:gap-5">
          <label htmlFor="budget" className="font-medium text-body text-ddl_dark">
            Budget
            <span className="text-xl text-red-600">*</span>
          </label>
          <input
            type="text"
            name="budget"
            id="budget"
            className="px-6 lg:px-12 pb-[0.1rem] lg:pb-[0.3rem] font-medium transition border-2 rounded-full rounded-r-none outline-none text-ddl_dark border-ddl_dark h-14 text-body focus:border-ddl_brand"
            value={inputs.budget}
            onChange={handleInputChange}
          />
        </div>
        <div ref={currencyMenuRef} className="relative flex flex-col w-1/4 gap-2 -mb-1 md:mb-0 lg:gap-5">
          <label htmlFor="budget" className="font-medium text-body text-ddl_dark">
            Currency
          </label>
          <div
            role="button"
            className="select-none lg:-mb-[1px] grid place-items-center lg:pb-[0.2rem] font-medium transition border-2 border-l-0 rounded-full rounded-l-none outline-none text-ddl_dark border-ddl_dark h-14 text-body focus:border-ddl_brand"
            onClick={() => setIsCurrencyMenuOpen(!isCurrencyMenuOpen)}
          >
            {currency.type}
          </div>
          <AnimatePresence>
            {isCurrencyMenuOpen && (
              <motion.div
                className="absolute right-0 grid w-[150%] xl:w-full gap-2 sm:gap-4 p-4 sm:p-5 bg-white border-2 bottom-16 sm:bottom-[unset] sm:top-32 rounded-3xl border-ddl_dark"
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

        {errors.budget && <span className="block w-full text-xl text-red-600">{errors.budget}</span>}
      </motion.div>

      <motion.button
        onMouseEnter={() => changeCursorType('hover_brand')}
        onMouseLeave={() => changeCursorType('normal_brand')}
        className="px-12 py-3 mt-2 font-medium transition-colors border-2 rounded-full lg:mt-0 justify-self-end lg:justify-self-start text-ddl_offwhite bg-ddl_dark text-body border-ddl_dark"
        disabled={status.isSubmitting}
      >
        {status.isSubmitting ? 'Sending...' : 'Send Brief'}
      </motion.button>

      {serverError && <span className="-mt-5 text-xl text-red-600">{serverError}</span>}

      {status.isSubmitted && (
        <span className="block -mt-1 text-xl text-right lg:text-left lg:-mt-5 text-ddl_brand">
          {`Thanks, ${status.senderName.split(' ')[0]}! You submission has been received.`}
        </span>
      )}
    </form>
  )
}

export default ContactForm
