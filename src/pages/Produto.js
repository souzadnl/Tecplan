import React from "react"
import {Link, useParams} from "react-router-dom"
import { produtos } from "../Data"
import CardProduto from "../components/CardProduto"

function Produto(){

    const {id} = useParams()
    const thisProduct = produtos.find(item => item.id === id)
    console.log("uva",id)
 
    return(
        <section>
            
            <div id="fundosection" class="my-24">
            <div class="d-flex m-auto pb-4 w-10/12 content-center">
                <Link to="/" class="text-decoration-none text-[#29CF00]">VOLTAR</Link>
            </div>
                <div id="fundocard" class="border-1 border-gray-300 shadow-3xl  bg-white rounded-xl max-lg:p-5 lg:p-16  w-10/12 text-center m-auto">

                    <div class="d-flex justify-evenly flex-wrap space-between">
                    <div class="max-lg:w-full w-5/12 py-4 h-full">
                            
                            <img src={thisProduct.img.replace(".", "")} class="lg:w-full w-4/5 m-auto"></img>

                        </div>
                        <div class="max-lg:w-full w-5/12 py-4 h-full ">
                            <h1 class="text-[#3A3A3A] mb-5">{thisProduct.title}</h1>
                            <p class="text-justify">{thisProduct.completesubtitle}</p>

                            <div class="d-flex justify-between mt-5">
                                <h1 class="text-[50px] md:text-[80px]">{thisProduct.priceString}</h1>
                                <h5 class="mt-auto">à vista</h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div id="fundosection" class="my-24">
            <div class="d-flex m-auto pb-4 w-10/12 content-center">
                <Link to="/" class="font-medium text-decoration-none text-[#7B7B7B]">DESCRIÇÃO</Link>
            </div>
                <div id="fundocard" class="border-1 border-gray-300 shadow-3xl  bg-white rounded-xl max-lg:p-5 lg:p-16  w-10/12 text-center m-auto">

                    <p class="font-medium text-[#7B7B7B]">{thisProduct.completesubtitle}</p>

                </div>
            </div>

        </section>
    )
}

export default Produto