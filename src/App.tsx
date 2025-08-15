import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/navigatorBar/navBar'

function App() {

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
