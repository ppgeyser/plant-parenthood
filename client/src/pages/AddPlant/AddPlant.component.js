import React, { Component } from 'react';
import { Input, TextArea, FormBtn } from "../../components/AddPlantForm";
import BottomNav from "../../components/BottomNavigation"
import { Container, Row, Col } from 'reactstrap';
import "./AddPlant.css";


class AddPlant extends Component {
  state = {
    url: "",
    name:"",
    nickname: "",
    sciname: "",
    soilcare: "",
    suncare: "",
    watercare:"",
    toxicity:"",
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
    let { url, name, nickname, sciname, soilcare, suncare, watercare, toxicity } = this.state
    let something = {
      url,
      name,
      nickname,
      sciname,
      soilcare,
      suncare,
      watercare,
      toxicity
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

      <Container id="container-body">
        {/* 'YOUR PLANTS' - ROW  --------------  */}
        <Row id="header-text">
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <h3> Add Your Plant </h3> 
          </Col>
        </Row>

        <form>
          <div className="imageContainer">
            {/* <div>
              Plant image component will go here
            </div> */}
            {/* <Input className="photoUrl" */}
            <div className="photoUrlInput">
              <Input
                value={this.state.url}
                onChange={this.handleInputChange}
                name="url"
                placeholder="Insert Photo URL (optional)"
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
            value={this.state.nickname}
            onChange={this.handleInputChange}
            name="nickname"
            placeholder="Plant Nickname (optional)"
          />

          <Input
            value={this.state.sciname}
            onChange={this.handleInputChange}
            name="sciname"
            placeholder="Scientific Name (optional)"
          />

          <Input
            value={this.state.soilcare}
            onChange={this.handleInputChange}
            name="soilcare"
            placeholder="Plant Soil Care (optional)"
          />

          <Input
            value={this.state.suncare}
            onChange={this.handleInputChange}
            name="suncare"
            placeholder="Plant Sun Care (required)"
          />
          <TextArea
            value={this.state.watercare}
            onChange={this.handleInputChange}
            name="watercare"
            placeholder="Plant Watering Care (required)"
          />

          <Input
            value={this.state.toxicity}
            onChange={this.handleInputChange}
            name="toxicity"
            placeholder="Plant Toxicity(optional)"
          />

          <FormBtn
            disabled={!(this.state.name && this.state.suncare && this.state.watercare)}
            onClick={this.handleFormSubmit}
          >
            Submit
          </FormBtn>

        </form>

      </Container>

      <BottomNav />

    </div>

    );
  }
}

export default AddPlant;
