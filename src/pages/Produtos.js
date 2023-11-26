import ImagemTopoMenor from "../components/ImagemTopoMenor"
import SectionProdutoLeft from "../components/SectionProdutoLeft"
import SectionProdutoRight from "../components/SectionProdutoRight"

function Produtos(){
    return (
        <div class="pb-20">
            <ImagemTopoMenor image="./images/ImagemTopoProdutos.webp"></ImagemTopoMenor>
            
            {/* Trator */}
            <SectionProdutoLeft image="./images/Trator.webp" text="TRABALHAMOS COM OS MELHORES" product="TRATORES" subtitle="Aqui você encontra os tratores mais tecnológicos e modernos do mercado"></SectionProdutoLeft>

            {/* Plantadeira */}
            <SectionProdutoRight image="./images/Plantadeira.webp" text="AQUI VOCÊ ENCONTRA" product="PLANTADEIRAS INTELIGENTES" subtitle="Plantadeiras com tecnologia IPS, que plantam de maneira inteligente e econômica"></SectionProdutoRight>

            {/* Plantadeira */}
            <SectionProdutoLeft image="./images/Colheitadeira.webp" text="AS MAIS MODERNAS E PODEROSAS" product="COLHEITADEIRAS" subtitle="Essas colheitadeiras proporcionam uma colheita mais rápida e eficiente na lavoura"></SectionProdutoLeft>

            {/* Pulverizadores */}
            <SectionProdutoRight image="./images/Pulverizador.webp" text="PARA O COMBATE DE PRAGAS E ERVAS DANINHAS, USE NOSSOS" product="PULVERIZADORES" subtitle="Estes pulverizadores modernos combatem de maneira eficaz os “intrusos” na plantação"></SectionProdutoRight>

            {/* Insumos Agricolas */}
            <SectionProdutoLeft image="./images/Insumos.webp" text="ADQUIRA PARA O SEU PLANTIO OS MELHORES" product="INSUMOS AGRÍCOLAS" subtitle="Para um melhor desempenho das máquinas, conte com os melhores insumos"></SectionProdutoLeft>
        </div>
    )
}

export default Produtos