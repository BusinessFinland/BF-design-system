import axe from 'axe-core';
import cx from 'classnames';
import React, { useState, useEffect } from 'react';

import './styles.css';
import AYTag from '../AYTag';

axe.configure({
  rules: [
    {
      id: 'scrollable-region-focusable',
      enabled: false
    }
  ]
});

const Page = ({ page }) => {
  const [violations, setViolations] = useState(null);
  const [isPageLoaded, setPageLoaded] = useState(false);

  const checkAccessibility = () => {
    // Make axe.run a sync function
    // Otherwise axe.run can overlap a previous execution
    // which will cause an error
    setTimeout(() => {
      axe.run(function(err, results) {
        if (err) throw err;

        setViolations(results.violations);
        setPageLoaded(true);
      });
    }, 0);
  };

  useEffect(() => {
    if (page.hasComponent) {
      checkAccessibility();
    } else {
      setPageLoaded(true);
    }

    window.scrollTo(0, 0);
  }, []);

  const hasNoA11yCheck = isPageLoaded && !page.hasComponent;

  const classNames = cx({
    'bf--page': true,
    'bf--page_loaded': (isPageLoaded && violations) || hasNoA11yCheck
  });

  return (
    <main className={classNames}>
      <div className='bf--page-body'>
        {!hasNoA11yCheck && <AYTag violations={violations} onRefresh={checkAccessibility} />}
        <div className='bf--page-bodyHTML' dangerouslySetInnerHTML={{ __html: page.body }} />
      </div>
    </main>
  );
};

export default Page;
