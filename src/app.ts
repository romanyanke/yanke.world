import './script/theme'
import './script/photo'
import './script/switch-theme'
import './script/pencil'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(
    new URL('./offline.js', import.meta.url),
    { type: 'module', scope: '/' },
  )
}
