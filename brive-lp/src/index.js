import React from 'react'
import ReactDOM from 'react-dom'
import WebFont from 'webfontloader';


// Your top level component
import App from './App'

// Export your top level component as JSX (for static rendering)
export default App

if (typeof window !== 'undefined') {
    WebFont.load({
        google: {
            families: ['IBM Plex Sans:400,500,600,700'],
        },
    });
}

// Render your app
if (typeof document !== 'undefined') {



  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render
  const render = Comp => {
    renderMethod(<Comp />, document.getElementById('root'))
  }

  // Render!
  render(App)
}
