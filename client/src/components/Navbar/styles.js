import { styled } from '@mui/material/styles';

export const AppBarStyled = styled('div')(({ theme }) => ({
  borderRadius: '10px',
  margin: '20px 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 30px',
  backgroundColor: '#1f1f1f', // Dark gray background
  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.3)', // Subtle shadow
}));

export const HeadingStyled = styled('h1')(({ theme }) => ({
  fontFamily: '"Sacramento", cursive',
  fontSize: '2rem',
  fontWeight: 700,
  color: '#A87C7C',
  textShadow: '1px 1px 4px rgba(0, 0, 0, 0.6)', // Subtle shadow for depth
  textDecoration: 'none',
  letterSpacing: '1.2px',
  margin: 0, // Remove default margin
}));

export const ImageStyled = styled('img')(() => ({
  marginLeft: '15px',
  borderRadius: '50%',
  height: '50px', // Logo height
  width: '50px', // Logo width
  objectFit: 'cover',
  border: '2px solid #ffffff', // Thin white border for separation
}));
