const API_URL = process.env.REACT_APP_API_URL;

export class Login {
    static login = (action) => {
        return fetch(`${API_URL}/users`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(action.payload)
        }).then(response => response.json())
            .then(data => ({ data }))
            .catch(error => ({ error }))
    }
}
export class UserDetails {
    static userDetails = (id) => {
        return fetch(`${API_URL}/user/${id}`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json' },
        }).then(response => response.json())
            .then(data => ({ data }))
            .catch(error => ({ error }))
    }
}

export class AdminLogin {
    static adminLogin = (action) => {
        return fetch(`${API_URL}/login/ldap`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(action.payload)
        }).then(response => response.json())
            .then(data => ({ data }))
            .catch(error => ({ error }))
    }
}