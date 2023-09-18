import { View, Text } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'


export const Context = createContext(null)

const ProductContext = ({ children }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [favoriteItems, setFavoriteItems] = useState([])


    const addToFavorite = (productId, reason) => {
        let copyItem = [...favoriteItems]
        const index = copyItem.findIndex(item => item.id === productId)

        if (index === -1) {
            const getProduct = products.find(item => item.id === productId)
            copyItem.push({
                title: getProduct.title,
                id: productId,
                reason
            })
        } else {
            copyItem[index] = {
                ...copyItem[index], reason
            }
        }

        setFavoriteItems(copyItem)
    }

    const handleRemove = (getCurrentId) => {

        let copyItem = [...favoriteItems]

        copyItem = copyItem.filter(item => item.id !== getCurrentId)

        setFavoriteItems(copyItem)
    }

    useEffect(() => {
        setLoading(true)
        async function getProductsFromsApi() {
            const response = await fetch('https://dummyjson.com/products');
            const result = await response.json();

            if (result) {
                setProducts(result.products)
                setLoading(false)
            }
        }

        getProductsFromsApi()
    }, [])

    return (
        <Context.Provider value={{ products, loading, addToFavorite, favoriteItems, handleRemove }}>
            {children}
        </Context.Provider>
    )
}

export default ProductContext