import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import close from "../../../images/cancel.svg";
import { paths } from "../../../utils";
import { useMutation } from "@tanstack/react-query";
import { mutateEditCompany } from "../../../services";
import { toast } from "react-toastify";
// import codes from "../../../documents/CountryCodes.json";

const EditProfile = () => {
  const initialData = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialData);
  const updateFormData = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const { mutate: editCompanyDetails } = useMutation(mutateEditCompany, {
    onSuccess: (data) => {
      toast.success("Login Successful!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate(paths.profile);
    },
    onError: () => {
      toast.error("An error occurred.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
  });

  const submitLogin = (e) => {
    e.preventDefault();
    editCompanyDetails(formData);
  };

  return (
    <main className="py-8 lg:w-4/12 md:w-10/12 w-11/12 mx-auto">
      <Link to={paths.jobs} className="flex justify-end">
        <img src={close} alt="close" className="w-[30px] h-[30px]" />
      </Link>
      <section className="my-5 flex justify-center items-center flex-col text-center min-h-[80vh]">
        <h2 className="text-[#1A1A1A] tracking-[0.96px] text-3xl leading-relaxed">
          Edit Profile
        </h2>

        <section className="w-11/12 mx-auto __jobs_preview my-10 text-[#707070] sm:max-w-[500px] sm:w-[90%]">
          <form
            className="mb-2 flex flex-col justify-center"
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
            <Button
              type="submit"
              value="EDIT COMPANY"
              className="cursor-pointer"
            />
          </form>
        </section>
      </section>
    </main>
  );
};

export default EditProfile;
