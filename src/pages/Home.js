import CardProduto from "../components/CardProduto"
import ContainerProdutos from "../components/ContainerProdutos"
import ImagemTopoMenor from "../components/ImagemTopoMenor"

function Home(){
    return (
        <div>
            <ImagemTopoMenor image="./images/ImagemTopoHome.webp"></ImagemTopoMenor>
            <ContainerProdutos></ContainerProdutos>
            
        </div>
        
    )
}

export default Home