import React from 'react';

import './ErrorIndicator.css';

const ErrorIndicator = () => {
  return (
      <div className='ErrorIndicator'>
          <span className='boom'>BOOM!</span>
          <span>Something is wrong</span>
          <span>(but we already sent droids to fix it)</span>
      </div>
  );
};

export default ErrorIndicator;