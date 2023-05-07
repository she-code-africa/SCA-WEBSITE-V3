import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/she-code-africa-logo.svg';
import close from '../../images/cancel.svg';
import { paths } from '../../utils';
import Input from '../../components/Input';
import Button from '../../components/Button';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const submitResetPass = () => {
    navigate(paths.login_org);
  };

  return (
    <main className="py-8 lg:w-4/12 md:w-10/12 w-11/12 mx-auto">
      <Link to={paths.jobs} className="flex justify-end">
        <img src={close} alt="close" className="w-[30px] h-[30px]" />
      </Link>
      <section className="my-5 flex justify-center items-center flex-col text-center">
        <img src={logo} alt="SCA" className="w-16 pb-3" />
        <h2 className="text-[#1A1A1A] tracking-[0.96px] text-3xl leading-relaxed">
          Reset Password
        </h2>
        <p>Enter your registered email to receive password reset link</p>
      </section>
      <section className="py-5">
        <form
          className="mt-5 mb-2 flex flex-col justify-center"
          onSubmit={submitResetPass}
        >
          <div>
            <Input
              type="email"
              id="email"
              placeholder="Email *"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button type="submit" value="SUBMIT" />
        </form>

        <p class="text-center post-a-job-cta">
          <span>Remember PAssword?&nbsp;</span>
          <Link
            to={paths.login_org}
            className="text-primary-main-pink hover:text-primary-main-pink"
          >
            BACK TO LOGIN
          </Link>
        </p>
      </section>
    </main>
  );
};

export default ForgotPassword;
