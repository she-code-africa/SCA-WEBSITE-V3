import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const BecomeAmemberButton = ({
  bg,
  bgHover,
  color,
  colorHover,
  border,
  title = 'Become a Member',
  url = '#'
}) => {
  return (
    <>
      <Link
        to={url}
        className={`pl-[32px] pr-[40px] py-[15px] ${bg} ${color} text-sm font-medium rounded-lg hover:${colorHover} hover:${bgHover} border ${border} transition duration-300`}>
        {title}&nbsp;
        <FontAwesomeIcon icon={faAngleRight} />
      </Link>
    </>
  );
};

export default BecomeAmemberButton;
