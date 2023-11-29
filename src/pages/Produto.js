import React from "react"
import {Link, useParams } from "react-router-dom"
import { produtos } from "../Data"
import CardProduto from "../components/CardProduto"

function Produto(){

    const {id} = useParams()
    const thisProduct = produtos.find(item => item.id === id)
    const produtosSelecionados = produtos
    .sort(() => Math.random() - 0.5)  

    return(
        <section>
            
            <div id="fundosection" class="mt-20">
            <div class=" d-flex m-auto pb-4 w-10/12 content-center">
                <Link to="/" class="text-decoration-none text-[#29CF00]">VOLTAR</Link>
            </div>
                <div id="fundocard" class=" border-1 border-gray-300 shadow-3xl  bg-white rounded-xl max-lg:p-5 lg:p-16  w-10/12 text-center m-auto">

                    <div class="d-flex justify-evenly flex-wrap space-between">
                        <div class="max-lg:w-full w-5/12 max-sm:py-[0px] h-full">
                            
                            <img src={thisProduct.img.replace(".", "")} class="lg:w-full w-3/4 m-auto" alt={thisProduct.id}></img>

                        </div>
                        <div class="max-lg:w-full w-5/12 py-2 h-full ">
                            <h1 class="text-[#3A3A3A] sm:mb-[30px] max-sm:mb-[20px] max-sm:text-[20px]">{thisProduct.title}</h1>
                            <p class="text-justify mb-5 max-sm:text-[12px] font-medium">{thisProduct.completesubtitle}</p>

                            <div class="d-flex justify-between mt-5">
                                <h1 class="text-[25px] md:text-[50px] ">{thisProduct.priceString}</h1>
                                <h5 class="mt-auto">à vista</h5>
                            </div>

                            <div class="d-flex justify-evenly  p-2 max-sm:gap-2 sm:gap-3 mt-[20px] lg:mt-[70px]">
                
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
                        </div>

                        
                    </div>

                    

                </div>
            </div>


            <div id="fundosection" class="my-10 ">
                <div class="d-flex m-auto pb-4 w-10/12 content-center">
                    <Link to="/" class="font-medium text-decoration-none text-[#7B7B7B]">DESCRIÇÃO</Link>
                </div>
                    <div id="fundocard" class="bg-[#EEEEEE] border-gray-300 shadow-3xl rounded-xl max-lg:p-5 lg:p-16  w-10/12 text-center m-auto">

                        <p class="font-medium text-[#7B7B7B] max-sm:text-[12px]">{thisProduct.completesubtitle}</p>

                    </div>
            </div>

            <div id="fundosection" class="my-10">
                <div class="d-flex m-auto pb-4 w-10/12 content-center">
                    <Link to="/" class="font-medium text-decoration-none text-[#7B7B7B]">TAMBÉM VISTOS PELOS USUÁRIOS</Link>
                </div>

                <div class="m-auto px-4 container gap-2 pt-2 pb-4 d-flex flex-wrap">


                {produtos.slice(produtosSelecionados, 4).map(item=>( /* Tenho 26 produtos */
                        <Link to={`/produtos/${item.id}`} class="text-decoration-none text-black m-auto rounded-xl border-1 border-gray-300 bg-white py-3 px-2 max-sm:w-[47%] md:w-[300px] h-78 max-sm:h-64 lg:w-1/5 text-center mb-4 hover:border-[#29CF00] hover:cursor-pointer transition-colors ">
                        <div class="m-0 h-12">
                        <h1 class="text-[18px] max-sm:text-[12px]">{item.title}</h1>
                        <h3 class="text-[12px] max-sm:text-[10px] text-gray-500">{item.subtitle}</h3>
                        </div>
                        
                        <div class="max-sm:h-24 sm:mt-5 h-28">
                        <img class="w-32 m-auto max-sm:w-28 m-0" src={item.img.replace(".", "")} alt={item.id}></img>
                        </div>
                        <div class="d-flex">
                        <span class="font-semibold m-auto max-sm:text-[14px]">{item.priceString}</span>
                        <span class="m-auto text-gray-500 max-sm:text-[12px] text-right">à vista</span>
                        </div>
                        <div class="d-flex justify-evenly mt-2 p-2 max-sm:gap-2 sm:gap-3">
                
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
                    ))}      
                </div>


            </div>

        </section>
    )
}

export default Produto