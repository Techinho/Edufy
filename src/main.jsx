import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { BrowserRouter } from 'react-router-dom'
import AppContextProvidor from './context/appContext.jsx'
import Layout from './Layout.jsx'
import RouteChangeReload from './components/RouterReload.jsx'

createRoot(document.getElementById('root')).render(

    <BrowserRouter>
    <RouteChangeReload/>
    <Layout>
    <AppContextProvidor>
    <App />
    </AppContextProvidor>
    </Layout>
    </BrowserRouter>

)
