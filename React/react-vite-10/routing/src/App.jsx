import "./App.css";
import Home from "./Components/home";
import Dashboard from "./Components/dashboard";
import About from "./Components/about";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ParamComp from "./Components/ParamComp";
import Courses from "./Components/Courses";
import MockTest from "./Components/MockTest";
import Reports from "./Components/Reports";
import NotFound from "./Components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <div>
        <Navbar />
        <Home />
      </div>
  },
  {
    path: "/about",
    element:
      <div>
        <Navbar />
        <About />
      </div>
  },
  {
    path: "/dashboard",
    element: 
      <div>
        <Navbar />
        <Dashboard />
      </div>,
      children:[
        {
          path:'Courses',
          element:<Courses/>
        },
         {
          path:'MockTest',
          element:<MockTest/>
        },
         {
          path:'Reports',
          element:<Reports/>
        }
      ]
  },
  {
    path:"/student/:id",
    element: 
      <div>
        <Navbar />
        <ParamComp />
      </div>

  },
  {
    path:'*',
    element:<NotFound/>
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
