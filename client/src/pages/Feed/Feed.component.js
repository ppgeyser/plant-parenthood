import React, { Component } from 'react';
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import BottomNav from '../../components/BottomNavigation';
import { Container, Row, Col } from 'reactstrap';
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
    uploadProgress: 0
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
      // Todo: handle error
    });
    console.error(error);
  };
 
  handleUploadSuccess = async filename => {
    const downloadURL = await firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL();
 
    this.setState(oldState => ({
      filenames: [...oldState.filenames, filename],
      downloadURLs: [...oldState.downloadURLs, downloadURL],
      uploadProgress: 100,
      isUploading: false
    }));
  };
 
  render() {
    return (
      <div>
        <Container id="container-body">

        <Row id="header-text">
            <Col sm="12" md={{ size: 8, offset: 2 }}>
                <h3> Plant Feed </h3> 
            </Col>
        </Row>
            
        <div className="addPic text-center">
        <label style={{backgroundColor: '#3B9732', color: 'white', padding: 10, borderRadius: 4, cursor: 'pointer'}}>
        Add your plant pic!
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
        </label>
 
        <p>Progress: {this.state.uploadProgress}</p>
        </div>
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