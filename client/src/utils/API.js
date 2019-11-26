import axios from 'axios'


export default {
    // Gets all plants
    getPlants: function() {
      return axios.get("/api/plants");
    },
    //get singular plant
    getPlantbyID: function(id) {
        return axios.get("/api/plants/" + id)
    },
    updatePlant: function(id, plant) {
        return axios.put("/api/plants/" + id, plant)
    },
    // Deletes the plants with the given id
    deletePlant: function(id) {
      return axios.delete("/api/plants/" + id);
    },
    // Saves a plants to the database
    savePlant: function(book) {
      return axios.post("/api/plants", book);
    }
  };