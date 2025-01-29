import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },

  paper: {
    padding: "16px", // Add padding inside the paper
    margin: "20px auto", // Center the paper on the page
    maxWidth: "600px", // Limit the maximum width
    borderRadius: "15px", // Rounded corners
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Add subtle shadow
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px", // Add space between inputs
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginTop: "10px",
  },
}));