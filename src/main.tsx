import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import Home from './pages/Home'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
    <ToastContainer
      position="top-right"
      autoClose={4000}
      newestOnTop
      closeOnClick
      pauseOnHover
      theme="light"
    />
  </StrictMode>,
)
