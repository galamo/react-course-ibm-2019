import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

// this.state.param = 5;
// this.state.param = {  name: "gal" };
export default function Country(props) {
  const { name, flag, borders, alpha2Code, star } = props;
  return (
    <>
      <Card className="col-3">
        <Card.Img variant="top" src={flag} height={120} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{borders.join(",")}</Card.Text>
          <Button variant="primary">{alpha2Code}</Button>
          <Stars />
        </Card.Body>
      </Card>
    </>
  );
}

export class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedStar: 0 };
  }

  render() {
    return (
      <div>
        {getstars(5).map((item, index) => {
          return (
            <FaStar
              onClick={() => {
                this.setState({ selectedStar: index });
                // this.props.rank();
              }}
              color={index > this.state.selectedStar ? "blue" : "red"}
            />
          );
        })}
      </div>
    );
  }
}

function getstars(n) {
  const starts = [];
  for (let index = 0; index < n; index++) {
    starts.push(FaStar);
  }
  return starts;
}
