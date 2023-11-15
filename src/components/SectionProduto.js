import BotaoProdutos from "./BotaoProdutos"

function SectionProduto() {
    return(
        <section class="pt-40 pb-40">
            <div class="container text-center">
                <div class="">
                    <div class="col">
                    <img src="./images/Trator1.svg" alt="Trator"></img>
                    </div>
                    <div class="col d-flex mt-8">
                        <div class="text-left m-auto align-middle">
                        <h1 class="my-3 mb-4 font-semibold">TRABALHAMOS COM OS MELHORES <span class="text-[#29CE00]">TRATORES</span></h1>
                        <span class="text-[18px] font-semibold">Aqui você encontra os tratores mais tecnológicos e modernos do mercado</span>
                        <BotaoProdutos text="QUERO CONHECER"></BotaoProdutos>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionProduto