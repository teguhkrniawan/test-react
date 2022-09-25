// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import { Container } from '@mui/material';
import React from 'react';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
        <Container fixed>
          <header style={{textAlign: "center"}}>
            <h1 id="title">Call a Friend</h1>
            <p id="subtitle" style={{marginTop: -20}}>Your friendly contact app</p>
          </header>
        </Container>
    </>
  );
};

export default Header;
