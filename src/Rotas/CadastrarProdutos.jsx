import React from 'react'
import '../Styles/CadastrarProdutos.css'
const CadastrarProdutos = () => {


  const listaTable = ["Nome","Codigo INT","Codigo de barras",
                "Fornecedor","Valor da compra","Valor da venda","Quantidade"]

  return (
    <section>
      <h1>Cadastrar produtos</h1>
      <div className="boxProdutos">
        <div className="inputs">
          <input type="text" name="search" placeholder='Pesquisar' id="search"/>
          <input type="button" value="Cadastrar" />
        </div>
        <hr/>
        <table>
          <tr>
            {listaTable.map((item) =>(
              <td>{item}</td>
            ))}
          </tr>
        </table>
      </div>
    </section>
  )
}

export default CadastrarProdutos