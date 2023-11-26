import React from 'react'
import { Link } from 'react-router-dom'

const CardProduto = ({item}) => {


  return (
    <Link to={`/produtos/${item.id}`} class="text-decoration-none text-black m-auto rounded-xl border-1 border-gray-300 bg-white py-3 px-2 max-sm:w-[47%] md:w-[300px] h-72 lg:w-1/5 text-center mb-4 hover:border-[#29CF00] hover:cursor-pointer transition-colors ">
        <h1 class="text-sm">{item.title}</h1>
        <h3 class="text-[10px] text-gray-500">{item.subtitle}</h3>
        <div class="h-28">
        <img class="w-32 m-auto p-1" src={item.img}></img>
        </div>
        <div class="d-flex">
        <span class="font-semibold m-auto text-md">{item.priceString}</span>
        <span class="m-auto text-gray-500 text-sm text-right">à vista</span>
        </div>
        <div class="d-flex justify-evenly mt-2 gap-3 p-2">

          <button class="rounded-2xl border-2 border-gray text-gray-400 hover:bg-[#54B93B] hover:text-white hover:border-[#54B93B] px-3 py-2 w-2/4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-plus m-auto" viewBox="0 0 16 16">
              <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
            </svg>
          </button>
          
          <div class="rounded-2xl border-2 border-[#29CE00] text-[#29CE00] hover:bg-[#29CE00] hover:text-white px-2 py-2 w-3/4">
            <span>Comprar</span>
          </div>
        </div>

    </Link>
    
    
  )
}

export default CardProduto         