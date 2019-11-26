import axios from 'axios'


export class API {
    static getCheeseById(cheeseId) {
        return axios.get(`localhost:5000/api/cheese/${cheeseId}`);
    }

    static fetchUserPlantsByUserId(userId) {
        console.log('fetchUserPlantsByUserId(userId)', userId);
        const url = `/api/users/${userId}/plants`;
        console.log('URL', url);
        return axios.get(url);
    }
}
