import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Country(props) {
  const { name, flag, borders, alpha2Code } = props;
  return (
    <>
      <Card className="col-3">
        <Card.Img variant="top" src={flag} height={120} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{borders.join(",")}</Card.Text>
          <Button variant="primary">{alpha2Code}</Button>
        </Card.Body>
      </Card>
    </>
  );
}
