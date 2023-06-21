import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { UserContext, UserProvider } from './context/UserContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
      <ToastContainer theme='dark' pauseOnHover={false} newestOnTop/>
    </BrowserRouter>
  </React.StrictMode>,
)
