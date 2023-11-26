import CardProduto from "../components/CardProduto"
import { produtos } from "../Data"
import { Link } from "react-router-dom"

function Produtos_completo() {

    return(
        <div class="mt-20 sm:mt-28">
            <div class="container mb-0 text-[#B2B2B2] pb-3 d-flex justify-between">

            <h5 class="text-lg">TODOS OS PRODUTOS</h5>  
            <Link to="/" class="text-decoration-none text-[#29CF00]">VOLTAR</Link>

            </div>

            <div class="m-auto container gap-2 pt-2 pb-4 d-flex flex-wrap">
                {produtos.slice(0,26).map(item=>( /* Tenho 26 produtos */
                    <CardProduto item={item}/>
                ))}      
            </div>
        </div>
        
    )
}

export default Produtos_completo