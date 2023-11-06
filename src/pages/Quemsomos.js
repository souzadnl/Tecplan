import styled from "styled-components"

const DivImage = styled.div`
    
    background-image: url("./images/QuemSomos.svg");
    background-size: cover;
    background-position: top;
    height: calc(25vh + 20vw);
    margin-top: 50px; 

        
`

function Quemsomos(){
    return(
        <DivImage>
            <h1>uva</h1><h1>uva</h1><h1>uva</h1><h1>uva</h1>

        </DivImage>
        
    )
}

export default Quemsomos