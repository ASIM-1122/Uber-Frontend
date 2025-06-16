import { Routes, Route } from 'react-router-dom'
import Start from './Pages/Start'
import UserLogin from './Pages/UserLogin'
import UserRegister from './Pages/UserRegister'
import DriverLogin from './Pages/DriverLogin'
import DriverRegister from './Pages/DriverRegister'
import DriverProfile from './Pages/DriverProfile'

import './index.css'
import Home from './Pages/Home'
import UserProvider from './Context/UserContext'

import UserProtectedWrapper from './Pages/UserProtectedWrapper'
import UserLogout  from './Pages/UserLogout'
import DriverProtectedWrapper from './Pages/DriverProtectedWrapper'
import DriverLogout from './Pages/DriverLogout'

export default function App() {
  return (
    <div>
     <Routes>

    <Route path="/" element={<Start />} />
    <Route path='/users/register' element= {<UserRegister/>} />
    <Route path='/users/login'  element ={<UserLogin/>} />
    <Route path='/drivers/register' element= {<DriverRegister/>} />
    <Route path='/drivers/login'  element ={<DriverLogin/>} />
    <Route path='/drivers/profile' element={
      <UserProtectedWrapper>
      <DriverProfile />
      </UserProtectedWrapper>}
    />

    <Route path='/home' element={
      
      <UserProtectedWrapper>
      <Home />
      </UserProtectedWrapper>
    }  />
   

    <Route path='/users/logout' element={
      <UserProtectedWrapper>
      <UserLogout/>
      </UserProtectedWrapper>}
    />
    <Route
  path="/drivers/logout"
  element={
    <DriverProtectedWrapper>
      <DriverLogout />
    </DriverProtectedWrapper>
  }
/>


    </Routes>
    </div>
  )
}