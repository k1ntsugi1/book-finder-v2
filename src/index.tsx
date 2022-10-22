import './styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';
import App from './App';
import store from './store/index';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom"
const root = createRoot(document.querySelector('#root')!);

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)