import React, { Component } from 'react';
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import { FormBtn } from "../../components/AddPlantForm";
import BottomNav from '../../components/BottomNavigation';
import { Container, Row, Col, Card, Input } from 'reactstrap';
import API from "../../utils/API";
// import {DropzoneDialog} from 'material-ui-dropzone'
// import Button from '@material-ui/core/Button';
 
// Setup Firebase
firebase.initializeApp({
  apiKey: process.env.REACT_APP_firebase_apiKey,
  storageBucket: process.env.REACT_APP_firebase_storageBucket
});
 
class Feed extends Component {
  state = {
    filenames: [],
    downloadURLs: [],
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
        postArr.push(post.imageURL);
        })
        this.setState({downloadURLs: [...postArr]})
      })
  }
 
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
      // Todo: handle error
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

    this.setState(oldState => ({
      filenames: [...oldState.filenames, filename],
      downloadURLs: [downloadURL, ...oldState.downloadURLs],
      uploadProgress: 100,
      isUploading: false
    }),
    this.savePost({
        imageURL: downloadURL,
        createdAt: new Date(),
        userID: userId
        })
    );
  };

  savePost = (post) => {
    API.savePost(post)
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
        <Col sm="8" >
        <Input type="textarea" className="form-control" style={{height: "100%", width: "100%"}} placeholder="Write a caption..." />
        </Col>
        <Col sm="4">
        <button className="btn btn-success" disabled={!this.state.captionText} style={{backgroundColor: '#3B9732', color: 'white', height: '100%', width: '100%', padding: 10, borderRadius: 4, cursor: 'pointer'}}>
        Click here to add a picture to your post!
            <FileUploader
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
        </button>
        </Col>
        {/* <p>Progress: {this.state.uploadProgress}</p> */}
        </Row>
        </Card>
        </Col>
        </Row>
        <div>
          {this.state.downloadURLs.map((downloadURL, i) => {
            return <img key={i} src={downloadURL} />;
          })}
        </div>


        </Container>
        
        <BottomNav />
      </div>
    );
  }
}

export default Feed;