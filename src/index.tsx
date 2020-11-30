import ReactDOM from 'react-dom'
import App from './components/App'

const rootElement = document.getElementById('romanyanke')

if (rootElement) {
  if (rootElement.hasChildNodes()) {
    ReactDOM.hydrate(<App />, rootElement)
  } else {
    ReactDOM.render(<App />, rootElement)
  }
}
