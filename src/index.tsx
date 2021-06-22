import { render, hydrate } from 'react-dom'
import App from './App'

const root = document.getElementById('romanyanke')
const action = root?.hasChildNodes() ? hydrate : render

action(<App />, root)
