import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../images/she-code-africa-logo.svg'
import close from '../../images/cancel.svg'
import { paths } from '../../utils'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

import codes from '../../documents/CountryCodes.json'

const initialData = {
  org_name: '',
  website_url: '',
  location: '',
  address: '',
  contact_name: '',
  phone: '',
  email: '',
  password: ''
}

const RegisterOrg = () => {


  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState('org_details')
  const [formData, setFormData] = useState(initialData)
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('+234')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [disableSubmit, setDisableSubmit] = useState(true)


  const nextView = () => {
    setCurrentView('contact_details')
  }

  const prevView = () => {
    setCurrentView('org_details')
  }

  const updatePhone = () => {
    setFormData((prev) =>  ({ ...prev, phone: `${code}${phone}` }))
  }

  const updateFormData = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const comparePassword = (e) => {
    const { value } = e.target
    setConfirmPassword(value)
    if (formData.password.length >= 8 && value === formData.password) {
      setDisableSubmit(false)
    } else {
      setDisableSubmit(true)
    }
  }

  const submitForm = () => {
    navigate(paths.jobs);
  }

  return (
    <main className="py-8 lg:w-4/12 md:w-10/12 w-11/12 mx-auto">
      <Link to={paths.jobs} className="flex justify-end">
        <img src={close} alt="close" className="w-[30px] h-[30px]" />
      </Link>
      <section className="my-5 flex justify-center items-center flex-col text-center">
        <img src={logo} alt="SCA" className="w-16 pb-3" />
        <h2 className="text-[#1A1A1A] tracking-[0.96px] text-3xl leading-relaxed">Welcome Here</h2>
        <p>Reach top talent and find the right candidate today</p>
      </section>
      <section className="py-3">
        <div className="flex justify-center w-full relative">
          <div className={`w-5 h-5 border-[6px] border-primary-main-pink text-primary-main-pink rounded-full after:content-['Organization_Details'] after:absolute after:top-[22px] after:ml-[-40px] after:text-primary-main-pink`} />
          <div className={`${currentView === 'org_details' ? 'border-gainsboro' : 'border-primary-main-pink'} border-2 lg:w-[265px] w-9/12 my-2`} />
          <div className={`w-5 h-5 border-[6px] rounded-full after:content-['Contact_Details'] after:absolute after:top-[22px] ${currentView === 'org_details' ? 'after:text-gainsboro border-gainsboro bg-gainsboro' : 'after:text-primary-main-pink border-primary-main-pink bg-primary-main-pink'} `} />
        </div>
        {currentView === 'org_details' ? 
          <form className="mt-20 mb-2 flex flex-col justify-center" method="post" onSubmit={nextView}>
            <div>
              <input id="org_name" class="w-full h-11 bg-white-smoke rounded-[4px] py-[6px] px-3 text-mortar focus:outline-none focus:border-sky-500 focus:ring-sky-500 block sm:text-sm focus:ring-1" placeholder="Organization Name *" required value={formData.org_name} onChange={(e) => updateFormData('org_name', e.target.value)} />
            </div>
            <div className="mt-5 mb-3">
              <label class=" text-red-600 py-2 block" htmlFor="website_url">Must Include "http://" or "https://"</label>
              <input id="website_url" type="url" class="w-full h-11 bg-white-smoke rounded-[4px] py-[6px] px-3 text-mortar focus:outline-none focus:border-sky-500 focus:ring-sky-500 block sm:text-sm focus:ring-1" placeholder="Website URL e.g https://example.org" value={formData.website_url} onChange={(e) => updateFormData('website_url', e.target.value)}  />
            </div>
            <div className="my-3">
              <input id="location" class="w-full h-11 bg-white-smoke rounded-[4px] py-[6px] px-3 text-mortar focus:outline-none focus:border-sky-500 focus:ring-sky-500 block sm:text-sm focus:ring-1" placeholder="Location (e.g. Lagos, Nigeria)*" required value={formData.location} onChange={(e) => updateFormData('location', e.target.value)} />
            </div>
            <div className="my-3">
              <input id="org_address" class="w-full h-11 bg-white-smoke rounded-[4px] py-[6px] px-3 text-mortar focus:outline-none focus:border-sky-500 focus:ring-sky-500 block sm:text-sm focus:ring-1" placeholder="Organization Address *" required value={formData.address} onChange={(e) => updateFormData('address', e.target.value)} />
            </div>
            <input type="submit" value="PROCEED" className="bg-[#F0CDE1] text-primary-main-pink hover:bg-primary-main-pink hover:text-white px-6 py-[15px] my-8 rounded-lg rounded-bl-none transition-colors duration-700" />
          </form>
        : ''}

        {currentView === 'contact_details' ? 
          <form id="contact_details" className="mt-20 mb-2 flex flex-col justify-center" onSubmit={submitForm}>
            <div className="mt-5 mb-3">
              <input id="name" class="w-full h-11 bg-white-smoke rounded-[4px] py-[6px] px-3 text-mortar focus:outline-none focus:border-sky-500 focus:ring-sky-500 block sm:text-sm focus:ring-1" placeholder="Contact Name *" required value={formData.contact_name} onChange={(e) => updateFormData('contact_name', e.target.value)} />
            </div>
            <div className="mt-5 mb-3 flex justify-between items-center">
              <select className="h-11 w-3/12 bg-white-smoke rounded-[4px] py-[6px] px-3 text-mortar focus:outline-none focus:border-sky-500 focus:ring-sky-500 block sm:text-sm focus:ring-1 mr-3" value={code} onChange={(e) => {
                setCode(e.target.value)
                updatePhone()
              }}>
                {codes.map((code) => (
                  <option value={code.dial_code} key={code.name}>{code.dial_code}</option>
                ))}
              </select>
              <input id="phone" type="tel" class=" w-9/12 h-11 bg-white-smoke rounded-[4px] py-[6px] px-3 text-mortar focus:outline-none focus:border-sky-500 focus:ring-sky-500 block sm:text-sm focus:ring-1" placeholder="Phone Number *" required value={phone} onChange={(e) => {
                setPhone(e.target.value)
                updatePhone()
              }} />
            </div>
            <div className="mt-5 mb-3">
              <input id="email" type="email" class="w-full h-11 bg-white-smoke rounded-[4px] py-[6px] px-3 text-mortar focus:outline-none focus:border-sky-500 focus:ring-sky-500 block sm:text-sm focus:ring-1" placeholder="Email Address *" required value={formData.email} onChange={(e) => updateFormData('email', e.target.value)} />
            </div>
            <div className="mt-5 mb-3 flex items-center">
              <input id="password" type="password" class="w-11/12 h-11 bg-white-smoke rounded-[4px] rounded-r-none py-[6px] px-3 text-mortar focus:outline-none focus:border-sky-500 focus:ring-sky-500 block sm:text-sm focus:ring-1" placeholder="Password *" required value={formData.password} onChange={(e) => updateFormData('password', e.target.value)} />
              <div className="w-1/12 h-11 py-[6px] px-3 bg-white-smoke cursor-pointer rounded-r-[4px]" title="1. Password must be longer than 8 characters. 
              2. Password must not be common or frequently used.">
                <FontAwesomeIcon icon={faCircleInfo} className=" hover:text-primary-main-pink" />
              </div>
            </div>
            <div className="mt-5 mb-3 flex items-center">
              <input id="confirm_password" type="password" class="w-11/12 h-11 bg-white-smoke rounded-[4px] rounded-r-none py-[6px] px-3 text-mortar focus:outline-none focus:border-sky-500 focus:ring-sky-500 block sm:text-sm focus:ring-1" placeholder="Confirm Password *" required value={confirmPassword} onChange={(e) => comparePassword(e)} />
              <div className="w-1/12 h-11 py-[6px] px-3 bg-white-smoke cursor-pointer rounded-r-[4px]" title="1. Password must be longer than 8 characters. 
              2. Password must not be common or frequently used.">
                <FontAwesomeIcon icon={faCircleInfo} className=" hover:text-primary-main-pink"  />
              </div>
            </div>
            <div className="flex justify-between">
              <button className="block w-5/12 bg-white-smoke border-2 border-slate-400 px-6 py-[15px] my-8 rounded-lg rounded-bl-none" onClick={prevView} type="button">Previous</button>
              <input type="submit" value="Register" className="disabled:bg-[#F0CDE1] disabled:text-primary-main-pink hover:bg-primary-main-pink bg-primary-main-pink text-white px-6 py-[15px] my-8 rounded-lg rounded-bl-none transition-colors duration-700 block w-5/12" disabled={disableSubmit} />
            </div>
          </form>
        : ''}
        <p class="text-center post-a-job-cta">
          <span>Already have an account?&nbsp;</span>
          <Link to={paths.login_org} className="text-primary-main-pink hover:text-primary-main-pink">LOGIN TO POST A JOB</Link>
        </p>
      </section>
    </main>
  )
}

export default RegisterOrg