import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.querySelector('#root')!);

root.render(<App />)