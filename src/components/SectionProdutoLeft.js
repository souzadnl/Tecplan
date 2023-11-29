import BotaoProdutos from "./BotaoProdutos"

function SectionProdutoLeft(props) {
    return(
        <section class="max-sm:pt-10 pt-20">
            <div class="container text-center">
                <div class="grid sm:grid-cols-1 md:grid-cols-2">
                    <div class="m-auto">
                    <img width="400vw" class="max-sm:w-60" src={props.image} alt={props.product}></img>
                    </div>
                    <div class="d-flex">
                        <div class="max-md:text-center text-left m-auto align-middle">
                        <h1 class="my-3 mb-4 text-gray-700 text-4xl max-sm:text-3xl font-semibold">{props.text} <span class="text-[#29CE00]">{props.product}</span></h1>
                        <span class="text-[18px] font-semibold text-gray-700 max-sm:text-[14px]">{props.subtitle}</span>
                        <BotaoProdutos text="QUERO CONHECER"></BotaoProdutos>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionProdutoLeft