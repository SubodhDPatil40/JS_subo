import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  //direct render without saving reference in root var
  //heree in vit  react script, testing lib  are avoided to amke lightweight
  
  
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
