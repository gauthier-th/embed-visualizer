import App from './components/App'
import './css/tachyons.css'
import './css/codemirror-one-dark.css'
import {
  parseEmbedTitle as parseTitle,
  parseAllowLinks as parseContent
} from './components/Markdown'

export default App

export { parseTitle, parseContent }
