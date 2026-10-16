import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NotFound from './components/NotFound.jsx'
import './index.css'

const path = window.location.pathname;
const is404 = path !== '/' && path !== '/index.html';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {is404 ? <NotFound /> : <App />}
  </React.StrictMode>,
)
