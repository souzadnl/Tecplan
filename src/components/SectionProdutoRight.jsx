import BotaoProdutos from "./BotaoProdutos"

function SectionProdutoRight(props) {
    return(
        <section class="pt-10">
            <div class="container text-center">
                <div class="grid sm:grid-cols-1 md:grid-cols-2">

                    <div class="d-flex max-md:order-2 m-auto">
                        <div class="max-md:text-center text-left m-auto align-middle">
                        <h1 class="my-3 mb-4 font-semibold text-gray-700 text-4xl max-sm:text-3xl">{props.text} <span class="text-[#29CE00]">{props.product}</span></h1>
                        <span class="text-[18px] font-semibold text-gray-700 max-sm:text-[14px]">{props.subtitle}</span>
                        <BotaoProdutos text="QUERO CONHECER"></BotaoProdutos>
                        </div>
                    </div>
                    
                    <div class="m-auto">
                        <img width="400vw" class="max-sm:w-60" src={props.image} alt={props.product}></img>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SectionProdutoRight