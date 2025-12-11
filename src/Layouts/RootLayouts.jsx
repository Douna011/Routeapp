import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const layout = () => {
  return (
    <div>
      <NavBar/>
    <h1>Douna</h1>
      <Outlet/>
      <Footer/> 
    </div>
  )
}

export default layout
