import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Products from './component/product/products.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />
  },
  {
    path:'/products',
    element:<Products />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
