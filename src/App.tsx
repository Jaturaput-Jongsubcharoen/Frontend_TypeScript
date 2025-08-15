import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/navigatorBar/NavBar'

function App() {
  //Hello! This is Jaturaput Jongsubcharoen
  return (
    <> 
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
