import CardProduto from "../components/CardProduto"
import ContainerProdutos from "../components/ContainerProdutos"
import ImagemTopoMenor from "../components/ImagemTopoMenor"
import CardImage from "../components/CardImagem"

function Home(){
    return (
        <div>
            <ImagemTopoMenor image="./images/ImagemTopoHome.webp"></ImagemTopoMenor>
            <ContainerProdutos></ContainerProdutos>
            <CardImage image="./images/Cardimage.webp"></CardImage>
        </div>
        
    )
}

export default Home