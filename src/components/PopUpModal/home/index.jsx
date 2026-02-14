import HomePopupInput from "../../Input/HomePopup";
import closeBtn from "../../../images/v2/xImg.png";
import { useState } from "react";

const HomePageModal = ({ closeModal }) => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    setFormValues((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email } = formValues;

    if (!firstName || !lastName || !email) {
      return false;
    }
  };
  return (
    <div className="modal overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-0 z-20 justify-center items-center h-modal h-full md:inset-0 bg-[#333] bg-opacity-70">
      <div className="w-full pt-16 pb-10 lg:pt-5 lg:pb-0 overflow-auto flex items-center justify-center">
        <section className="w-[90%] mx-auto max-w-[1040px] rounded-3xl md:rounded-[50px] flex items-center overflow-hidden">
          <div className="w-full flex flex-col-reverse lg:flex-row">
            <div className="w-full bg-[#FFF88F] px-10 py-9 md:py-11 md:px-12 xl:px-20 xl:py-[70px]">
              <div className="mb-4 lg:hidden hidden justify-end">
                <button
                  className="w-[16px] h-[16px] overflow-hidden"
                  onClick={closeModal}
                >
                  <img
                    src={closeBtn}
                    alt="close button"
                    className="w-full h-full object-contain"
                  />
                </button>
              </div>
              <h3 className="text-primary-main-pink font-semibold text-[36px] md:text-[64px] hero-text w-full max-w-[254px] sm:max-w-full">
                Download Our 2025 Annual Report here:
              </h3>

              <form
                className="w-full  lg:max-w-[345px] mt-[30px] font-figtree"
                onSubmit={submitForm}
              >
                <HomePopupInput
                  label="first name"
                  name="firstName"
                  value={formValues.firstName}
                  onchange={handleChange}
                  placeholder="Type your first name"
                />

                <HomePopupInput
                  label="last name"
                  name="lastName"
                  value={formValues.lastName}
                  onchange={handleChange}
                  placeholder="Type your last name (surname)"
                />

                <HomePopupInput
                  label="email"
                  name="email"
                  placeholder="Email address"
                  value={formValues.email}
                  onchange={handleChange}
                  type="email"
                />

                <div className="w-full max-w-[185px] h-[52px] overflow-hidden rounded-lg">
                  <button className="bg-primary-main-pink text-white text-base w-full h-full hover:bg-[#5C0335] rounded-lg transition-all duration-300">
                    Download report
                  </button>
                </div>
              </form>
            </div>

            {/*  */}
            <div className="w-full h-[200px] sm:h-[300px] lg:h-auto lg:max-w-[505px]  popup-bg ">
              <div className="p-10 w-full flex justify-end">
                <button
                  className="w-[18px] h-[18px] overflow-hidden"
                  onClick={closeModal}
                >
                  <img
                    src={closeBtn}
                    alt="close button"
                    className="w-full h-full object-contain"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePageModal;
