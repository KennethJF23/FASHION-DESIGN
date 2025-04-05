import Home from './pages/Home'
import Canvas  from './canvas'
import Customizer from './pages/Customizer'
import {Routes,Route} from "react-router-dom"
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/fonts/slick.woff";
import "slick-carousel/slick/fonts/slick.ttf";

function App() {

  return (
    <>
     <main className='app transition-all ease-in'>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
      <Canvas/>
      <Customizer/>
     </main>
    </>
  )
}

export default App
