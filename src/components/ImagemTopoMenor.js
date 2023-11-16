import styled from "styled-components"

const DivImage = styled.div`
    
background-image: url("./images/ImagemTopoProdutos.webp");
background-size: cover;
background-position: top;
height: calc(14vh + 10vw);
margin-top: 50px; 
padding: calc(2vh + 3vw);

h1 {
    font-size: calc(2vw + 2vh);
}

@media (min-width:)

`

function ImagemTopoMenor() {

    return(
        <DivImage>
            <div class="sm:w-2/4 p-3">
            <h1 class="h-full text-left text-white font-bold">CONHEÇA AQUI OS NOSSOS PRODUTOS PARA O <span class="text-[#29CE00]">CAMPO</span></h1>
            </div>
        </DivImage>
    )
}

export default ImagemTopoMenor