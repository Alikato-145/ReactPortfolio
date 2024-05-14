import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Nav.jsx'
import Home from './Home.jsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import Aboutme from './Aboutme.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
    <main className="dark text-foreground bg-background">
      <Nav/>
      <Home/>
      <Aboutme/>
    </main>
    </NextUIProvider>
  </React.StrictMode>,
)
