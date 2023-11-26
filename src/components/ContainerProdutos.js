import React from 'react'
import { produtos } from '../Data'
import CardProduto from './CardProduto'
import { Link } from 'react-router-dom'
import ConjuntoProdutos from './ConjuntoProdutos'

const ContainerProdutos = () => {
  return <>
    <div class="container pt-[25px] mb-0 text-[#B2B2B2] pb-3 d-flex justify-between">
          <h5 class="text-lg">PRODUTOS</h5>    
          <Link class="text-lg text-decoration-none text-[#29CF00] hover:text-[#29CF00]" to="produtos_completo">VER MAIS</Link>
    </div>
  <ConjuntoProdutos quantidade={8}></ConjuntoProdutos>
  </>
    

}

export default ContainerProdutos