import styled from "styled-components"

function ImagemTopoMenor(props) {
    const DivImage = styled.div`
    background-image: url(${props.image});
    background-size: cover;
    background-position: top;
    height: calc(14vh + 10vw);
    margin-top: 50px; 
    padding: calc(2vh + 3vw);

    h1 {
        font-size: calc(2vw + 1.9vh);
    }
    `

    return(
        <DivImage>
            <div class="sm:w-3/5 p-3">
            <h1 class="h-full text-left text-white font-bold">CONHEÇA AQUI OS NOSSOS PRODUTOS PARA O <span class="text-[#29CE00]">CAMPO</span></h1>
            </div>
        </DivImage>
    )
}

export default ImagemTopoMenor