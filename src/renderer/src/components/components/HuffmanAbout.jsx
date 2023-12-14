import React, { useState } from "react";
import { Container, ListGroup } from "react-bootstrap";

const HuffmanAbout = () => {
  const [versions] = useState(window.electron.process.versions);

  return (
    <Container>
      <h1>About</h1>
      <h2>Author Comment</h2>
      <p>I am Brian Yang, an software engineering undergraduate in School of Artificial intelligence and Big Data, Henan University of Technology. </p>
      <p>This project is coursework for the Data Structures and Object Oriented Programming course</p>
      <h2>Huffman Encoding</h2>
      <p>Huffman encoding is a lossless data compression algorithm that is widely used in computer science and
        telecommunications.</p>
      <h2>Software Versions</h2>
      <ListGroup>
        <ListGroup.Item className="electron-version">Electron v{versions.electron}</ListGroup.Item>
        <ListGroup.Item className="chrome-version">Chromium v{versions.chrome}</ListGroup.Item>
        <ListGroup.Item className="node-version">Node v{versions.node}</ListGroup.Item>
        <ListGroup.Item className="v8-version">V8 v{versions.v8}</ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default HuffmanAbout;
