import React from 'react';
import { Loader } from './Loader.style';
import loader from '../../assets/images/spinner-gap.png';

const Loading = () => {
  const loadingStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 68px)',
    minWidth: '100vh',
  };
  return (
    <Box sx={loadingStyle}>
      <Loader src={loader} />
    </Box>
  );
};

export default Loading;