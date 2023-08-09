import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Task from './pages/Task-Semana06/Task.jsx'

// import { ThemeProvider } from './context/ThemeContext.jsx'
// import { AuthProvider } from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AuthProvider>
    <ThemeProvider> */}
      <App/>
      {/* <Task /> */}
    {/* </ThemeProvider>
    </AuthProvider> */}
  </React.StrictMode>,
)