import { createHashRouter, RouterProvider } from 'react-router-dom' 
import Home from './Components/Home' 
import Pokemon from './Components/Pokemon' 
import About from './Components/About'

const router = createHashRouter([
    { path: "/", element: <Home /> },
    { path: "/pokemon/:id", element: <Pokemon /> },
    { path: "/about", element: <About/>}
]) 

function App() {
    return <RouterProvider router={router} /> 
}

export default App 