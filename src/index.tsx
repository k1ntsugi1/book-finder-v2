import './styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './i18next/i18next'

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom"

import store from './store/index';

import App from './App';


const root = createRoot(document.querySelector('#root')!);

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)