function CardContatos() {
    return(
        <section>
            <div id="fundosection" class="my-36">
            <div id="fundocard" class="border-none bg-danger rounded-xl p-5 w-10/12 text-center m-auto">
                
                <h1 class="mb-4 text-2xl text-black font-bold">Nos envie uma mensagem!</h1>
                
                <form class="d-flex flex-wrap space-between w-full bg-warning">
                    <div>
                        <label for="nome" class="d-flex" >Nome Completo:</label>
                        <input type="text" class="d-flex" name="nome" placeholder="Digite seu nome completo"></input>

                        <label for="email" class="d-flex">Email:</label>
                        <input type="email" class="d-flex" name="email" placeholder="Digite seu email"></input>

                        <label for="select" class="d-flex">Escolha uma opção:</label>
                            <select name="select" class="d-flex">
                                <option selected>Orçamento</option>
                                <option>Suporte</option>
                                <option>Financeiro</option>
                                <option>Encomenda</option>
                            </select>
                    </div>

                    <div> 
                        <label for="textarea" class="d-flex">Mensagem:</label>
                        <textarea name="textarea" class="d-flex" placeholder="Escreva sua mensagem aqui"></textarea>

                        <div class="bg-warning">
                            <input type="reset" value="Cancelar"></input>
                            <input type="submit" value="Enviar"></input>
                        </div> 
                    </div>        
                    
                </form>
            </div>
            </div>
        </section>
        
    )
}

export default CardContatos