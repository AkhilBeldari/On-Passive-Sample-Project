const API_URL = process.env.REACT_APP_API_URL;

export class SearchResult {

    static getSearchResult = (data) => {
        return fetch(`${API_URL}/search?search=${data}`, {
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