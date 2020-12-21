import React from "react";

const Card = (props) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img src={props.posterUrl} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text> {props.description}</Card.Text>
          <Card.Text> {props.rate}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Card;
