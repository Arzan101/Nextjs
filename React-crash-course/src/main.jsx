import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider , createBrowserRouter} from 'react-router-dom'
import NewPost from './components/NewPost.jsx'

const router = createBrowserRouter([
  {path:'/',element:<App/>},
  {path:'/create-post',element:<NewPost/>},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
