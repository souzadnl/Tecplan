
import { produtos } from "../Data"
import CardProduto from "./CardProduto"

function ConjuntoProdutos(props) {
    return(
        <div class="m-auto container gap-2 pt-2 pb-4 d-flex flex-wrap">
        {produtos.slice(0,props.quantidade).map(item=>( /* Tenho 26 produtos */
                <CardProduto item={item}/>
            ))}      
        </div>
    )
}

export default ConjuntoProdutos