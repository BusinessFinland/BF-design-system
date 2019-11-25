import React from 'react';

import './styles.css';

const AYTag = ({ violations }) => {
  const renderTag = (status = '', message = '', description = '') => {
    return (
      <>
        <div className='wst--ay-title'>
          <div className={`wst--ay-tag wst--ay-tag_${status.toLowerCase()}`}>{status}</div>
          <div className='wst--ay-message'>{message}</div>
        </div>
        {description && <div className='wst--ay-description'>{description}</div>}
      </>
    );
  };

  if (!violations)
    return <div className='wst--ay'>{renderTag('Loading', 'Checking accessability')}</div>;

  if (violations && !violations.length)
    return <div className='wst--ay'>{renderTag('Passed', 'All accessibility tests passed')}</div>;

  return violations.map(violation => {
    const violationHelp = (
      <a target='_blank' href={violation.helpUrl}>
        {violation.help}
      </a>
    );

    return (
      <div key={violation.id} className='wst--ay'>
        {renderTag(violation.impact, violationHelp, violation.description)}
        <div>
          {violation.nodes.map(node => {
            return (
              <div key={node.html}>
                <code className='wst--ay-code'>{node.html}</code>
                <div className='wst--ay-summary'>{node.failureSummary}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  });
};

export default AYTag;
