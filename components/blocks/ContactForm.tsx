import React, { useState, useCallback } from 'react'

// third-parties
import { motion } from 'framer-motion'

// stores
import useCursorStore from '$stores/CursorStore'

const defaultInputs = {
  name: '',
  email: '',
  company: '',
  brief: '',
  budget: '',
}

const ContactForm: React.FC = () => {
  const { changeCursorType } = useCursorStore()
  const [inputs, setInputs] = useState(defaultInputs)
  const [errors, setErrors] = useState({} as typeof defaultInputs)
  const [status, setStatus] = useState({ submitted: false, submitting: false })

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setErrors({} as typeof defaultInputs)
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }, [])

  const validateInputs = useCallback(() => {
    let errors = {} as typeof defaultInputs

    // check empty value
    for (let key of Object.keys(inputs)) {
      if (inputs[key as keyof typeof inputs] === '') {
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
      setErrors({} as typeof defaultInputs)
      const isValid = validateInputs()
      if (isValid) {
        console.log(inputs)
      }
    },
    [inputs, validateInputs]
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
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="px-6 lg:px-12 pb-[0.1rem] lg:pb-[0.3rem] font-medium transition border-2 rounded-full outline-none text-ddl_dark border-ddl_dark h-14 text-body focus:border-ddl_brand"
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
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="px-6 lg:px-12 pb-[0.1rem] lg:pb-[0.3rem] font-medium transition border-2 rounded-full outline-none text-ddl_dark border-ddl_dark h-14 text-body focus:border-ddl_brand"
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
        </label>
        <input
          type="text"
          name="company"
          id="company"
          className="px-6 lg:px-12 pb-[0.1rem] lg:pb-[0.3rem] font-medium transition border-2 rounded-full outline-none text-ddl_dark border-ddl_dark h-14 text-body focus:border-ddl_brand"
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
        </label>
        <textarea
          name="brief"
          id="brief"
          className="px-6 lg:px-12 pb-[0.1rem] lg:pb-[0.3rem] pt-2 font-medium transition border-2 outline-none rounded-3xl text-ddl_dark border-ddl_dark h-60 text-body focus:border-ddl_brand"
          onChange={handleInputChange}
        />
        {errors.brief && <span className="-mt-2 text-xl text-red-600">{errors.brief}</span>}
      </motion.div>

      <motion.div
        className="grid gap-2 lg:gap-5"
        onMouseEnter={() => changeCursorType('hover_brand')}
        onMouseLeave={() => changeCursorType('normal_brand')}
      >
        <label htmlFor="budget" className="font-medium text-body text-ddl_dark">
          Budget
        </label>
        <select
          name="budget"
          id="budget"
          className="px-6 lg:px-12 pb-[0.1rem] lg:pb-[0.3rem] font-medium transition bg-white border-2 rounded-full outline-none appearance-none text-ddl_dark border-ddl_dark h-14 text-body focus:border-ddl_brand"
          onChange={handleInputChange}
        >
          <option value="">Select Budget</option>
          <option value="3-5">300,000MMK ~ 500,000MMK</option>
          <option value="5-8">500,000MMK ~ 800,000MMK</option>
          <option value="8-12">800,000MMK ~ 1,200,000MMK</option>
          <option value="above-12">About 1,200,000MMK</option>
        </select>
        {errors.budget && <span className="-mt-2 text-xl text-red-600">{errors.budget}</span>}
      </motion.div>

      <motion.button
        onMouseEnter={() => changeCursorType('hover_brand')}
        onMouseLeave={() => changeCursorType('normal_brand')}
        className="px-12 py-3 font-medium transition-colors border-2 rounded-full justify-self-end lg:justify-self-start text-ddl_offwhite bg-ddl_dark text-body border-ddl_dark"
      >
        Send Brief
      </motion.button>
    </form>
  )
}

export default ContactForm
