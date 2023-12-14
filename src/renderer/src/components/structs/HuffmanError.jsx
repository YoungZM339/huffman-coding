import { Alert, Button, Image } from "react-bootstrap";
import Icon from "../../assets/AvatarRemoveBg.png";
import React from "react";
import { Link } from "react-router-dom";

function HuffmanError() {
  return (
    <div>
      <Alert variant="danger">
        <Alert.Heading>That's a 404.</Alert.Heading>
        <p>Uh oh, looks like you're lost!</p>
        <Link to="/">
          <Button variant="secondary">Back to safety.</Button>
        </Link>
      </Alert>
    </div>
  );
}

export default HuffmanError;

