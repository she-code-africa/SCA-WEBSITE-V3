import { faCaretDown, faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { paths } from '../../utils';

const Dropdown = ({ userName }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAlt, setshowAlt] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const encodeUsername = encodeURIComponent(userName);
    if (location.pathname === paths.jobs) {
      setshowAlt(true);
    } else if (location.pathname === `/jobs/${encodeUsername}`) {
      setShowEditProfile(true);
    }
  }, [location, userName]);

  return (
    <section className="w-11/12 mx-auto cursor-pointer relative">
      <div className="flex justify-end items-center" onClick={() => setShowDropdown(!showDropdown)}>
        <FontAwesomeIcon
          icon={faHouseUser}
          className=" border rounded-full w-30 h-30 border-black p-2"
        />
        <FontAwesomeIcon icon={faCaretDown} className="pl-2" />
      </div>
      {showDropdown ? (
        <ul className="absolute bg-white border border-black border-opacity-20 left-[auto] right-0 top-10 min-w-[160px] rounded-md shadow-[0_6px_12px_0_rgba(0,0,0,0.18)]">
          {showAlt ? (
            <li className=" px-5 border-b py-2">Hi, {userName}</li>
          ) : (
            <li className="px-5 hover:bg-[#f5f5f5] text-[#262626] py-2">
              <Link to={paths.jobs} className="block">
                Jobs
              </Link>
            </li>
          )}

          {showEditProfile ? (
            <li className="px-5 hover:bg-[#f5f5f5] text-[#262626] py-2">
              <Link to={`/edit/jobs/${userName}`} className="block">
                Edit Profile
              </Link>
            </li>
          ) : (
            <li className="px-5 hover:bg-[#f5f5f5] text-[#262626] py-2">
              <Link to={`/jobs/${userName}`} className="block">
                Profile
              </Link>
            </li>
          )}

          <li className="px-5 hover:bg-[#f5f5f5] text-[#262626] py-2">
            <Link to={paths.jobs} className="block">
              Logout
            </Link>
          </li>
        </ul>
      ) : (
        ''
      )}
    </section>
  );
};

export default Dropdown;
