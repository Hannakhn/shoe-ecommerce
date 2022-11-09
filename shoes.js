import React, { Component } from "react";
import { PRODUCTS } from "./products";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  Button,
  Row,
  Col,
  Container
} from "reactstrap";


export default class Shoes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shoes: PRODUCTS
    };
  }
  render(shoes) {
    const shoeDirectory = this.state.shoes.map((shoe) => {
      return (

        <Col md={4} lg={4} sm={4} xs={12} style={{ padding: "30px", marginbottom:'30px' }}>
            <Card className="ShoeCards">
              <div key={shoe.id}>
                <CardImg src={shoe.image} className='cardImages'/>
                <CardTitle tag="h5">{shoe.name}</CardTitle>
                <CardText>{shoe.description}</CardText>
                <CardText>{shoe.price}</CardText>
                <Button color="primary">Add</Button>
              </div>
            </Card>
        </Col>
      );
    });

    return (
      <section>
        <Container>
          <Row>{shoeDirectory}</Row>
        </Container>
      </section>
    );
  }
}
