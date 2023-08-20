import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../images/she-code-africa-logo.svg";
import close from "../../images/cancel.svg";
import { paths } from "../../utils";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { mutateOrganizationLogin } from "../../services";
import jwt_decode from "jwt-decode";

const initialData = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || paths.jobs;
  const [formData, setFormData] = useState(initialData);
  const { mutate: loginOrganization } = useMutation(mutateOrganizationLogin, {
    onSuccess: (data) => {
      const userData = jwt_decode(data);

      let userDetails = {
        email: formData.email,
        token: data,
        userId: userData.id,
      };
      toast.success("Login Successful!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
      navigate(from, { replace: true });
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

  const submitLogin = (e) => {
    e.preventDefault();
    loginOrganization(formData);
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
          <Button type="submit" value="LOGIN" />
        </form>

        <p className="text-center post-a-job-cta">
          <span>Don't have an account?&nbsp;</span>
          {/* <Link
            to={paths.register_org}
            className="text-primary-main-pink hover:text-primary-main-pink"
          >
            REGISTER TO POST A JOB
          </Link> */}
          <button
            className="text-primary-main-pink hover:text-primary-main-pink"
            onClick={() =>
              navigate(paths.register_org, {
                state: {
                  from: location.state?.from,
                },
              })
            }
          >
            REGISTER TO POST A JOB
          </button>
        </p>
        <Link
          to={paths.forgot_password_org}
          className="text-primary-main-pink hover:text-primary-main-pink inline-block py-6"
        >
          Forgot Password?
        </Link>
      </section>
    </main>
  );
};

export default Login;
