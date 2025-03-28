import Home from './pages/Home'
import Canvas  from './canvas'
import Customizer from './pages/Customizer'
import {Routes,Route} from "react-router-dom"
import Login from './pages/Login'
import Register from './pages/Register'
function App() {

  return (
    <>
     <main className='app transition-all ease-in'>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      </Routes>
      <Canvas/>
      <Customizer/>
     </main>
    </>
  )
}

export default App
