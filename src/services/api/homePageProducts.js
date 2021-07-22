const API_URL = process.env.REACT_APP_API_URL;

export class HomePageProducts {

    static getHomePageProducts = () => {
        return fetch(`${API_URL}/products/recently_uploaded`, {
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