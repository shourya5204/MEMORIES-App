import React from 'react';
import { AppBarStyled, HeadingStyled, ImageStyled } from './styles';
import brandl from '../../images/brandl.png';

const Navbar = () => {
  return (
    <AppBarStyled>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <HeadingStyled>Memories</HeadingStyled>
        <ImageStyled src={brandl} alt="Logo" />
      </div>
    </AppBarStyled>
  );
};

export default Navbar;
