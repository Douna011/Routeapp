import './App.css';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { HomePage,About,Service,ErrorPage} from './pages';
import RootLayout from './Layouts/RootLayouts';
import AboutLayout from './Layouts/AboutLayout';

const router = createBrowserRouter([
  {
    path:"/",
    element:<RootLayout/>,
    errorElement:<ErrorPage />,
    children:[ 
       {
    // path:"home",
    index:true,
    element:<HomePage/>,
  },
       {
    path:"about",
    element:<AboutLayout/>,
    children:[
      {
        path:"vision",
        element:<h4>Visions...</h4>
      },
     
      {
        path:"mission",
        element:<h4>Mission...</h4>
      },
     
      {
        path:"goal",
        element:<h4>Goals...</h4>
      },
     
    ],
  },
  {
    path:"service",
    element:<Service/>,
  }
    ]
  },
 
]);



function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
