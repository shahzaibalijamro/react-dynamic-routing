import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../screens/Home.jsx'
import SinglePage from '../screens/SinglePage.jsx'
import Layout from '../Layout.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/singlePage/:id",
    element: <SinglePage />
  },
  {
    path: "*",
    element: <h1>NOT FOUND!</h1>
  }
]
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
