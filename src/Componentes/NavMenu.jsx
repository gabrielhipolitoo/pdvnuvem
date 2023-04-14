import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import '../Styles/navmenu.css'
const NavMenu = () => {

    const paginas = [{
        nome: "Cadastrar produto",
        para:"/cadastrarproduto"
    },
    {
         nome: "Frente de caixa",
         para:"/frentecaixa"
    },
    {
        nome: "Entrada e saida",
        para:"/cadastrarproduto"
    },
    {
        nome: "Fornecedores",
        para:"/cadastrarproduto"
    },]

  return (
    <main>
        <nav className='navMenu'>
            <h1>Pdv Nuvem</h1>
            <div className="links">
                {paginas.map((item) => (
                <Link to={item.para}>{item.nome}</Link>
                ))}
            </div>
          
        </nav>
        <Outlet/>
    </main>
  )
}

export default NavMenu