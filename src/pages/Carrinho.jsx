import React from "react"
import {Link, useParams } from "react-router-dom"
import { produtos } from "../Data"

function Carrinho(){

    return(
        <section>
            <div id="fundosection" class="mt-20">
                <div class="d-flex m-auto pb-4 w-10/12 content-center">
                    <Link to="/" class="text-decoration-none text-[#29CF00]">VOLTAR</Link>
                </div>
            
                <div class="row g-0 text-center flex container mx-auto">
                    <div class="col-sm-8 px-3 max-sm:mb-[20px] mb-[50px]">
                        <div class="d-flex text-decoration-none text-black m-auto rounded-xl border-1 border-gray-300 bg-white hover:border-[#29CF00] transition-colors ">
                        <img src="/images/trator2.jpg" class="max-sm:w-24 w-44 m-4"></img>
                        <div class="my-3 w-full">
                            <h1 class="text-[#7B7B7B] text-left mx-3 max-sm:text-[20px] text-[30px] sm:mb-3">Trator Farmall</h1>
                        
                            <button class="text-left text-[14px] w-full mx-3 text-[#29CF00]">Excluir item</button>

                            <div class="d-flex justify-between mx-3 mt-3">
                                <div class="mt-auto">
                                    <span class="d-flex text-[10px] text-[#7B7B7B]">QTD</span>
                                    <input class="d-flex rounded-xl border-1 border-gray-300 bg-white hover:border-[#29CF00] transition-colors pl-2 bg-danger w-3/5" type="number" min={0} max={10} defaultValue={1}></input>
                                </div>
                                <div class="mt-auto">
                                    <span class="d-flex text-[10px] text-[#7B7B7B]">TOTAL</span>
                                    <p class="d-flex my-0 mr-2">R$ 1.250.000</p>
                                </div>
                            </div>
                        </div>


                        </div>
                    </div>

                
                    <div class="max-sm:sticky max-sm:bottom-0 col-sm-4 sm:px-3 text-left sm:mb-20">
                        <div class="max-sm:rounded-t-xl max-sm:drop-shadow-[0_-5px_5px_rgba(0,0,0,0.10)] p-6 text-decoration-none text-black m-auto sm:rounded-xl border-1 border-gray-300 bg-white hover:border-[#29CF00] transition-colors justify-evenly gap-3">

                            <div class="max-sm:flex max-sm:justify-between">
                                <h1 class="text-[2vh] max-sm:text-[12px] text-[#7B7B7B] mt-auto">SUBTOTAL</h1>
                                <h2 class="text-[3vh] max-sm:text-[16px] text-[#7B7B7B] mt-auto">R$ 250.000</h2>
                            </div>

                            <div class="max-sm:flex max-sm:justify-between">
                                <h1 class="text-[2vh] max-sm:text-[12px] text-[#7B7B7B] mt-auto">DESCONTOS</h1>
                                <h2 class="text-[3vh] max-sm:text-[16px] text-[#7B7B7B] mt-auto">R$ 2.000</h2>
                            </div>

                            <div class="mt-2 mb-3 max-sm:flex max-sm:justify-between">
                                <h1 class="text-[2vh] max-sm:text-[15px] text-[#7B7B7B] mt-auto">TOTAL</h1>
                                <h2 class="text-[4vh] max-sm:text-[20px] text-[#292929] mt-auto">R$ 248.000</h2>
                            </div>

                        <div class="d-flex justify-evenly max-sm:gap-2 sm:gap-3">
                
                          <button class="text-center rounded-2xl border-2 border-[#29CE00] text-[#29CE00] text-[14px] hover:bg-[#29CE00] hover:text-white px-2 py-2 w-full">
                            FINALIZAR COMPRA
                          </button>
                          
                        </div>
                        </div>

                        
                    </div>
                </div>
            </div>

          
                

        </section>
    )
}

export default Carrinho