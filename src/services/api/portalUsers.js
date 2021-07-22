const API_URL = process.env.REACT_APP_API_URL;

export class PortalUsers {

    static getClientUsers = (data) => {
        return fetch(`${API_URL}/users/ldap?is_ldap=0`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            },
        }).then(response => response.json())
            .then(data => ({ data }))
            .catch(error => ({ error }))
    }

    static getPortalUsers = (data) => {
        return fetch(`${API_URL}/users/ldap?is_ldap=1`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            },
        }).then(response => response.json())
            .then(data => ({ data }))
            .catch(error => ({ error }))
    }

    static updateUsers = (data) => {
        let id = data.id;
        // delete data["id"];
        return fetch(`${API_URL}/user/${id}`, {
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

    static deleteUsers = (data) => {
        return fetch(`${API_URL}/user/${data}`, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            },
        }).then(response => response.json())
            .then(data => ({ data }))
            .catch(error => ({ error }))
    }
}