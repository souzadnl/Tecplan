import React from 'react'
import { produtos } from '../Data'
import CardProduto from './CardProduto'

const ContainerProdutos = () => {
  return <>
  <div class="m-auto container gap-2 pt-5 pb-4 d-flex flex-wrap">
  {produtos.slice(0,8).map(item=>( /* Tenho 26 produtos */
        <CardProduto item={item}/>
    ))}      
</div>
  </>
    

}

export default ContainerProdutos