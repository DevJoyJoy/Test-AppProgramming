import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { UserData } from './Pages/Users'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Users" element={<UserData/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
