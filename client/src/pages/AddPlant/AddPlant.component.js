import React, { Component } from 'react';
import { Input, FormBtn } from "../../components/AddPlantForm";
import FileUploader from "react-firebase-file-uploader";
import firebase from "firebase";
import BottomNav from "../../components/BottomNavigation"
import WaterCalendar from "../../components/WaterCalendar"
import { Container, Row, Col, FormGroup, Label, Alert } from 'reactstrap';
import "./AddPlant.css";
import API from "../../utils/API";
import { ModeComment } from '@material-ui/icons';


class AddPlant extends Component {
  state = {
    soil: "",
    sun: "",
    water: "",
    lastWatered: new Date(),
    weeks: Number,
    days: Number,
    _id: "",
    userID: "",
    plantName: "",
    nonToxic: false,
    plantPic: "",
    plantNickname: "",
    createdAt: new Date() ,
    filename: "",
    picText: "Add your plant pic!",
    isVisible: false
    
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
          lastWatered: new Date(),
          weeks: this.state.weeks,
          days: this.state.days,
      },
      nonToxic: this.state.nonToxic,
      plantPic: this.state.plantPic,
      createdAt: new Date()
  }
    console.log(newPlant);
    API.savePlant(newPlant)
    .catch(err => console.log(err));
    this.setVisible(true);
  };

  handleUploadSuccess = async filename => {
  const downloadURL = await firebase
    .storage()
    .ref("images")
    .child(filename)
    .getDownloadURL();

  this.setState(oldState => ({
    filename: filename,
    plantPic: downloadURL
  }));
  };

  handlePictoggle = () => {
    this.setState({picText: "Does this look right?"})
  }

  setVisible = (boolean) => {
    this.setState({
        isVisible: boolean
    });
  };

  onDismiss = () => {
    this.setVisible(false);
  }
  
  
  componentDidMount(){
    console.log('Plant Id', this.props.match.params.id);
  }

  
  render() {
    return (
      <div className="addPlantContainer">
        {/* Alert on successful plant add*/}
        <Alert color="success" isOpen={this.state.isVisible} toggle={this.onDismiss} style={{ position: 'fixed', zIndex: 1000, width: '100%' }}>
                Plant Added!
        </Alert>

      <Container>

        {/* HEADER TEXT ROW  --------------  */}
        <Row id="header-text">
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <h3> Add Your Plant </h3> 
          </Col>
        </Row>

        {/* FORM ROW  ----------------------  */}
        <Row id="form-row">
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <h6>* denotes required field</h6>

            <form>

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
                placeholder="Soil Type"
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
                placeholder="Additional Watering Instructions."
              />

              <Input
                type="number"
                value={this.state.days}
                onChange={this.handleInputChange}
                name="days"
                placeholder="# of days between watering (integer only).* " 
              />

              <WaterCalendar 
                value={this.state.lastWatered}
                onChange={this.handleInputChange}
                name="lastWatered"
              />

              {/* <Input
                // NOTE: this 'value' needs to be confirmed - Added in this new input form for front-end purposes
                // and watering schedule purposes 

                value={this.state.lastwatered}
                onChange={this.handleInputChange}
                name="lastwatered"
                placeholder="Last Watered. Please input YYYY-MM-DD"
              /> */}

              <h6 id="toxicDiv">Is your plant toxic to pets?</h6>
              
              <FormGroup tag="fieldset">
                <FormGroup check>
                  <Label check id="radioPlace">
                    <Input 
                      className="radioSize"
                      type="radio" 
                      name="nonToxic" 
                      value={true} 
                      onChange={this.handleInputChange} />{' '}
                    Yes
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
                    No
                  </Label>
                  {this.state.plantPic === ""
                    ? null
                    : <div style={{float: 'right'}}>
                    <img src={this.state.plantPic} style={{height: '250px', width: '250px'}} />;
                    </div>
                  }
                    <div className="imageContainer" style={{float:'right'}}>
                      <label style={{backgroundColor: '#3B9732', color: 'white', padding: 10, borderRadius: 4, cursor: 'pointer'}}>
                          {this.state.picText}
                        <FileUploader
                        hidden
                        accept="image/*"
                        name="image-uploader-multiple"
                        randomizeFilename
                        storageRef={firebase.storage().ref("images")}
                        onUploadSuccess={this.handleUploadSuccess}
                        onClick={this.handlePictoggle}
                        multiple
                        />
                      </label>
                    </div>
              </FormGroup>
            </FormGroup>
            </form>
          </Col>
        </Row>

        {/* SUBMIT BUTTON ROW  --------------  */}
        <Row id="submit-btn-row">
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <FormBtn
                disabled={!(this.state.plantName && this.state.sun &&this.state.days)}
                onClick={this.handleFormSubmit}
                >
                Submit
            </FormBtn>
          </Col>
        </Row>

      </Container>

      <BottomNav />

    </div>

    );
  }
}

export default AddPlant;