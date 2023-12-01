import React from "react"
import {Link, useParams } from "react-router-dom"
import { produtos } from "../Data"

function Carrinho(){

    return(
        <section>
            
            <div id="fundosection" class="mt-20 container">
                <div class=" d-flex m-auto pb-4 w-10/12 content-center">
                    <Link to="/" class="text-decoration-none text-[#29CF00]">VOLTAR</Link>
                </div>
            
                <div class="row g-0 text-center">
                    <div class="col-sm-6 col-md-8 bg-danger px-3">
                        <div class="text-decoration-none text-black m-auto rounded-xl border-1 border-gray-300 bg-white hover:border-[#29CF00] hover:cursor-pointer transition-colors ">
                        <h1>daniel</h1>
                        <h1>daniel</h1>
                        <h1>daniel</h1>
                        <h1>daniel</h1>
                        <h1>daniel</h1>
                        <h1>daniel</h1>
                        <h1>daniel</h1>
                        </div>
                    </div>

                
                    <div class="col-lg-6 col-lg-4 bg-warning px-3 text-left">
                        <div class="p-3 text-decoration-none text-black m-auto rounded-xl border-1 border-gray-300 bg-white hover:border-[#29CF00] hover:cursor-pointer transition-colors justify-evenly gap-3">
                            <div>
                                <h1 class="text-[2vh] text-[#7B7B7B]">SUBTOTAL</h1>
                                <h2 class="text-[3vh] text-[#7B7B7B]">R$ 250.000</h2>
                            </div>

                            <div class="mt-4">
                                <h1 class="text-[2vh] text-[#7B7B7B]">DESCONTOS</h1>
                                <h2 class="text-[3vh] text-[#7B7B7B]">R$ 2.000</h2>
                            </div>

                            <div class="mt-4 mb-4">
                                <h1 class="text-[2vh] text-[#7B7B7B]">TOTAL</h1>
                                <h2 class="text-[4vh] text-[#292929]">R$ 248.000</h2>
                            </div>

                        <div class="d-flex justify-evenly max-sm:gap-2 sm:gap-3">
                
                          <button class="text-center rounded-2xl border-2 border-gray text-gray-400 text-[10px] hover:bg-[#54B93B] hover:text-white hover:border-[#54B93B] px-3 py-2 w-2/4">
                            COMPRAR MAIS
                          </button>
                          
                          <div class="text-center rounded-2xl border-2 border-[#29CE00] text-[#29CE00] text-[10px] hover:bg-[#29CE00] hover:text-white px-2 py-2 w-3/4">
                            <span>FINALIZAR COMPRA</span>
                            
                          </div>
                        </div>
                        </div>

                        
                    </div>
                </div>
            </div>

          
                

        </section>
    )
}

export default Carrinho