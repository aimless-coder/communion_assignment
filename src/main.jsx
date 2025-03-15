import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EventPage from './comps/EventPage/EventPage'

const router = createBrowserRouter([
  {
    path: '/',
    element:<App/>
  },
  {
    path: '/events',
    element:<EventPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
