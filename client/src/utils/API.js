import axios from 'axios'

export default class API {
    static getCheeseById(cheeseId) {
        return axios.get(`localhost:5000/api/cheese/${cheeseId}`);
    }
}
