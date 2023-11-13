
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { theme } from './theme';
import GlobalStyle from './GlobalStyle';
import './index.css';
import App from './App.tsx'
import './index.css'
import './services/firebase/firebase.ts'
import AuthProvider from '@/contexts/AuthContext'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
<AuthProvider>
      <StyledEngineProvider injectFirst>
 <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyle />
       <App/>
      </ThemeProvider>
    </StyledEngineProvider>
    </AuthProvider>

  </React.StrictMode>,
)



    // "@tldraw/tldraw": "^2.0.0-canary.ff9c1655f959",