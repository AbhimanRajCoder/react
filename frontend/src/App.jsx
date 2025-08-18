import './App.css'



import Navbar from './assets/components/Navbar/Navbar'
import { useEffect } from 'react'
import Login from './assets/components/Login/Login'
import Project from './assets/components/Projects/Project'
import Home from './assets/components/Home/Home'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'









function App() {
  const router = createBrowserRouter([ 

{
  path: '/',
  element: <> <Home/> </>
},

{
  path: '/project',
  element: <><Project /></>
},

{
  path: '/login',
  element: <><Login /></>
}

])
  return(

  <div className="app-container">
<RouterProvider router={router} />
    
  </div>
  );
}

export default App
