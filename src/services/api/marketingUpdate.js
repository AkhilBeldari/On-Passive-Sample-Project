const API_URL = process.env.REACT_APP_API_URL;

export class MarketingUpdate {
    static marketingUpdate = (data) => {
        let bodyData = {
            "image_data": data.image && data.image.src ? data.image.src : "",
            "html_content": data.html_content,
            "role_type": data.role_type,
            "image_size": data.image_size
        }
        return fetch(`${API_URL}/marketing_update/${data.id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            },
            body: JSON.stringify(bodyData)
        }).then(response => response.json())
            .then(data => ({ data }))
            .catch(error => ({ error }))
    }

    static getMarketingDetails = (data) => {
        return fetch(`${API_URL}/marketing_update?role_type=${data.role_type}`, {
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