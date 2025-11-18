import { Router,Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div>
      <h2 className="text-2xl hover:via-yellow-200 tra">Home Page</h2>
      <Link to="/about" className="text-2xl text-yellow-400 p-1 gap-2">About</Link>
      <Link to="/Service">Service</Link>
    </div>
  )
}

export default HomePage
