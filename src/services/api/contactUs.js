const API_URL = process.env.REACT_APP_API_URL;

export class RaiseTicket {
    static raiseTicket = (ticketData) => {
        return fetch(`${API_URL}/ticket/raise`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            },
            body: JSON.stringify(ticketData)
        }).then(response => response.json())
            .then(data => ({ data }))
            .catch(error => ({ error }))
    }
}