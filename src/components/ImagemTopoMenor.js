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

    @media (max-width: 600px) {
        height: 250px;
        background-position: 0;

        h1 {
            text-shadow: 0px 5px 30px black;
            text-align: center;
            font-size: calc(4vw + 1.9vh);
        }

        div {
            margin-top: 15%;
        }

    }
    `

    return(
        <DivImage>
            <div class="sm:w-3/5 escurecer">
            <h1 class="text-left text-white font-bold">CONHEÇA AQUI OS NOSSOS PRODUTOS PARA O <span class="text-[#29CE00]">CAMPO</span></h1>
            </div>
        </DivImage>
    )
}

export default ImagemTopoMenor