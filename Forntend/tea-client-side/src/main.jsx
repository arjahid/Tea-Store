
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import{
  createBrowserRouter,
  RouterProvider,
}from 'react-router-dom'
import App from './App'
import AddTea from './components/AddTea'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import AllTea from './components/AllTea'
import UpdateTea from './components/UpdateTea'
import TeaDetails from './TeaDetails'
import AuthProvider from './Provider/AuthProvider'
import User from './components/User'
import PrivateRouter from './router/PrivateRouter'
const router = createBrowserRouter([
  {
    path: '/',
    element: <AllTea></AllTea>,
    loader:()=>fetch('http://localhost:7000/tea')
  },
  {
    path: '/addtea',
    element:<PrivateRouter><AddTea></AddTea></PrivateRouter>
  },
  {
    path: '/signup',
    element:<SignUp></SignUp>
  },
  {
    path: '/signin',
    element:<SignIn></SignIn>
  },
  {
    path:'/updatetea/:id',
    element:<UpdateTea></UpdateTea>,
    loader:({params})=>fetch(`http://localhost:7000/tea/${params.id}`)
  },
  {
    path:'/teadetails/:id',
    element:<TeaDetails></TeaDetails>,
    loader:({params})=>fetch(`http://localhost:7000/tea/${params.id}`)
  },
  {
    path:'user',
    element:<PrivateRouter><User></User></PrivateRouter>,
    loader:()=> fetch('http://localhost:7000/user')
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider> <RouterProvider router={router}/></AuthProvider>
  </StrictMode>,
)