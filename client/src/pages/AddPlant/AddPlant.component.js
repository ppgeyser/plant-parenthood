import React, { Component } from 'react';
import { Input, TextArea, FormBtn } from "../../components/AddPlantForm";
import Nav from "../../components/Nav"
import "./AddPlant.css";


class AddPlant extends Component {
  state = {
    url: "",
    name: "",
    species: "",
    watering:"",
      // {
      // how do we want this set up?? a watering checkbox for each day? and then one state for each day and you are chaning the state of the selected objects
      // }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    let { url, name, species, watering } = this.state
    let something = {
      url,
      name,
      species,
      watering,
    }
    console.log("something", something);
    // if (this.state.title && this.state.author) {
    //   API.saveBook({
    //     title: this.state.title,
    //     author: this.state.author,
    //     synopsis: this.state.synopsis
    //   })
    //     .then(res => this.loadBooks())
    //     .catch(err => console.log(err));
    // }
  };
  
  
  componentDidMount(){
    console.log('Plant Id', this.props.match.params.id);
  }
  
  render() {
    return (
      <div className="addPlantContainer">
        <Nav style={{ background: "#313133", marginBottom: "5px" }} />
        
        {/* should we have a header component, so we can have a header that's stylized across pages and only the text inside changes? */}
        <h1>ADD YOUR PLANT</h1>

        <form>
          <div className="imageContainer">
            <div>
              Plant image component will go here
            </div>
            {/* <Input className="photoUrl" */}
            <div className="photoUrlInput">
              <Input
                value={this.state.url}
                onChange={this.handleInputChange}
                name="url"
                placeholder="Insert Photo URL (required)"
              />
            </div>
          </div>
          <Input
            value={this.state.name}
            onChange={this.handleInputChange}
            name="name"
            placeholder="Plant Name (required)"
          />
          <Input
            value={this.state.species}
            onChange={this.handleInputChange}
            name="species"
            placeholder="Species Type (required)"
          />
          <TextArea
            value={this.state.watering}
            onChange={this.handleInputChange}
            name="watering"
            placeholder="Watering Schedule (Optional)"
          />
          <FormBtn
            disabled={!(this.state.url && this.state.name && this.state.species && this.state.watering)}
            onClick={this.handleFormSubmit}
          >
            Submit
          </FormBtn>
        </form>
      </div>
    );
  }
}

export default AddPlant;
