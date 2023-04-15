import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import '../Styles/navmenu.css'
import Shop from '../assets/Shop'
import Car from '../assets/car'
import Arow from '../assets/Arow'
import Box from '../assets/Box'
const NavMenu = () => {

    const paginas = [{
        nome: "Cadastrar produto",
        para:"/cadastrarproduto",
        img: <Shop/>
    },
    {
         nome: "Frente de caixa",
         para:"/frentecaixa",
         img: <Car/>
    },
    {
        nome: "Entrada e saida",
        para:"/cadastrarproduto",
        img:<Arow/>
    },
    {
        nome: "Fornecedores",
        para:"/cadastrarproduto",
        img:<Box/>
    },]

  return (
    <main>
        <nav className='navMenu'>
            <h1>Pdv Nuvem</h1>
            <div className="links">
                {paginas.map((item) => (
                <Link to={item.para}>
                    <div className="hover">
                        <span>{item.img}</span>
                        <span>{item.nome}</span>
                    </div>
                    </Link>
                ))}
            </div>
        </nav>
        <Outlet/>
    </main>
  )
}

export default NavMenu