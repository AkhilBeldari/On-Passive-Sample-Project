const API_URL = process.env.REACT_APP_API_URL;

export class Products {

    static newProduct = (newProductData) => {
        return fetch(`${API_URL}/products`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            },
            body: JSON.stringify(newProductData)
        }).then(response => response.json())
            .then(data => ({ data }))
            .catch(error => ({ error }))
    }

    static getProductDetails = (productID) => {
        return fetch(`${API_URL}/softwares?productid=${productID}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            },
        }).then(response => response.json())
            .then(data => ({ data }))
            .catch(error => ({ error }))
    }

    static getSubProduct = (productID) => {
        return fetch(`${API_URL}/sub_products?productid=${productID}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            },
        }).then(response => response.json())
            .then(data => ({ data }))
            .catch(error => ({ error }))
    }

    static getProducts = () => {
        return fetch(`${API_URL}/products`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access_token')} `
            },
        }).then(response => response.json())
            .then(data => ({ data }))
            .catch(error => ({ error }))
    }

    static getSystemStatus = () => {
        return fetch(`https://status.vhtcx.com/api/v2/status.json`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            },
        }).then(response => response.json())
            .then(data => ({ data }))
            .catch(error => ({ error }))
    }

    static deleteProduct = (data) => {
        return fetch(`${API_URL}/product/${data}`, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            },
        }).then(response => response.json())
            .then(data => ({ data }))
            .catch(error => ({ error }))
    }
    
    static deleteSoftware = (data) => {
        return fetch(`${API_URL}/software/${data.id}`, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(data => ({ data }))
            .catch(error => ({ error }))
    }
    
    static getLink = (data) => {
        return fetch(`${API_URL}/software/getlink?softwareid=${data}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            },
        }).then(response => response.json())
            .then(data => ({ data }))
            .catch(error => ({ error }))
    }
}