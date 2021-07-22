const API_URL = process.env.REACT_APP_API_URL;

export class ProductUpload {
    static fileUpload = (data) => {
        let formData = new FormData();
        formData.append('file', data.file);
        return fetch(`${API_URL}/software/upload/${data.product_id}`, {
            method: 'post',
            headers: {
                'enctype': 'multipart/form-data',
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            },
            body: formData
        }).then(response => response.json())
            .then(data => ({ data }))
            .catch(error => ({ error }))
    }

    static productDataUpload = (data) => {
        // return fetch(`${API_URL}/software/${data.software_id}`, {
        return fetch(`${API_URL}/softwares`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            },
            body: JSON.stringify(data)
            // body: JSON.stringify(data.newProductData)
        }).then(response => response.json())
            .then(data => ({ data }))
            .catch(error => ({ error }))
    }

    static updateProductDataUpload = (data) => {
        return fetch(`${API_URL}/software/${data.id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            },
            body: JSON.stringify(data)
            // body: JSON.stringify(data.newProductData)
        }).then(response => response.json())
            .then(data => ({ data }))
            .catch(error => ({ error }))
    }

}