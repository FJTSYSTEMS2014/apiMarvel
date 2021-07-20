import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card2 from './Card2';

const Card1 = (props) => {
  return (
    <Row>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Button</Button>
      </Card>
      <Col sm="6">
    
        <Card body>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>    <Card2 /> 
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      
      </Col>
    
    </Row>

    
  );
};

export default Card1;
