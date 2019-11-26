import axios from 'axios'


export default {
    // Gets all plants
    getPlants: function() {
      return axios.get("/api/books");
    },
    //get singular plant
    getPlantbyID: function(id) {
        return axios.get("/api/books/" + id)
    },
    updatePlant: function(id, plant) {
        return axios.put("/api/books/" + id, plant)
    },
    // Deletes the plants with the given id
    deletePlant: function(id) {
      return axios.delete("/api/books/" + id);
    },
    // Saves a plants to the database
    savePlant: function(book) {
      return axios.post("/api/books", book);
    }
  };