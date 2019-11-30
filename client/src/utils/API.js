import axios from 'axios'


export default {
    // Gets all plants
    getPlants: function(userID) {
      return axios.get("/api/plants/user/" + userID);
    },
    //get singular plant
    getPlantByID: function(id) {
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
    savePlant: function(plant) {
      return axios.post("/api/plants/", plant);
    },
    //Get all posts
    getAllPosts: function() {
      return axios.get("/api/feed/");
    },
    //get singular post
    getPostByID: function(id) {
        return axios.get("/api/feed/" + id)
    },
    // For adding comments to post or editing post blurb
    updatePost: function(id, post) {
        return axios.put("/api/feed/" + id, post)
    },
    // Deletes the post with the given id
    deletePost: function(id) {
      return axios.delete("/api/feed/" + id);
    },
    // Saves a post to the database
    savePost: function(post) {
      return axios.post("/api/feed/", post);
    }
  };