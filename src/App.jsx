
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Body from './body'
import Home from './home'
import About from './about'
import Contact from './contact'
import Gallary from './Gallary'
import Homedetail from './homedetail'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<Body/>,
      children:[
        {
          path:"/",
          element:<Home/>,
        },
        {
          path:"/:detail",
          element:<Homedetail/>,
        },
        {
          path:"/about",
          element:<About/>,
        },
        {
          path:"/gallary",
          element:<Gallary/>,
        },
        {
          path:"/contact",
          element:<Contact/>,
        }
        
      ]
    }
  ]
)


function App() {

  const querycline= new QueryClient;

 
  return (
    <>
    <QueryClientProvider client={querycline}>
    <RouterProvider router={router} />

    </QueryClientProvider> 
    </>

  ) 
}

export default App
