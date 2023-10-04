import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Select from "../../../components/Select";
import InputSelect from "../../../components/InputSelect";
import Textarea from "../../../components/Textarea";
import logo from "../../../images/she-code-africa-logo.svg";
import close from "../../../images/cancel.svg";
import { apiConstants, paths } from "../../../utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getJobCategory, getJobTypes, mutatePostJobs } from "../../../services";
import { toast } from "react-toastify";
import Captcha from "../../../components/Captcha";

const initialData = {
  title: "",
  jobCategory: "Field",
  jobType: "Job Type",
  deadline: "",
  minimumExperience: "",
  description: "",
  salaryRange: "",
  location: "",
  applicationLink: "",
};

const PostJob = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialData);
  const [salaryRange, setSalaryRange] = useState("");
  const [code, setCode] = useState("NGN");
  const { data, isLoading } = useQuery([apiConstants], getJobTypes);
  const { data: category, isLoading: loading } = useQuery(
    [apiConstants.jobCategory],
    getJobCategory
  );

  const { mutate: postJob } = useMutation(mutatePostJobs, {
    onSuccess: (data) => {
      toast.success("Job Created Successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate(paths.jobs, {
        replace: true,
      });
    },
    onError: (error, variables) => {
      toast.error("An error occurred.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
  });

  const updateFormData = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      salaryRange,
      salaryCurrency: code,
      guestPost: false,
    };
    postJob(payload);
    // navigate(paths.jobs);
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
            value={formData.title}
            onChange={(e) => updateFormData("title", e.target.value)}
          />

          <Select
            value={formData.jobCategory}
            onChange={(e) => updateFormData("jobCategory", e.target.value)}
            placeholder="Field*"
          >
            <option>Job Category*</option>

            {loading ? (
              <option>Loading...</option>
            ) : (
              <>
                {category.map((field, index) => (
                  <option key={index} value={field._id}>
                    {field.name}
                  </option>
                ))}
              </>
            )}
          </Select>
          <Select
            value={formData.jobType}
            onChange={(e) => updateFormData("jobType", e.target.value)}
            placeholder="Job type*"
          >
            <option>Job type*</option>
            {isLoading ? (
              <option>Loading...</option>
            ) : (
              <>
                {data.map((items, index) => {
                  return (
                    <option value={items._id} key={index}>
                      {items.name}
                    </option>
                  );
                })}
              </>
            )}
          </Select>
          <Input
            type="date"
            min={new Date().toISOString().split("T")[0]}
            id="deadline"
            placeholder="Application Deadline *"
            required
            value={formData.deadline}
            onChange={(e) => updateFormData("deadline", e.target.value)}
          />
          <Textarea
            placeholder="Minimum experience"
            rows={4}
            value={formData.minimumExperience}
            onChange={(e) =>
              updateFormData("minimumExperience", e.target.value)
            }
          />

          <Textarea
            placeholder="Job description"
            rows={9}
            value={formData.description}
            onChange={(e) => updateFormData("description", e.target.value)}
          />

          <InputSelect
            placeholder="Salary Range (e.g 150,000 - 200,000)"
            required
            value={salaryRange}
            onChange={(e) => {
              setSalaryRange(e.target.value);
            }}
            selectValue={code}
            onSelectChange={(e) => {
              setCode(e.target.value);
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
            onChange={(e) => updateFormData("location", e.target.value)}
            inpType="label"
            labelValue='Exact location or "Remote" if it is a remote role'
          />

          <Input
            placeholder="Application Website(e.g https://apply.com) *"
            type="url"
            required
            value={formData.applicationLink}
            onChange={(e) => updateFormData("applicationLink", e.target.value)}
            inpType="label"
            labelValue='Must Include "http://" or "https://"'
          />

          <Captcha />

          <div className="w-full">
            <Button type="submit" value="Submit Job Details" />
          </div>
        </form>
      </section>
    </main>
  );
};

export default PostJob;
