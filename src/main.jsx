import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter,Route,RouterProvider} from 'react-router-dom'
import NavMenu from './Componentes/NavMenu'
import FrenteCaixa from './Rotas/FrenteCaixa'
import CadastrarProdutos from './Rotas/CadastrarProdutos'


const router = createBrowserRouter([
  {
    path:"/",
    element:<NavMenu/>,
    children:[
      {
        path:"/frentecaixa",
        element:<FrenteCaixa/>
      },
      {
        path:"/cadastrarproduto",
        element:<CadastrarProdutos/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
