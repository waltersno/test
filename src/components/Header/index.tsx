import React from 'react';
import BackPicture from '../../assets/back-svgrepo-com.svg';
import { useNavigate } from 'react-router-dom';
import { PageNames } from '../HOC/hoc-types';
import classes from './header.module.scss';

interface IHeader {
  title: string;
}

const Header: React.FC<IHeader> = ({ title }) => {
  const navigate = useNavigate();

  const backHandler = () => {
    navigate(-1);
  };

  return (
    <header className={classes.header}>
      {title !== PageNames.HOME && (
        <button className={classes.backBtn} onClick={backHandler}>
          <img src={BackPicture} alt="" />
        </button>
      )}
      <div>{title}</div>
    </header>
  );
};

export default Header;
