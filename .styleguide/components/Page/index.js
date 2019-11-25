import axe from 'axe-core';
import React, { useState, useEffect } from 'react';

import './styles.css';

const Page = ({ page }) => {
  const [violations, setViolations] = useState(null);

  useEffect(() => {
    axe.run(function(err, results) {
      if (err) throw err;

      setViolations(results.violations);
    });

    window.scrollTo(0, 0);
  }, []);

  // FIXME: Implement design to violations
  const renderViolations = () => {
    if (!violations) return 'Checking A11Y';
    if (violations && !violations.length) return 'No accesibility issues';

    return violations.map(violation => {
      return (
        <div key={violation.id} style={{ padding: '2rem 0', borderBottom: '1px solid #ccc' }}>
          <div style={{ color: 'red' }}>{violation.impact}</div>
          <div>
            <a target='_blank' href={violation.helpUrl}>
              {violation.help}
            </a>
          </div>
          <div>{violation.description}</div>
          <div style={{ margin: '1rem 0' }}>
            {violation.nodes.map(node => {
              return (
                <div key={node.html}>
                  <div style={{ color: 'blue' }}>{node.html}</div>
                  <div>{node.failureSummary}</div>
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };

  return (
    <main className='wst--page'>
      <div className='wst--page-body'>
        <div dangerouslySetInnerHTML={{ __html: page.body }} />
        {renderViolations()}
      </div>
    </main>
  );
};

export default Page;
