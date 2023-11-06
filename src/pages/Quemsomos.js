import styled from "styled-components"

const DivImage = styled.div`
    
    background-image: url("./images/QuemSomos.svg");
    background-size: cover;
    background-position: top;
    height: calc(25vh + 20vw);
    margin-top: 50px; 
    padding: calc(1vh + 6vw);

    h1 {
        font-size: 6vw;
        background: red;
    }
    
`

function Quemsomos(){
    return(
        <DivImage>
            <h1 class="h-full text-center text-white font-bold">CONHEÇA QUEM SOMOS E A HISTÓRIA DA TECPLAN</h1>
        </DivImage>
        
    )
}

export default Quemsomos