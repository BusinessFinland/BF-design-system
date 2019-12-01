import React from 'react';
import { NavLink } from 'react-router-dom';

import { getPageName, replaceDashWithSpace, capitalizeString } from '../../utils';

import './styles.css';

const Sidebar = ({ parentPages, children }) => {
  const renderLink = page => {
    const pageName = getPageName(page.fileName);

    return (
      <NavLink
        exact
        to={page.path}
        key={page.fileName}
        className='bf--sidebar-link'
        activeClassName='bf--sidebar-link_active'
      >
        {replaceDashWithSpace(pageName)}
      </NavLink>
    );
  };

  const parentLinks = (
    <div className='bf--sidebar-category'>{parentPages.map(page => renderLink(page))}</div>
  );

  const restLinks = Object.keys(children).map(category => {
    return (
      <div key={category} className='bf--sidebar-category'>
        <div className='bf--sidebar-title'>{capitalizeString(category)}</div>
        {children[category].map(page => renderLink(page))}
      </div>
    );
  });

  return (
    <nav className='bf--sidebar'>
      {parentLinks}
      {restLinks}
    </nav>
  );
};

export default Sidebar;
