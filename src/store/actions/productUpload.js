import { types } from '../constants';

export const fileUpload = (fileDetails) => {
    return {
        type: types.FILE_UPLOAD,
        payload: fileDetails
    }
}

export const newProductUpload = (productDetails) => {
    return {
        type: types.PRODUCT_UPLOAD,
        payload: productDetails
    }
}

export const updateProductUpload = (updateProductDetails) => {
    return {
        type: types.UPDATE_PRODUCT_UPLOAD,
        payload: updateProductDetails
    }
}

export const clearFileData = () => {
    return {
        type: types.CLEAR_FILE_DATA,
    }
}

export const clearNewProductData = () => {
    return {
        type: types.CLEAR_NEW_PRODUCT_DATA,
    }
}
