import styled from "styled-components"

function CardQuemSomos(props) {

    const SectionCard = styled.section`
        #fundosection {
            background-color: ${props.background};
        }

        #fundocard {
            background-color: ${props.backgroundcard}
        }

        h1 {
            color: ${props.titlecolor}
        }

        span {
            color: ${props.spancolor}
        }


    `

    return(
        <SectionCard>
            <div id="fundosection" class="py-9">
            <div id="fundocard" class="border-none rounded-xl p-5 w-10/12 text-center m-auto">
                <h1 class="mb-4 text-2xl text-[#1F9B00] font-bold">{props.title}</h1>
                <span class="text-[#1F9B00] text-[1rem] m-auto">{props.span}</span>
            </div>
            </div>
        </SectionCard>
    )
}

export default CardQuemSomos