import '@/styles/globals.css'
import Dash from './_dash'
import Registration from './_registration'
import Login from './_login'
import Create from './_create'
import Homepage from './_homepage'
import Update from './_update'

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage/>}></Route>
      <Route exact path="/login" element={<Login/>}></Route>
      <Route exact path="/registration" element={<Registration/>}></Route>
      <Route exact path="/dashboard" element={<Dash/>} ></Route>
      <Route exact path="/create" element={<Create/>} ></Route>
    </Routes>
  )
}
