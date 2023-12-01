import styled from "styled-components"
import CardQuemSomos from "../components/CardQuemSomos"

const DivImage = styled.div`
    
    background-image: url("./images/QuemSomos.webp");
    background-size: cover;
    background-position: top;
    height: calc(25vh + 20vw);
    margin-top: 54px; 
    padding: calc(2vh + 8vw);
    display: flex;
    align-items: center;

    h1 {
        font-size: calc(5vw + 1.5vh);
    }
    
    @media (max-width: 600px) {
        h1 {
            font-size: calc(6vw + 1.5vh);
        }
    }
`

function Quemsomos(){
    return(
        <div>
        <DivImage>
            <h1 class="h-full text-center text-white font-bold">CONHEÇA QUEM SOMOS E A HISTÓRIA DA TECPLAN</h1>
        </DivImage>
        <CardQuemSomos title="O Que Fazemos" background="#E3E3E3" span="Na Tecplan, dedicamos nossa expertise e paixão ao fornecimento de tratores de alta qualidade, projetados para atender às necessidades específicas de cada agricultor com muita tecnologia e compromisso com a eficiência agrícola. Junte-se a nós na busca por uma agricultura mais produtiva e sustentável."></CardQuemSomos>
        <CardQuemSomos title="Início da Jornada (1998)" titlecolor="#202020" spancolor="#202020" span="Fundada em 1998 por Daniel de Souza Alves, a Tecplan nasceu da paixão por tecnologia e maquinário agrícola."></CardQuemSomos>
        <CardQuemSomos title="Da Loja Local à Presença Nacional (1999-2003)" titlecolor="white" spancolor="white" backgroundcard="#1F9B00" span="Começando como uma pequena loja local, a Tecplan expandiu rapidamente, oferecendo tratores de alta qualidade para fazendeiros da região. Em apenas alguns anos, nossa presença se estendeu por todo o país."></CardQuemSomos>
        <CardQuemSomos title="Tratores Personalizados (2008)" titlecolor="#202020" spancolor="#202020" span="Em 2008, começamos a oferecer tratores personalizados, desenvolvidos sob medida para atender às necessidades únicas de cada fazenda. Essa abordagem personalizada nos diferencia no mercado."></CardQuemSomos>
        <CardQuemSomos title="Inovação e Tecnologia (2012)" titlecolor="white" spancolor="white" backgroundcard="#1F9B00" span="Investimos em pesquisa e desenvolvimento para integrar tecnologias avançadas em nossos tratores, elevando a eficiência e a produtividade agrícola a um novo patamar."></CardQuemSomos>
        <CardQuemSomos title="Presença Global (2015)" titlecolor="#202020" spancolor="#202020" span="A demanda crescente por nossos produtos nos levou a expandir para mercados internacionais. Atualmente, exportamos tratores para países ao redor do mundo, consolidando nossa presença global."></CardQuemSomos>
        </div>

        
    )
}

export default Quemsomos