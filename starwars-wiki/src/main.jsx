import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CharacterProvider } from './context/CharacterProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <CharacterProvider>
        <App />
    </CharacterProvider>
)
