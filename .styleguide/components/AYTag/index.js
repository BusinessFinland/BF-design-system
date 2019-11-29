import React from 'react';

import './styles.css';

const AYTag = ({ violations, onRefresh }) => {
  const renderTag = (status = '', message = '', description = '') => {
    return (
      <>
        <div className='bf--ay-title'>
          <div className={`bf--ay-tag bf--ay-tag_${status.toLowerCase()}`}>{status}</div>
          <div className='bf--ay-message'>{message}</div>
        </div>
        {description && <div className='bf--ay-description'>{description}</div>}
        {
          <div className='bf-link' onClick={onRefresh}>
            Refresh results
          </div>
        }
      </>
    );
  };

  if (!violations)
    return <div className='bf--ay'>{renderTag('Loading', 'Checking accessability')}</div>;

  if (violations && !violations.length)
    return <div className='bf--ay'>{renderTag('Passed', 'All accessibility tests passed')}</div>;

  return violations.map(violation => {
    const violationHelp = (
      <a target='_blank' href={violation.helpUrl}>
        {violation.help}
      </a>
    );

    return (
      <div key={violation.id} className='bf--ay'>
        {renderTag(violation.impact, violationHelp, violation.description)}
        <div>
          {violation.nodes.map(node => {
            return (
              <div key={node.html}>
                <code className='bf--ay-code'>{node.html}</code>
                <div className='bf--ay-summary'>{node.failureSummary}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  });
};

export default AYTag;
