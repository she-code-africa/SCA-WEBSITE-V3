import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import InputSelect from "../../components/InputSelect";
import logo from "../../images/she-code-africa-logo.svg";
import close from "../../images/cancel.svg";
import { paths, apiConstants } from "../../utils";
import codes from "../../documents/CountryCodes.json";
import { useMutation, useQuery } from "react-query";
import { getCompanyCategory, mutateRegisterOrganization } from "../../services";
import { toast } from "react-toastify";

const initialData = {
  companyName: "",
  companyUrl: "",
  companyLocation: "",
  companyCategory: "",
  contactName: "",
  companyPhone: "",
  email: "",
  password: "",
  companyDescription: "",
};

const RegisterOrg = () => {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState("org_details");
  const [formData, setFormData] = useState(initialData);
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("+234");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [disableSubmit, setDisableSubmit] = useState(true);
  const { mutate: registerOrganization } = useMutation(
    mutateRegisterOrganization,
    {
      onSuccess: (data) => {
        toast.success("Sign up Successful!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate(paths.jobs);
      },

      onError: (error, variables) => {
        toast.error("An error occurred.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      },
    }
  );
  const { data, isError, isFetched, isSuccess, isLoading } = useQuery(
    apiConstants.companyCategory,
    getCompanyCategory
  );

  const nextView = (e) => {
    e.preventDefault();
    setCurrentView("contact_details");
  };

  const prevView = (e) => {
    e.preventDefault();
    setCurrentView("org_details");
  };

  const updateFormData = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const comparePassword = (e) => {
    const { value } = e.target;
    setConfirmPassword(value);
    if (formData.password.length >= 8 && value === formData.password) {
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
    }
  };

  const submitForm = async (e) => {
    try {
      e.preventDefault();
      const payload = {
        ...formData,
        companyPhone: `${code}${phone}`,
      };
      registerOrganization(payload);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="py-8 lg:w-4/12 md:w-10/12 w-11/12 mx-auto">
      <Link to={paths.jobs} className="flex justify-end">
        <img src={close} alt="close" className="w-[30px] h-[30px]" />
      </Link>
      <section className="my-5 flex justify-center items-center flex-col text-center">
        <img src={logo} alt="SCA" className="w-16 pb-3" />
        <h2 className="text-[#1A1A1A] tracking-[0.96px] text-3xl leading-relaxed">
          Welcome Here
        </h2>
        <p>Reach top talent and find the right candidate today</p>
      </section>
      <section className="py-3">
        <div className="flex justify-center w-full relative">
          <div
            className={`w-5 h-5 border-[6px] border-primary-main-pink text-primary-main-pink rounded-full after:content-['Organization_Details'] after:absolute after:top-[22px] after:ml-[-40px] after:text-primary-main-pink`}
          />
          <div
            className={`${
              currentView === "org_details"
                ? "border-gainsboro"
                : "border-primary-main-pink"
            } border-2 lg:w-[265px] w-9/12 my-2`}
          />
          <div
            className={`w-5 h-5 border-[6px] rounded-full after:content-['Contact_Details'] after:absolute after:top-[22px] ${
              currentView === "org_details"
                ? "after:text-gainsboro border-gainsboro bg-gainsboro"
                : "after:text-primary-main-pink border-primary-main-pink bg-primary-main-pink"
            } `}
          />
        </div>
        {currentView === "org_details" ? (
          <form
            className="mt-20 mb-2 flex flex-col justify-center"
            method="post"
            onSubmit={nextView}
          >
            <Input
              id="companyName"
              placeholder="Organization Name *"
              required
              value={formData.companyName}
              onChange={(e) => updateFormData("companyName", e.target.value)}
            />

            <Input
              id="companyUrl"
              type="url"
              placeholder="Website URL e.g https://example.org"
              value={formData.companyUrl}
              onChange={(e) => updateFormData("companyUrl", e.target.value)}
              inpType="label"
              labelValue='Must Include "http://" or "https://"'
            />

            <div className="mt-5 mb-3 flex justify-between items-center">
              <select
                className="h-11 w-full bg-white-smoke rounded-[4px] py-[6px] px-3 text-mortar focus:outline-none focus:border-sky-500 focus:ring-sky-500 block sm:text-sm focus:ring-1"
                value={formData.companyCategory}
                onChange={(e) =>
                  updateFormData("companyCategory", e.target.value)
                }
                placeholder="Category"
              >
                <option value="">Company Category *</option>
                {isLoading ? (
                  <option value="">Loading...</option>
                ) : (
                  <>
                    {data.map((category, id) => {
                      return (
                        <option value={category._id} key={id}>
                          {category.name}
                        </option>
                      );
                    })}
                  </>
                )}
              </select>
            </div>

            <Input
              id="location"
              placeholder="Location (e.g. Lagos, Nigeria)*"
              required
              value={formData.location}
              onChange={(e) =>
                updateFormData("companyLocation", e.target.value)
              }
            />

            <Input
              id="org_address"
              placeholder="Company Description*"
              required
              value={formData.companyDescription}
              onChange={(e) =>
                updateFormData("companyDescription", e.target.value)
              }
            />

            <Button type="submit" value="PROCEED" />
          </form>
        ) : (
          ""
        )}

        {currentView === "contact_details" ? (
          <form
            id="contact_details"
            className="mt-20 mb-2 flex flex-col justify-center"
            onSubmit={submitForm}
          >
            <Input
              id="name"
              placeholder="Contact Name *"
              required
              value={formData.contactName}
              onChange={(e) => updateFormData("contactName", e.target.value)}
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
              }}
              selectValue={code}
              onSelectChange={(e) => {
                setCode(e.target.value);
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
              onChange={(e) => updateFormData("email", e.target.value)}
            />

            <Input
              id="password"
              type="password"
              placeholder="Password *"
              required
              value={formData.password}
              hasInfo={true}
              onChange={(e) => updateFormData("password", e.target.value)}
              inpType="password"
            />
            <Input
              id="confirm_password"
              type="password"
              placeholder="Confirm Password *"
              hasInfo={true}
              required
              value={confirmPassword}
              onChange={(e) => comparePassword(e)}
              inpType="password"
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
                <Button
                  type="submit"
                  value="Register"
                  disabled={disableSubmit}
                />
              </div>
            </div>
          </form>
        ) : (
          ""
        )}
        <p className="text-center post-a-job-cta">
          <span>Already have an account?&nbsp;</span>
          <Link
            to={paths.login_org}
            className="text-primary-main-pink hover:text-primary-main-pink"
          >
            LOGIN TO POST A JOB
          </Link>
        </p>
      </section>
    </main>
  );
};

export default RegisterOrg;
