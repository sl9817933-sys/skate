import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const NotFound = lazy(() => import('./components/NotFound.jsx'))

const path = window.location.pathname
const is404 = path !== '/' && path !== '/index.html'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {is404 ? (
      <Suspense fallback={null}>
        <NotFound />
      </Suspense>
    ) : (
      <App />
    )}
  </React.StrictMode>,
)

