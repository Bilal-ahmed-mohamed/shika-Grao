import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import Form from './Form.jsx'
import { TurfsContextProvider } from './context/TurfsContext.jsx';
import {AuthContextProvider} from './context/AuthContext.jsx'







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <AuthContextProvider>
    <TurfsContextProvider>
    <App />
    </TurfsContextProvider>
    </AuthContextProvider>
    
    {/* <Form/> */}
  
   
   
  
  </React.StrictMode>,
) 
