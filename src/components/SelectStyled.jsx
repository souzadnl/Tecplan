function SelectStyled(props) {

    return(
        <div>
        <label for={props.name} class="d-flex">{props.text}</label>
        <select name={props.name} class="appearance-none d-flex py-2 px-3 rounded-3 border-1 border-gray-300 focus:outline-none focus:border-[#29CF00]">
            <option disabled selected>Escolha uma opção</option>
            <option>Orçamento</option>
            <option>Suporte</option>
            <option>Financeiro</option>
            <option>Encomenda</option>
        </select>
        </div>  
    )
}

export default SelectStyled