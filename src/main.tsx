import './services/firebase/firebase.ts'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AuthProvider from '@/contexts/AuthContext'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <App/>
    </AuthProvider>
  </React.StrictMode>,
)



    // "@tldraw/tldraw": "^2.0.0-canary.ff9c1655f959",