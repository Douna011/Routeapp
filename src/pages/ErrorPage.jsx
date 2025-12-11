import img from "../assets/error-1.jpg"
import { Link } from "react-router-dom"
const ErrorPage = () => {
  return (
    <div>
      <img src={img} alt="not found" className="h-50 "/>
      <Link to="/">Go back to Home</Link>
    </div>
  )
}

export default ErrorPage
