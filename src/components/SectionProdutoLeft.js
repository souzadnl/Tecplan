import BotaoProdutos from "./BotaoProdutos"

function SectionProdutoLeft(props) {
    return(
        <section class="pt-20">
            <div class="container text-center">
                <div class="grid sm:grid-cols-1 md:grid-cols-2">
                    <div class="">
                    <img src={props.image} alt={props.product}></img>
                    </div>
                    <div class="d-flex">
                        <div class="max-md:text-center text-left m-auto align-middle">
                        <h1 class="my-3 mb-4 font-semibold">{props.text} <span class="text-[#29CE00]">{props.product}</span></h1>
                        <span class="text-[18px] font-semibold">{props.subtitle}</span>
                        <BotaoProdutos text="QUERO CONHECER"></BotaoProdutos>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionProdutoLeft