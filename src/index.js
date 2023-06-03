import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createRoot } from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from "./redux/store"
import { Link } from 'react-router-dom';

const theme = createTheme({
    palette: {
        mode: 'light',
    },
})

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>

            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>

        </React.StrictMode>
    </Provider >

);

reportWebVitals();
