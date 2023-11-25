import React from 'react'
import { produtos } from '../Data'
import styled from 'styled-components'
import CardProduto from './CardProduto'

const Container = styled.div`
    display: flex;
    background: green;
`

const ContainerProdutos = () => {
  return <>
  <div class="m-auto container gap-2 py-5 d-flex flex-wrap">
  {produtos.slice(0,26).map(item=>( /* Tenho 26 produtos */
        <CardProduto item={item}/>
    ))}      
</div>
  </>
    

}

export default ContainerProdutos