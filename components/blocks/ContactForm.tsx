import React from 'react'

const ContactForm: React.FC = () => {
  return (
    <form className="grid gap-5 lg:gap-12">
      <div className="grid gap-2 lg:gap-5">
        <label htmlFor="name" className="font-medium text-body text-ddl_dark">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="px-6 lg:px-12 pb-[0.1rem] lg:pb-[0.3rem] font-medium transition border-2 rounded-full outline-none text-ddl_dark border-ddl_dark h-14 text-body focus:border-ddl_brand"
        />
      </div>

      <div className="grid gap-2 lg:gap-5">
        <label htmlFor="email" className="font-medium text-body text-ddl_dark">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="px-6 lg:px-12 pb-[0.1rem] lg:pb-[0.3rem] font-medium transition border-2 rounded-full outline-none text-ddl_dark border-ddl_dark h-14 text-body focus:border-ddl_brand"
        />
      </div>

      <div className="grid gap-2 lg:gap-5">
        <label htmlFor="company" className="font-medium text-body text-ddl_dark">
          Company Name
        </label>
        <input
          type="text"
          name="company"
          id="company"
          className="px-6 lg:px-12 pb-[0.1rem] lg:pb-[0.3rem] font-medium transition border-2 rounded-full outline-none text-ddl_dark border-ddl_dark h-14 text-body focus:border-ddl_brand"
        />
      </div>

      <div className="grid gap-2 lg:gap-5">
        <label htmlFor="brief" className="font-medium text-body text-ddl_dark">
          Project Brief
        </label>
        <textarea
          name="brief"
          id="brief"
          className="px-6 lg:px-12 pb-[0.1rem] lg:pb-[0.3rem] pt-2 font-medium transition border-2 outline-none rounded-3xl text-ddl_dark border-ddl_dark h-60 text-body focus:border-ddl_brand"
        />
      </div>

      <div className="grid gap-2 lg:gap-5">
        <label htmlFor="budget" className="font-medium text-body text-ddl_dark">
          Budget
        </label>
        <select
          name="budget"
          id="budget"
          className="px-6 lg:px-12 pb-[0.1rem] lg:pb-[0.3rem] font-medium transition bg-white border-2 rounded-full outline-none appearance-none text-ddl_dark border-ddl_dark h-14 text-body focus:border-ddl_brand"
        >
          <option value="-">Select Budget</option>
          <option value="3-5">300,000MMK ~ 500,000MMK</option>
          <option value="5-8">500,000MMK ~ 800,000MMK</option>
          <option value="8-12">800,000MMK ~ 1,200,000MMK</option>
          <option value="above-12">About 1,200,000MMK</option>
        </select>
      </div>

      <button className="px-12 py-3 font-medium transition-colors border-2 rounded-full justify-self-end lg:justify-self-start text-ddl_offwhite bg-ddl_dark text-body border-ddl_dark">
        Send Brief
      </button>
    </form>
  )
}

export default ContactForm
