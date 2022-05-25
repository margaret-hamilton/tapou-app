import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Row, Col } from 'react-bootstrap';


export class MapContainer extends Component {
  render() {
    return (
    <Row>
        <Col>
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      />
      </Col>
      </Row>
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC0PlJUjpPEECkzwdDd5HeB4S2WKfU8_JE'
})(MapContainer);