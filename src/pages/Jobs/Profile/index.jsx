import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import { apiConstants, paths } from "../../../utils";
import Footer from "../../../components/Footer";
import Dropdown from "../../../components/Dropdown";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

const Profile = () => {
  const contactName = JSON.parse(localStorage.getItem("contactName"));
  const initialData = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialData);
  const updateFormData = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitLogin = (e) => {
    e.preventDefault();
    // loginOrganization(formData);
  };

  return (
    <>
      <Header page={"jobs"} />
      <main>
        <Dropdown userName={contactName !== null ? contactName.name : null} />
        <section className="md:w-6/12 w-11/12 mx-auto flex flex-col items-center __shecodeheader_text my-10">
          <div className=" text-center my-5">
            <h1 className="text-primary-dark-pink text-center font-bold md:text-[50px] sm:text-[35px] text-2xl leading-[1.1]">
              Welcome, {contactName !== null ? contactName.name : null}
            </h1>
          </div>
          <div className="__shecodeheader_subtitle">
            <p className="text-center">
              We are a non-profit organization focused on celebrating and
              empowering young girls and women in technology across Africa.
            </p>
          </div>
          <Link
            to={paths.post_job}
            className="uppercase w-auto btn sca-btn pink-btn sca-btn-small"
          >
            Post a job
          </Link>
        </section>

        <section className="w-11/12 mx-auto __jobs_preview my-10 text-[#707070] sm:max-w-[500px] sm:w-[90%]">
          <form
            className="mt-10 mb-2 flex flex-col justify-center"
            onSubmit={submitLogin}
          >
            <div>
              <Input
                type="email"
                id="email"
                placeholder="Email *"
                required
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
              />
            </div>

            <div className="my-8">
              <Input
                type="password"
                id="password"
                placeholder="Password *"
                required
                onChange={(e) => updateFormData("password", e.target.value)}
                inpType="password"
              />
            </div>
            <Button type="submit" value="EDIT COMPANY" />
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Profile;
