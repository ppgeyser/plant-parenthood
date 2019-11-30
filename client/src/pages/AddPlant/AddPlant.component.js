import React, { Component } from 'react';
import { Input, TextArea, FormBtn } from "../../components/AddPlantForm";
import BottomNav from "../../components/BottomNavigation"
import { Container, Row, Col, FormGroup, Label } from 'reactstrap';
import "./AddPlant.css";
import API from "../../utils/API";


class AddPlant extends Component {
  state = {
    soil: "",
    sun: "",
    water: "",
    lastwatered: "",
    weeks: "",
    days: "",
    _id: "",
    userID: "",
    plantName: "",
    nonToxic: false,
    plantPic: "",
    plantNickname: ""   
};

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const userId = localStorage.getItem('userId')
    let newPlant = {
      userID: userId,
      plantName: this.state.plantName,
      plantNickname: this.state.plantNickname,
      plantCare: {
          soil: this.state.soil,
          sun: this.state.sun,
          water: this.state.water,
          // lastwatered: this.state.lastwatered,
          // We can change weeks and days to a state later
          weeks: 1.5,
          days: 10,
      },
      nonToxic: this.state.nonToxic,
      plantPic: this.state.plantPic
  }
    console.log(newPlant);
    API.savePlant(newPlant)
    .catch(err => console.log(err));
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

        <h6>* denotes required field</h6>

        <form>
          <div className="imageContainer">
            {/* <div>
              Plant image component will go here
            </div> */}
            {/* <Input className="photoUrl" */}
            <div className="photoUrlInput">
              <Input
                value={this.state.plantPic}
                onChange={this.handleInputChange}
                name="plantPic"
                placeholder="Insert Photo URL"
              />
            </div>
          </div>

          <Input
            value={this.state.plantName}
            onChange={this.handleInputChange}
            name="plantName"
            placeholder="Plant Name*"
          />

          <Input
            value={this.state.plantNickname}
            onChange={this.handleInputChange}
            name="plantNickname"
            placeholder="Plant Nickname"
          />

          <Input
            value={this.state.soil}
            onChange={this.handleInputChange}
            name="soil"
            placeholder="Soil Type *"
          />

          <Input
            value={this.state.sun}
            onChange={this.handleInputChange}
            name="sun"
            placeholder="Sun*"
          />
          <Input
            value={this.state.water}
            onChange={this.handleInputChange}
            name="water"
            placeholder="Watering Frequency (in days)*"
          />

          <Input
            // NOTE: this 'value' needs to be confirmed - Added in this new input form for front-end purposes
            // and watering schedule purposes 

            value={this.state.lastwatered}
            onChange={this.handleInputChange}
            name="lastwatered"
            placeholder="Last Watered (in days)"
          />

          <h6 id="toxicDiv">Is your plant toxic?</h6>
          
          <FormGroup tag="fieldset">
            <FormGroup check>
              <Label check id="radioPlace">
                <Input 
                  className="radioSize"
                  type="radio" 
                  name="nonToxic" 
                  value={true} 
                  onChange={this.handleInputChange} />{' '}
                True
              </Label>
          {/* </FormGroup> */}

          {/* <FormGroup check> */}
              <Label check id="radioPlace">
                <Input 
                  className="radioSize"
                  type="radio" 
                  name="nonToxic" 
                  value={false} 
                  onChange={this.handleInputChange} />{' '}
                False
              </Label>
          </FormGroup>
        </FormGroup>


          <FormBtn
            disabled={!(this.state.plantName && this.state.sun && this.state.soil &&this.state.water)}
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