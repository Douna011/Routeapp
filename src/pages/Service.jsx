import { Link } from "react-router-dom"

const Service = () => {
  return (
    <div>
      <h1>Service</h1>
     <Link to="/" className="text-2xl p-4">Back Home </Link>
     <Link to="/about">About</Link>
    </div>
  )
}

export default Service
