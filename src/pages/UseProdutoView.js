import axios from "axios"
import React, { useEffect, useState} from "axios"
import {useParams} from "react-router-dom"

export const UseProdutoView = () => {

    const {id: productId} = useParams()
    const {product, setProduct} = useState({})
    const {selectedColor, setSelectedColor} = useState("")
    const {selectedSize, setSelectedSize} = useState("")
    const {selectedQuantity, setSelectedQuantity} = useState(1)

    const handleQuantityChange = ({target: {value}}) => {
        setSelectedQuantity(value)
    }

    const getImage = (color) => {
        const {attributes} = product
        const image = attributes.images.data.find(image => image.attributes.name.includes(color))
        return image.attributes.url || ""
    }

    useEffect(() => {
if (product && product.attributes) {
    const { attributes } = product
    setSelectedColor(attributes.color[0])
    setSelectedSize(attributes.color[0])
}
    }, [product, setSelectedColor, setSelectedSize])

    const fetchCategories = async() => {
        try {
            const res = await axios.get(`http://localhost:3000/${productId}`)
        } catch (error) {

        }
    }

  return (
    <div>UseProdutoView</div>
  )
}
