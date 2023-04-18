import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {

  const [config,setConfig] = useState(null) // h
  const [method, setMethod] = useState(null)
  const [data,setData] = useState()

const configHttp = (data,method)=>{


  if(method === "POST"){
    setConfig({
      method,
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(data)
    })
    setMethod(method)
  }
}



  useEffect(() => {
      const fetchPost = async() => {

        if(method === "POST"){
          let fetchOpt = [url,config]
          const post = await fetch(...fetchOpt)
          const json = await post.json()
          
        }
  
    //Função responsavel por fazer o envio dos produtos

      }
      fetchPost()

  },[config,method,url])


  useEffect(() => {

    const fetchGet = async()=>{
      const get = await fetch(url)
      const res = await get.json()
      setData(res)
    }
    fetchGet()

  },[config,method,url])



    
  return {
    configHttp,data
}
}
