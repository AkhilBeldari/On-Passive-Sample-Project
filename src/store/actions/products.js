import { types } from '../constants';

export const getProducts = () => {
    return {
        type: types.SOFTWARE_PRODUCTS
    }
}

export const getSystemStatus = () => {
    return {
        type: types.SYSTEM_STATUS
    }
}

export const clearProducts = (message) => {
    return {
        type: types.CLEAR_SOFTWARE_PRODUCTS,
        payload: message
    }
}

export const addNewProduct = (newProductData) => {
    return {
        type: types.NEW_PRODUCT,
        payload: newProductData
    }
}

export const clearNewProductError = () => {
    return {
        type: types.CLEAR_NEW_PRODUCT_ERROR,
    }
}

export const getLink = (softwareId) => {
    return {
        type: types.GET_LINK,
        payload: softwareId
    }
}

export const clearLinkData = () => {
    return {
        type: types.CLEAR_LINK,
    }
}

export const getProductDetails = (productId) => {
    return {
        type: types.PRODUCT_DETAILS,
        payload: productId
    }
}

export const getSubProducts = (productId) => {
    return {
        type: types.SUB_PRODUCT,
        payload: productId
    }
}

export const updateProduct = (productData) => {
    return {
        type: types.UPDATE_PRODUCT,
        payload: productData
    }
}

export const updateSoftware = (softwareData) => {
    return {
        type: types.UPDATE_SOFTWARE,
        payload: softwareData
    }
}

export const deleteProduct = (productId) => {
    return {
        type: types.DELETE_PRODUCT,
        payload: productId
    }
}

export const deleteSoftware = (softwareId) => {
    return {
        type: types.DELETE_SOFTWARE,
        payload: softwareId
    }
}