function InputStyled(props) {
    return(
        <div class="mb-3">
            <label for={props.name} class="d-flex pb-2">{props.text}</label>
            <input type={props.type} class="d-flex w-full py-2 px-3 rounded-3 border-1 border-gray-300 focus:outline-none focus:border-[#29CF00]" name={props.name} placeholder={props.placeholder} maxLength={40}></input>
        </div>
    )
}

export default InputStyled