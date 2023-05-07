import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import InputSelect from '../../../components/InputSelect';
import close from '../../../images/cancel.svg';
import { paths } from '../../../utils';
import codes from '../../../documents/CountryCodes.json';

const initialData = {
  org_name: '',
  website_url: '',
  location: '',
  address: '',
  contact_name: '',
  phone: '',
  email: '',
  password: '',
};

const EditProfile = () => {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState('org_details');
  const [formData, setFormData] = useState(initialData);
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('+234');
  const username = 'Maggie Anthony';

  const nextView = () => {
    setCurrentView('contact_details');
  };

  const prevView = () => {
    setCurrentView('org_details');
  };

  const updatePhone = () => {
    setFormData((prev) => ({ ...prev, phone: `${code}${phone}` }));
  };

  const updateFormData = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = () => {
    navigate(`/jobs/${username}`);
  };

  return (
    <main className="py-8 lg:w-4/12 md:w-10/12 w-11/12 mx-auto">
      <Link to={paths.jobs} className="flex justify-end">
        <img src={close} alt="close" className="w-[30px] h-[30px]" />
      </Link>
      <section className="my-5 flex justify-center items-center flex-col text-center">
        <h2 className="text-[#1A1A1A] tracking-[0.96px] text-3xl leading-relaxed">
          Edit Profile
        </h2>
      </section>
      <section className="py-3">
        <div className="flex justify-center w-full relative">
          <div
            className={`w-5 h-5 border-[6px] border-primary-main-pink text-primary-main-pink rounded-full after:content-['Organization_Details'] after:absolute after:top-[22px] after:ml-[-40px] after:text-primary-main-pink`}
          />
          <div
            className={`${
              currentView === 'org_details'
                ? 'border-gainsboro'
                : 'border-primary-main-pink'
            } border-2 lg:w-[265px] w-9/12 my-2`}
          />
          <div
            className={`w-5 h-5 border-[6px] rounded-full after:content-['Contact_Details'] after:absolute after:top-[22px] ${
              currentView === 'org_details'
                ? 'after:text-gainsboro border-gainsboro bg-gainsboro'
                : 'after:text-primary-main-pink border-primary-main-pink bg-primary-main-pink'
            } `}
          />
        </div>
        {currentView === 'org_details' ? (
          <form
            className="mt-20 mb-2 flex flex-col justify-center"
            method="post"
            onSubmit={nextView}
          >
            <Input
              id="org_name"
              placeholder="Organization Name *"
              required
              value={formData.org_name}
              onChange={(e) => updateFormData('org_name', e.target.value)}
            />

            <Input
              id="website_url"
              type="url"
              placeholder="Website URL e.g https://example.org"
              value={formData.website_url}
              onChange={(e) => updateFormData('website_url', e.target.value)}
              inpType="label"
              labelValue='Must Include "http://" or "https://"'
            />

            <Input
              id="location"
              placeholder="Location (e.g. Lagos, Nigeria)*"
              required
              value={formData.location}
              onChange={(e) => updateFormData('location', e.target.value)}
            />

            <Input
              id="org_address"
              placeholder="Organization Address *"
              required
              value={formData.address}
              onChange={(e) => updateFormData('address', e.target.value)}
            />

            <Button type="submit" value="PROCEED" />
          </form>
        ) : (
          ''
        )}

        {currentView === 'contact_details' ? (
          <form
            id="contact_details"
            className="mt-20 mb-2 flex flex-col justify-center"
            onSubmit={submitForm}
          >
            <Input
              id="name"
              placeholder="Contact Name *"
              required
              value={formData.contact_name}
              onChange={(e) => updateFormData('contact_name', e.target.value)}
            />
            <InputSelect
              id="phone"
              type="tel"
              className=" w-9/12 h-11 bg-white-smoke rounded-[4px] py-[6px] px-3 text-mortar focus:outline-none focus:border-sky-500 focus:ring-sky-500 block sm:text-sm focus:ring-1"
              placeholder="Phone Number *"
              required
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                updatePhone();
              }}
              selectValue={code}
              onSelectChange={(e) => {
                setCode(e.target.value);
                updatePhone();
              }}
            >
              {codes.map((code) => (
                <option value={code.dial_code} key={code.name}>
                  {code.dial_code}
                </option>
              ))}
            </InputSelect>
            <Input
              id="email"
              type="email"
              placeholder="Email Address *"
              required
              value={formData.email}
              onChange={(e) => updateFormData('email', e.target.value)}
            />
            <div className="flex justify-between">
              <div className="w-5/12">
                <Button
                  className="bg-white-smoke border-2 w-full border-slate-400 px-6 py-[15px] my-8 rounded-lg rounded-bl-none block"
                  onClick={prevView}
                  type="button"
                >
                  Previous
                </Button>
              </div>
              <div className="w-5/12">
                <Button type="submit" value="Update Profile" />
              </div>
            </div>
          </form>
        ) : (
          ''
        )}
      </section>
    </main>
  );
};

export default EditProfile;
