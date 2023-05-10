import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddCaffee from './components/AddCaffee/AddCaffee.jsx'
import Updatecaffe from './components/UpdateCaffee/Updatecaffe.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    loader: ()=> fetch('https://coffee-store-server-mobassherkhandakar.vercel.app/caffees')
  },
  {
    path: 'addcaffee',
    element: <AddCaffee/>
  },
  {
    path: '/updateCoffee/:id',
    element: <Updatecaffe/>,
    loader: ({params})=> fetch(`https://coffee-store-server-mobassherkhandakar.vercel.app/caffees/${params.id}`)
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}/>
  </>,
)
