function BotaoProdutos(props) {
    return(
        <div class="my-4">
            <a href="/" class="rounded-2xl border-2 border-[#29CE00] text-[#29CE00] hover:bg-[#29CE00] hover:text-white px-5 py-2">
            <button>{props.text}</button>
            </a>
        </div>   
    )
}

export default BotaoProdutos