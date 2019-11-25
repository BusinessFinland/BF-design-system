import axe from 'axe-core';
import React, { useState, useEffect } from 'react';

import './styles.css';
import AYTag from '../AYTag';

const Page = ({ page }) => {
  const [violations, setViolations] = useState(null);

  useEffect(() => {
    axe.run(function(err, results) {
      if (err) throw err;

      setViolations(results.violations);
    });

    window.scrollTo(0, 0);
  }, []);

  return (
    <main className='wst--page'>
      <div className='wst--page-body'>
        <AYTag violations={violations} />
        <div dangerouslySetInnerHTML={{ __html: page.body }} />
      </div>
    </main>
  );
};

export default Page;
