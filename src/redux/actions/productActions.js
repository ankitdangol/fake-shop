import { actionTypes } from "../types/actionTypes"

export const setProducts = products => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProducts = product => {
    return {
        type: actionTypes.SELECTED_PRODUCTS,
        payload: product
    }
}

export const removeSelectedProducts = product => {
    return {
        type: actionTypes.REMOVE_SELECTED_PRODUCTS
    }
}