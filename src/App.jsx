import './App.css';
import { createRoutesFromElements, Router, RouterProvider } from "react-router-dom";
import { HomePage,About,Service,ErrorPage} from './pages';
import RootLayout from './Layouts/RootLayouts';
import AboutLayout from './Layouts/AboutLayout';
import { createBrowserRouter, Route } from 'react-router-dom';
// First approach using createBrowserRouter with route objects this one is the very basic way to create route in react router dom v6.4 and above
// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<RootLayout/>,
//     errorElement:<ErrorPage />,
//     children:[ 
//        {
//     // path:"home",
//     index:true,
//     element:<HomePage/>,
//   },
//        {
//     path:"about",
//     element:<AboutLayout/>,
//     children:[
//       {
//         path:"vision",
//         element:<h4>Visions...</h4>
//       },
     
//       {
//         path:"mission",
//         element:<h4>Mission...</h4>
//       },
     
//       {
//         path:"goal",
//         element:<h4>Goals...</h4>
//       },
     
//     ],
//   },
//   {
//     path:"service",
//     element:<Service/>,
//   }
//     ]
//   },
 
// ]);

// Second approach using createBrowserRouter and createRoutesFromElements
const routers = createBrowserRouter(createRoutesFromElements(
  
  
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutLayout />}>  
        <Route path="vision" element={<h4>Visions...</h4>} />
        <Route path="mission" element={<h4>Mission...</h4>} />
        <Route path="goal" element={<h4>Goals...</h4>} />    
      </Route>
      <Route path="service" element={<Service />} />

    </Route>

        
)
)



function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* <RouterProvider router={router} /> */}
        <RouterProvider router={routers} />

      </div>
    </div>
  );
}

export default App;
