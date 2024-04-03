import {BrowserRouter, Routes, Route} from "react-router-dom"
import Nav from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Service from './Pages/Services'
import LogIn from "./Components/Form"
import LogOut from "./Pages/Log_Out"
// import Practice from './Components/Practice_useEffect'


function App (){
  
  return (
    <>
      <BrowserRouter>
      <Nav/>
      {/* <Practice/> */}
        <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path='/about' element ={<About/>}/>
          <Route path='/service' element ={<Service/>}/>
          <Route path='/login' element ={<LogIn/>}/>
          <Route path='*' element ={<LogOut/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
