const API_URL = process.env.REACT_APP_API_URL;

export class ManageSoftwares {

    static updateProduct = (data) => {
        let id = data.id;
        delete data["id"];
        return fetch(`${API_URL}/product/${id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(data => ({ data }))
            .catch(error => ({ error }))
    }

    static updateSoftware = (data) => {
        let id = data.id;
        delete data["id"];
        return fetch(`${API_URL}/software/${id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(data => ({ data }))
            .catch(error => ({ error }))
    }

}