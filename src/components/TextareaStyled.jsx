function TextareaStyled(props) {
    return(
        <div class="max-lg:w-full w-5/12 py-4 h-2/4">
            <label for={props.name} class="d-flex pb-2">{props.text}</label>
            <textarea name={props.name} class="resize-none d-flex w-full py-2 px-3 rounded-3 border-1 border-gray-300 focus:outline-none focus:border-[#29CF00] h-32" placeholder={props.placeholder} maxLength={250}></textarea>
        </div>
    )
}

export default TextareaStyled