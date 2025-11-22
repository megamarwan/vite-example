import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import ClickCounter from './components/conter.jsx'
import Header from  './components/Header.jsx'
import Navigation from './components/navbar.jsx'
import RouteComponent from './components/route.jsx'
import App from './components/button.jsx'
import Dashboard from './components/dashboard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <Dashboard/>
 <RouteComponent/>
 <Navigation/> 
 <App/>
  <ClickCounter />
  <Header />
  </StrictMode>,
)
