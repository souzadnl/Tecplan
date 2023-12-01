import styled from "styled-components"

function CardImage(props) {
    const DivImage = styled.div`
    background-image: url(${props.image});
    background-size: cover;
    background-position: top;
    height: calc(14vh + 10vw);
    padding: calc(2vh + 3vw);
    border-radius: 16px;

    h1 {
        font-size: calc(2vw + 1.9vh);
    }

    `

    return(
        <div class="container px-3 md:px-5 mb-5 pb-16">
        <DivImage>
            <div class="sm:w-4/5 ">
            <h1 class="h-full text-left text-white font-bold">TECPLAN <br></br> O <span class="text-[#29CE00]">AGRO</span> E A <span class="text-[#29CE00]">TECNOLOGIA</span> DE MÃOS DADAS</h1>
            </div>
        </DivImage>
        </div>
        
    )
}

export default CardImage