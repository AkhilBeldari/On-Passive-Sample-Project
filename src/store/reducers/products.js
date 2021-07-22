import { types } from '../constants';

const intialState = {
    loading: false,
    productsList: [],
    productData: {},
    subProductData: {},
    error: false,
    generateLinkData: {},
    deleteData: false,
    systemStatus: "",
    newProduct: ""
}

export const products = (state = intialState, action) => {
    switch (action.type) {
        case types.SOFTWARE_PRODUCTS:
            return {
                ...state,
                loading: true,
                productsList: [],
                error: false
            }
        case types.SOFTWARE_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                productsList: action.payload,
                error: false
            }
        case types.SOFTWARE_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                productsList: [],
                error: true
            }
        case types.SYSTEM_STATUS:
            return {
                ...state,
                loading: true,
                systemStatus: "",
                error: false
            }
        case types.SYSTEM_STATUS_SUCCESS:
            return {
                ...state,
                loading: false,
                systemStatus: action.payload,
                error: false
            }
        case types.SYSTEM_STATUS_ERROR:
            return {
                ...state,
                loading: false,
                systemStatus: "",
                error: true
            }
        case types.CLEAR_SOFTWARE_PRODUCTS:
            return {
                ...state,
                loading: false,
                productsList: [],
                error: false
            }
        case types.PRODUCT_DETAILS:
            return {
                ...state,
                loading: true,
                productData: {},
                subProductData: {},
                error: false
            }
        case types.PRODUCT_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                productData: action.payload,
                subProductData: {},
                error: false
            }
        case types.PRODUCT_DETAILS_ERROR:
            return {
                ...state,
                loading: false,
                productData: {},
                error: true
            }
        case types.CLEAR_PRODUCT_DETAILS:
            return {
                ...state,
                loading: false,
                productData: {},
                error: false
            }
        case types.SUB_PRODUCT:
            return {
                ...state,
                loading: true,
                productData: {},
                subProductData: {},
                error: false
            }
        case types.SUB_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                productData: {},
                subProductData: action.payload,
                error: false
            }
        case types.SUB_PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                subProductData: {},
                error: true
            }
        case types.CLEAR_SUB_PRODUCT:
            return {
                ...state,
                loading: false,
                subProductData: {},
                error: false
            }
        case types.DELETE_PRODUCT:
            return {
                ...state,
                loading: true,
                deleteData: false,
                error: false
            }
        case types.DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                deleteData: true,
                error: false
            }
        case types.DELETE_PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                deleteData: false,
                error: true
            }
        case types.GET_LINK:
            return {
                ...state,
                loading: true,
                generateLinkData: {},
                error: false
            }
        case types.GET_LINK_SUCCESS:
            return {
                ...state,
                loading: false,
                generateLinkData: action.payload,
                error: false
            }
        case types.GET_LINK_ERROR:
            return {
                ...state,
                loading: false,
                generateLinkData: {},
                error: true
            }
        case types.CLEAR_LINK:
            return {
                ...state,
                loading: false,
                generateLinkData: {},
                error: false
            }
        case types.NEW_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                newProduct: action.payload,
                error: false
            }
        case types.NEW_PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                newProduct: "",
                error: action.payload
            }
        case types.CLEAR_NEW_PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                newProduct: "",
                error: ""
            }
        default:
            return state;
    }
}