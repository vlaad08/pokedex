import { createHashRouter, RouterProvider } from 'react-router-dom' 
import Home from './Components/Home' 
import Pokemon from './Components/Pokemon' 

const router = createHashRouter([
    { path: "/", element: <Home /> },
    { path: "/pokemon/:id", element: <Pokemon /> },
]) 

function App() {
    return <RouterProvider router={router} /> 
}

export default App 