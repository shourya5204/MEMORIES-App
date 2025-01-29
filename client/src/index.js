import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Provider} from 'react-redux'; 
import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware , compose} from 'redux' ;
import {thunk} from 'redux-thunk';
import reducers from './reducers'; 
import './index.css';



const store = configureStore({
  reducer: reducers, // Pass the reducer correctly
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});


const theme = createTheme();


const rootElement = document.getElementById('root');


const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
