import axe from 'axe-core';
import cx from 'classnames';
import React, { useState, useEffect } from 'react';

import './styles.css';
import AYTag from '../AYTag';

const Page = ({ page }) => {
  const [violations, setViolations] = useState(null);
  const [isPageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
    axe.run(function(err, results) {
      if (err) throw err;

      setViolations(results.violations);
    });

    window.scrollTo(0, 0);
  }, []);

  const classNames = cx({
    'bf--page': true,
    'bf--page_loaded': isPageLoaded
  });

  return (
    <main className={classNames}>
      <div className='bf--page-body'>
        <AYTag violations={violations} />
        <div className='bf--page-bodyHTML' dangerouslySetInnerHTML={{ __html: page.body }} />
      </div>
    </main>
  );
};

export default Page;
