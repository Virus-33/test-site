import {StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from "./components/About.jsx";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import NotFoundPage from "./NotFoundPage.jsx";
import Rules from "./components/Rules.jsx";
import Article from "./components/Article.jsx";
import Us from "./components/Us.jsx";

const router = createBrowserRouter([
    {path: "/", element: <App/>},
    {path: "/about", element: <About/>},
    {path: "/rules", element: <Rules/>},
    {path: "/rule/:rule", element: <Article/>},
    {path: "/links", element: <Us/>},
    {path: "*", element: <NotFoundPage/>}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>
)
