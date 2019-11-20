import React from 'react';
import ReactDOM from 'react-dom';

import {
  getAnchor,
  getPageName,
  importAllImages,
  isParentCategory,
  getPagesByCategory,
  replaceDashWithSpace,
  capitalizeFirstLetter
} from './utils';

// Code hightlight
import 'highlight.js/styles/github-gist.css';
// Styleguide styles
import './styles.css';
// Compoenents styles
import '../css/styles.css';
// Import all images so webpack can process them
importAllImages();

import pages from './pages.json';
const pagesByCategory = getPagesByCategory(pages);

ReactDOM.render(<Styleguide pages={pagesByCategory} />, document.getElementById('root'));

function Styleguide({ pages }) {
  const renderPageContent = page => {
    const pageName = getPageName(page.fileName);

    return (
      <div key={page.fileName} id={pageName} className='wst--componentbody'>
        <div dangerouslySetInnerHTML={{ __html: page.body }}></div>
      </div>
    );
  };

  const renderNavContent = page => {
    const pageName = getPageName(page.fileName);
    const navAnchor = getAnchor(pageName);

    return (
      <div key={page.fileName} className='wst--navlink'>
        <a href={navAnchor}>{capitalizeFirstLetter(replaceDashWithSpace(pageName))}</a>
      </div>
    );
  };

  const pageBodyContent = Object.keys(pages).map(category => {
    const categoryName = capitalizeFirstLetter(category);

    return (
      <div key={category} className='wst--pagecontent'>
        {!isParentCategory(category) && <h1 className='wst--caterogyheader'>{categoryName}</h1>}
        {pages[category].map(page => renderPageContent(page))}
      </div>
    );
  });

  const pageNavContent = Object.keys(pages).map(category => {
    const categoryName = capitalizeFirstLetter(category);

    return (
      <div key={category} className='wst--navcategory'>
        {!isParentCategory(category) && <div className='wst--navheader'>{categoryName}</div>}
        {pages[category].map(page => renderNavContent(page))}
      </div>
    );
  });

  return (
    <>
      <div className='wst--sidebar'>{pageNavContent}</div>
      <div className='wst--page'>
        <div className='wst--body'>
          <div>{pageBodyContent}</div>
        </div>
      </div>
    </>
  );
}
