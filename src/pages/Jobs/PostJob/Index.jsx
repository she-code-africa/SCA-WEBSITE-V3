import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Select from '../../../components/Select';
import InputSelect from '../../../components/InputSelect';
import Textarea from '../../../components/Textarea';
import logo from '../../../images/she-code-africa-logo.svg';
import close from '../../../images/cancel.svg';
import { paths } from '../../../utils';
import fields from '../../../documents/Fields.json';

const initialData = {
  job_title: '',
  field: 'Field',
  job_type: 'Job Type',
  application_deadline: '',
  minimum_experience: '',
  job_description: '',
  salary_range: '',
  location: '',
  application_website: '',
};

const PostJob = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialData);
  const [salary_range, setSalaryRange] = useState('');
  const [code, setCode] = useState('NGN');

  const updatePhone = () => {
    setFormData((prev) => ({
      ...prev,
      salary_range: `${code} ${salary_range}`,
    }));
  };

  const updateFormData = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = () => {
    console.log({ formData });
    navigate(paths.jobs);
  };

  return (
    <main className="py-8 lg:w-4/12 md:w-10/12 w-11/12 mx-auto">
      <Link to={paths.jobs} className="flex justify-end">
        <img src={close} alt="close" className="w-[30px] h-[30px]" />
      </Link>
      <section className="my-5 flex justify-center items-center flex-col text-center">
        <img src={logo} alt="SCA" className="w-16 pb-3" />
        <h2 className="text-[#1A1A1A] tracking-[0.96px] text-3xl leading-relaxed">
          Job Details
        </h2>
      </section>
      <section className="py-3">
        <form
          id="contact_details"
          className="mt-10 mb-2 flex flex-col justify-center"
          onSubmit={submitForm}
        >
          <Input
            id="job_title"
            placeholder="Job Title *"
            required
            value={formData.job_title}
            onChange={(e) => updateFormData('job_title', e.target.value)}
          />

          <Select
            value={formData.field}
            onChange={(e) => updateFormData('field', e.target.value)}
            placeholder="Field*"
          >
            {fields.map((field, index) => (
              <option key={index} value={field.name}>
                {field.name}
              </option>
            ))}
          </Select>
          <Select
            value={formData.job_type}
            onChange={(e) => updateFormData('job_type', e.target.value)}
            placeholder="Job type*"
          >
            <option value="Contract">Contract</option>
            <option value="Freelance">Freelance</option>
            <option value="Full Time">Full Time</option>
            <option value="Internship">Internship</option>
            <option value="Part Time">Part Time</option>
          </Select>
          <Input
            type="date"
            min={new Date().toISOString().split('T')[0]}
            id="application_deadline"
            placeholder="Application Deadline *"
            required
            value={formData.application_deadline}
            onChange={(e) =>
              updateFormData('application_deadline', e.target.value)
            }
          />
          <Textarea
            placeholder="Minimum experience"
            rows={4}
            value={formData.minimum_experience}
            onChange={(e) =>
              updateFormData('minimum_experience', e.target.value)
            }
          />

          <Textarea
            placeholder="Job description"
            rows={9}
            value={formData.job_description}
            onChange={(e) => updateFormData('job_description', e.target.value)}
          />

          <InputSelect
            placeholder="Salary Range (e.g 150,000 - 200,000)"
            required
            value={salary_range}
            onChange={(e) => {
              setSalaryRange(e.target.value);
              updatePhone();
            }}
            selectValue={code}
            onSelectChange={(e) => {
              setCode(e.target.value);
              updatePhone();
            }}
          >
            <option>NGN</option>
            <option>USD</option>
            <option>EUR</option>
            <option>CAD</option>
          </InputSelect>

          <Input
            placeholder="Location or Remote (if fully remote) *"
            required
            value={formData.location}
            onChange={(e) => updateFormData('location', e.target.value)}
            inpType="label"
            labelValue='Exact location or "Remote" if it is a remote role'
          />

          <Input
            placeholder="Application Website(e.g https://apply.com) *"
            type="url"
            required
            value={formData.application_website}
            onChange={(e) =>
              updateFormData('application_website', e.target.value)
            }
            inpType="label"
            labelValue='Must Include "http://" or "https://"'
          />

          <div className="w-full">
            <Button type="submit" value="Submit Job Details" />
          </div>
        </form>
      </section>
    </main>
  );
};

export default PostJob;
