import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { BrowserRouter } from 'react-router-dom'
import AppContextProvidor from './context/appContext.jsx'
import Layout from './Layout.jsx'
import RouteChangeReload from './components/RouterReload.jsx'
import { Provider } from 'react-redux';
import store from "./redux/Store.jsx"
import { ToastContainer, toast } from 'react-toastify';
createRoot(document.getElementById('root')).render(

    <BrowserRouter>

    <Provider store={store}>
    <ToastContainer />
    <RouteChangeReload/>
    <Layout>
    <AppContextProvidor>
    <App />
    </AppContextProvidor>
    </Layout>
    </Provider>
    </BrowserRouter>

)
