import styled from "styled-components"

function ImagemTopoMenor(props) {
    const DivImage = styled.div`
    background-image: url(${props.image});
    background-size: cover;
    background-position: top;
    display: flex;
    height: calc(14vh + 10vw);
    margin-top: 50px; 
    align-items: center;
    padding: 3vw;

    h1 {
        font-size: calc(2vw + 1.9vh);
    }

    @media (max-width: 600px) {
        height: 250px;
        background-position: 0;
        background-repeat: no-repeat;
        position: auto;
        
        h1 {
            text-shadow: 0px 5px 50px black;
            text-align: center;
            font-size: calc(5vw + 1.9vh);
        }
    }

    `

    return(
        <DivImage>
            <div class="sm:w-3/5 ">
            <h1 class="text-left text-white font-bold">{props.text}<span class="text-[#29CE00]">{props.textColored}</span></h1>
            </div>
        </DivImage>
    )
}

export default ImagemTopoMenor