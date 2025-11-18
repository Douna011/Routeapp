import './App.css';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { HomePage,About,Service, Layout } from './pages';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[ 
       {
    // path:"home",
    index:true,
    element:<HomePage/>,
  },
       {
    path:"about",
    element:<About/>,
  },
  {
    path:"service",
    element:<Service/>,
  }
    ]
  },
 
]);



function App() {


  return <div className=" flex justify-center  w-0.5/2 bg-blue-400 p-2  ">
     <RouterProvider router={router} />
    <h2 className="font-bold bg-green-500 p-2 w-100 flex justify-center items-center rounded-2xl border-2">Hello world</h2>
  </div> 
  
      
}

export default App;
