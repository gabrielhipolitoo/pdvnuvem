import React, { useState } from 'react'
import '../Styles/CadastrarProdutos.css'
import ModalCadastro from '../Modais/ModalCadastro'
import { useFetch } from '../hooks/useFetch'
const CadastrarProdutos = () => {

  const {data} = useFetch()

  const [modalCad,setModalCad] = useState(false)

  const listaTable = ["Nome","Codigo INT","Codigo de barras",
                "Fornecedor","Valor da compra","Valor da venda","Quantidade"]
  console.log(data)
  return (
    <section>
      <h1>Cadastrar produtos</h1>
      <div className="boxProdutos">
        <div className="inputs">
          <input type="text" name="search" placeholder='Pesquisar' id="search"/>
          <input type="button" value="Cadastrar" onClick={() => {
            setModalCad(true)
          }}/>
        </div>
        <hr/>
        <table>
          <tr>
            {listaTable.map((item,index) =>(
              <td key={index}>{item}</td>
            ))}
          </tr>
        </table>
          {modalCad && <ModalCadastro/>}
      </div>
    </section>
  )
}

export default CadastrarProdutos