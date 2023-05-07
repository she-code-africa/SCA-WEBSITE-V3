import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Header';
import { ImgCard } from '../../components/Cards';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { apiConstants } from '../../utils';
import { getTeams } from '../../services';

const Team = () => {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState('');
  const [src, setSrc] = useState('');
  const [role, setRole] = useState('');
  const [details, setDetails] = useState('');
  const [teamMembers, setTeamMembers] = useState([]);

  const teamCall = useQuery(apiConstants.teams, getTeams);

  const modalDialog = (name, src, role, details) => {
    setOpenModal(true);
    setRole(role);
    setSrc(src);
    setName(name);
    setDetails(details);
  };

  useEffect(() => {
    if (teamCall.isFetched && teamCall.isSuccess) {
      setTeamMembers(teamCall?.data);
    }

    //  teamCall.isError
  }, [teamCall.isFetched, teamCall.isSuccess, teamCall?.data]);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Awesome Team</title>
        <meta
          name="description"
          content="Peep the faces behind the initiatives and impacts here at She Code Africa. These wonderful people work behind the scene, everyday to keep our vision working."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Our Awesome Team" />
        <meta
          property="og:description"
          content="Peep the faces behind the initiatives and impacts here at She Code Africa. These wonderful people work behind the scene, everyday to keep our vision working."
        />
        <meta name="twitter:title" content="Our Awesome Team" />
        <meta
          name="twitter:description"
          content="Peep the faces behind the initiatives and impacts here at She Code Africa. These wonderful people work behind the scene, everyday to keep our vision working."
        />
      </Helmet>
      <Header />
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-12">
          <div className=" col-span-12 sm:col-span-7 inline sm:px-14">
            <div className="__shecodeheader_text">
              <div className="__shecodeheader_title">
                <h1>Our Team</h1>
              </div>
              <div className="__shecodeheader_subtitle">
                <h4>
                  Empowering and celebrating{' '}
                  <span className="highlight">
                    women <br /> in technology
                  </span>{' '}
                  across Africa guiding <br /> Tech-Girls to their Full
                  Potential
                </h4>
              </div>
            </div>
          </div>
          <div className="hidden sm:col-span-5 sm:inline">
            <div className="__shecodeheader_image"></div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-8 __shecodecontent">
        {teamCall.isLoading ? (
          <div className="flex flex-wrap gap-6 mx-10 md:mx-5 my-20">
            {[1, 2, 3].map((_, index) => (
              <Loading key={index} />
            ))}
          </div>
        ) : null}

        {teamCall.isError ? (
          <div className="flex justify-center  mx-10 md:mx-5 my-20">
            <Error />
          </div>
        ) : null}

        <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 my-20">
          {teamMembers?.map((member, index) => {
            return (
              <div
                onClick={() =>
                  modalDialog(
                    member.name,
                    member?.image || '',
                    `${member.isLeader ? 'Lead, ' : ''} ${member.team.name}`,
                    member.bio,
                  )
                }
                key={index}
              >
                <ImgCard
                  name={member.name}
                  src={member?.image || ''}
                  role={`${member.isLeader ? 'Lead, ' : ''} ${
                    member.team.name
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
      {openModal ? (
        <div
          id="defaultModal"
          aria-hidden="true"
          className="modal team_modal overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal h-full md:inset-0 bg-[#333] bg-opacity-70"
        >
          <div className="relative px-4 w-full max-w-2xl h-full modal-dialog-centered mx-auto my-auto grid content-center">
            <div className="modal-content relative">
              <div className="-mx-4 grid grid-cols-12 modal-body content-center rounded-[50px] bg-white">
                <div className="col-span-12 sm:col-span-6">
                  <div className="__shecodeteammember_box">
                    <div className="__shecodeteammember_img">
                      {src ? (
                        <img src={src} alt={name} className="img-responsive" />
                      ) : (
                        <div className="w-full h-full flex justify-center items-center">
                          <FontAwesomeIcon
                            icon={faUser}
                            size="10x"
                            className="scale-150 text-gray-500"
                          />
                        </div>
                      )}
                    </div>
                    <div className="__shecodeteammember_text">
                      <h5 className="name">{name}</h5>
                      <p className="role">{role}</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-6 justify-self-start bg-white rounded-lg shadow px-4">
                  <div className="__shecodeteammember_details">
                    <div className="flex justify-between items-start ">
                      <span
                        className="close hover:bg-gray-200 hover:text-gray-900 rounded-lg text-xl font-bold p-1.5 ml-auto inline-flex items-center "
                        data-dismiss="modal"
                        aria-hidden="true"
                        title="close"
                        role="button"
                        onClick={() => setOpenModal(false)}
                      >
                        x
                      </span>
                    </div>
                    <p>{details}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <Footer />
    </div>
  );
};

export default Team;
