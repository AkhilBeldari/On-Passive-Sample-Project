const API_URL = process.env.REACT_APP_API_URL;

export class FileAduit {
    static fileAduit = (data) => {
        return fetch(`${API_URL}/file_audit`, {
            method: 'post',
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