import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: '10px', 
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',

  },
  heading: {
    color: '#C5D3E8', // Keep the original color
    fontWeight: 'bold', // Keep it bold for prominence
    fontFamily: '"Playfair Display", serif', // A sophisticated serif font for an elegant look
    fontSize: '48px', // Slightly larger font size for impact
    textTransform: 'capitalize', // Capitalize only the first letter of each word
    letterSpacing: '1px', // Increase letter spacing for a modern, airy feel
    textShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
    lineHeight: '1.4', // Slightly larger line-height for better spacing
    padding: '10px 20px', // Add padding for spacing around text
    background: 'linear-gradient(45deg, #FF204E, #FF5733)', // Light gradient background
    backgroundClip: 'text', // Clip the background to the text
    WebkitBackgroundClip: 'text', // Ensure background clip works in Webkit-based browsers (Safari)
  }
  ,
  
  image: {
    marginLeft: '15px',
  },
  mainContainer: {
    display: 'flex',  
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',  
    },
  },
}));
