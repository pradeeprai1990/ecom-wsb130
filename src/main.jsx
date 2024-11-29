import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './Pages/RootLayout.jsx'
import Home from './Pages/Home.jsx'
import Cart from './Pages/Cart.jsx'
import MainContext from './MainContext.jsx'
import 'react-toastify/dist/ReactToastify.css';
  
let router=createBrowserRouter(
  [
    {
      path:'/',
      element:<RootLayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/cart',
          element:<Cart/>
        }
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(

        <MainContext>
            <RouterProvider router={router}/>
        </MainContext>
  
)
