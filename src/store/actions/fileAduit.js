import { types } from '../constants';

export const fileAduit = (data) => {
    return {
        type: types.FILE_ADUIT,
        payload: data
    }
}