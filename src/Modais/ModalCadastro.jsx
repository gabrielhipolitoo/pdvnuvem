import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'

const ModalCadastro = () => {
    const url = "http://localhost:3000/estoque"
    const [dados,setDados] = useState([])

    const {configHttp,data} = useFetch(url)

    const listInput = [
        {
        label:"Nome",
        placeholder:"Informe o nome",
        id:"nome"
        },
        {
        label:"Codigo interno",
        placeholder:"Informe o Codigo interno",
        id:"codigo INT"
        },
        {
        label:"Codigo de barras",
        placeholder:"Informe de codigo de barras",
        id:"codigo B"
        },
        {
        label:"Fornecedor",
        placeholder:"Informe o fornecedor",
        id:"fornecedor"
        },
        {
        label:"Valor da compra",
        placeholder:"Informe o valor da compra",
        id:"compra"
        },
        {
        label:"Valor da venda",
        placeholder:"Informe o valor da venda",
        id:"venda"
        },
        {
        label:"Quantidade",
        placeholder:"Informe a quantidade",
        id:"quantidade"
        }
]

const setInput = (e) => {

    const {id,value} = e.target

    setDados({
        ...dados,
        [id]:value
    })
}


const handleSubmit = (e) => {
    e.preventDefault()
    
    const product = {
        dados,
    }
    
    console.log(data)
    configHttp(product,"POST")
    setDados("")
    
}

  return (
    <div className='modalCad'>
        <h2>Informe os dados do produto</h2>
        <form onSubmit={handleSubmit}>
        {listInput.map((item,index) => (
            <label key={index} htmlFor="">
                {item.label}
                <input key={index+2}
                type="text" 
                id={item.id}  
                onChange={setInput} 
                placeholder={item.placeholder}/>
            </label>
        ))}

        <input type="submit"  value="Cadastrar"/>
        <input type="button"  value="Cancelar"/>
        </form>
    </div>
  )
}

export default ModalCadastro