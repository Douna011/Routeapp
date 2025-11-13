import './App.css';

import { createBrowserRouter,RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element:<h2>Home Page</h2>,
  },
  {
    path:"/about",
    element:<h2>About Page</h2>,
  },
  {
    path:"/service",
    element:<h2>Service Page</h2>,
  }
]);



function App() {


  return <div className=" flex justify-center  w-0.5/2 bg-blue-400 p-2  ">
     <RouterProvider router={router} />
    <h2 className="font-bold bg-green-500 p-2 w-100 flex justify-center items-center rounded-2xl border-2">Hello world</h2>
  </div> 
  
      
}

export default App
