import React from 'react';
import { NavLink } from 'react-router-dom';

import { getPageName, isParentCategory, replaceDashWithSpace } from '../../utils';

import './styles.css';

const Sidebar = ({ parentPages, children }) => {
  const renderLink = page => {
    const pageName = getPageName(page.fileName);

    return (
      <NavLink
        exact
        to={page.path}
        key={page.fileName}
        className='wst--sidebar-link'
        activeClassName='wst--sidebar-link_active'
      >
        {replaceDashWithSpace(pageName)}
      </NavLink>
    );
  };

  const parentLinks = (
    <div className='wst--sidebar-category'>{parentPages.map(page => renderLink(page))}</div>
  );

  const restLinks = Object.keys(children).map(category => {
    return (
      <div key={category} className='wst--sidebar-category'>
        <div className='wst--sidebar-title'>{category}</div>
        {children[category].map(page => renderLink(page))}
      </div>
    );
  });

  return (
    <nav className='wst--sidebar'>
      {parentLinks}
      {restLinks}
    </nav>
  );
};

export default Sidebar;
