import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box
      sx={{ mt: '80px', bgcolor: '#fff3f4', borderTop: '3px solid #ff2526' }}
    >
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" widht="200px" height="40px" />
        <Typography sx={{ color: '#000', fontSize: '18px' }}>
          Made With JS Mastery
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
