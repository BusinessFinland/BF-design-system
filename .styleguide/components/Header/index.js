import React from 'react';
import logo from '../../../images/logo.png';
import githubIcon from '../../../images/github.svg';

import { NavLink } from 'react-router-dom';

import './styles.css';

const Header = ({ version = '', repo = '#', description = '' }) => {
  return (
    <header className='wst--header'>
      <div className='wst--header-meta'>
        <div className='wst--logo'>
          <NavLink to='/'>
            <img className='wst--img' alt='logotype' src={logo} />
          </NavLink>
        </div>
        <div className='wst--meta-description'>{description}</div>
      </div>
      <div className='wst--header-meta'>
        <div className='wst--meta-version'>{version}</div>
        <a target='_blank' href={repo}>
          <img className='wst--img' alt='github' src={githubIcon} />
        </a>
      </div>
    </header>
  );
};

export default Header;
