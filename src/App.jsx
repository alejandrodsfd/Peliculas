import { useState } from 'react'
import './App.css'
import { MyRoutes } from "./routers/routes"
import { Link, BrowserRouter as Router } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router basename="/">
      <div className='main'>
        <header>
          <Link className='header__link' to={"/"}>
            <h1 className='title'> 🎬Peliculas</h1>
          </Link>
        </header>
        <MyRoutes />
      </div>
    </Router>
  )
}

export default App
