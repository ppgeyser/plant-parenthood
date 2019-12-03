import React, { Component } from 'react';
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import BottomNav from '../../components/BottomNavigation';
import CreateIcon from '@material-ui/icons/Create';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Container, Row, Col, Card, Input, CardColumns, CardImg, CardBody, CardText } from 'reactstrap';
import API from "../../utils/API";
 

firebase.initializeApp({
  apiKey: process.env.REACT_APP_firebase_apiKey,
  storageBucket: process.env.REACT_APP_firebase_storageBucket
});
 
class Feed extends Component {
  state = {
    filenames: [],
    post: [],
    isUploading: false,
    uploadProgress: 0,
    captionText: ""
  };

  componentDidMount(){
      this.loadPosts();
  }

  loadPosts = () => {
      let postArr = [];
      API.getAllPosts()
      .then(res => {
          res.data.forEach(post => {
        postArr.push(post);
        })
        this.setState({post: [...postArr]})
      })
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
 
  handleUploadStart = () =>
    this.setState({
      isUploading: true,
      uploadProgress: 0
    });
 
  handleProgress = progress =>
    this.setState({
      uploadProgress: progress
    });
 
  handleUploadError = error => {
    this.setState({
      isUploading: false
    });
    console.error(error);
  };
 
  handleUploadSuccess = async filename => {
      const userId = localStorage.getItem('userId');
    const downloadURL = await firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL();

    this.savePost({
        imageURL: downloadURL,
        createdAt: new Date(),
        userID: userId,
        post: this.state.captionText
        });
  };

  savePost = (post) => {
    API.savePost(post);
    this.setState(oldState => ({
      post: [post, ...oldState.post],
    }));
  }
 
  render() {
    return (
      <div>
        <Container id="container-body">

        <Row id="header-text">
            <Col sm="12" md={{ size: 8, offset: 2 }}>
                <h3> Plant Feed </h3> 
            </Col>
        </Row>
      <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
        <Card style={{border: '0px'}}>
          <Row>
            <Col xs={{ size:9 }} sm={{ size:10 }}>
              <Input 
              type="textarea" className="form-control"
              style={{height: "100%", width: "100%"}}
              value={this.state.captionText}
              onChange={this.handleInputChange}
              name="captionText"
              placeholder="Write a caption *"
              />
            </Col>

            <Col xs={{ size:3 }} sm={{ size:2 }}>
                {!this.state.captionText
                ? <button className='text-center' style={{backgroundColor: '#3B9732', color: 'white', height: '100%', width: '100%', padding: 10, borderRadius: 4, cursor: 'pointer'}}>
                  <CreateIcon fontSize='large' style={{color: 'white'}}/>
                </button>
                : <label className='text-center' style={{backgroundColor: '#3B9732', color: 'white', height: '100%', width: '100%', padding: 10, borderRadius: 4, cursor: 'pointer'}}>
                  <CloudUploadIcon fontSize='large' style={{color: 'white'}}/>
                  <FileUploader
                  disabled={!this.state.captionText}
                  hidden
                  accept="image/*"
                  name="image-uploader-multiple"
                  randomizeFilename
                  storageRef={firebase.storage().ref("images")}
                  onUploadStart={this.handleUploadStart}
                  onUploadError={this.handleUploadError}
                  onUploadSuccess={this.handleUploadSuccess}
                  onProgress={this.handleProgress}
                  multiple
                  />
              </label>
                }
            </Col>
            
          </Row>
        </Card>
        </Col>
      </Row>

      <Container style={{maxWidth: '800px', marginBottom: '10%'}}>
        <Row>
          <Col>
          <CardColumns>
          {this.state.post.map((post, i) => {
          return (
            <Card >
        <CardImg src={post.imageURL} alt="Plant Post and Image" />
        <CardBody>
          <CardText>{post.post}</CardText>
        </CardBody>
      </Card>
          )}
          )}
          </CardColumns>
          </Col>
        </Row>
      </Container>
        </Container>
        
        <BottomNav />
      </div>
    );
  }
}

export default Feed;