import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Navbar from './contents/Navbar.tsx';
import Hero from './contents/Hero.tsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <App />
  </React.StrictMode>,
)
