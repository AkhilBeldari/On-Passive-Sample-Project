import { types } from '../constants';

export const getSoftwareDetails = (softwareId) => {
    return {
        type: types.DOWNLOAD_SOFTWARE,
        payload: softwareId
    }
}

export const clearSoftwareDetails = () => {
    return {
        type: types.CLEAR_DOWNLOAD_SOFTWARE_DATA,
    }
}
