import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Header from './components/Header/Header.jsx'
import Task from './pages/Task-Semana06/Task.jsx'


function App() {

  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          {/* EXERCÍCIOS */}
          <Route path='semana-06' element={<Task />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App