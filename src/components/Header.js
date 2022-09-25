// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <> 
      <Typography variant="h3" mb={2}>
        Call a Friend
      </Typography>
      <Divider mb={4}>Your friendly contact app</Divider>
    </>
  );
};

export default Header;
