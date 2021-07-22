const API_URL = process.env.REACT_APP_API_URL;

export class DownloadSoftware {
    static getDownloadSoftwareDetails = (id) => {
        return fetch(`${API_URL}/software/${id}`, {
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