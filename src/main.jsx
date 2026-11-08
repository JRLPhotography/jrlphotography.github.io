import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import '../assets/css/main.css';
import './styles.css';

const mountNode = document.getElementById('root');
createRoot(mountNode).render(<App page={mountNode.dataset.page} />);
