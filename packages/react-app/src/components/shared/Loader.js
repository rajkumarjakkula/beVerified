import React from 'react';
import loader from './../../assets/spinner-gap.png';
const Loading = () => {
  const loadingStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 250px)',
    minWidth: '100vh',
  };
  return (
    <div style={loadingStyle}>
      <img className='image' src={loader}/>
    </div>
  );
};

export default Loading;