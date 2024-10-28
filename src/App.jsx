import { useState } from 'react'
import './App.css'
import { MyRoutes } from "./routers/routes"
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
function App() {
  const [count, setCount] = useState(0)

  return (
    <HelmetProvider>
      <Router basename="/Peliculas">
        <div className='main'>
          <header className='header'>
            <Link className='header__link' to={"/"}>
              <h1 className='title'> 🎬Peliculas</h1>
            </Link>
            <Link to={"/about"} className='header__link'>
              <h1 className='title'> Acerca de</h1>
            </Link>
          </header>
          <MyRoutes />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
