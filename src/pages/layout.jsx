import { Outlet } from "react-router-dom"

const layout = () => {
  return (
    <div>
    <h1>Douna</h1>
      <Outlet/>
    </div>
  )
}

export default layout
