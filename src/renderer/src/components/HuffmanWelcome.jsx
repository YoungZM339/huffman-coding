import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import HuffmanImg from "../../../../resources/540px-Huffman_coding_visualisation.svg.png";

function HuffmanWelcome() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <h1>Huffman Encoding & Decoding</h1>
          <Image src={HuffmanImg} thumbnail={true} />
          <p>
            Welcome to the Huffman Encoding and Decoding Tool!
          </p>
          <p>
            Huffman coding is a popular algorithm used for lossless data
            compression. It assigns variable-length codes to input characters,
            with shorter codes for more frequent characters, resulting in
            efficient compression.
          </p>
          <p>
            This tool allows you to encode and decode messages using the Huffman
            algorithm. To get started, click on the buttons on the left to
            choose the functionality you'd like to use.
          </p>
          <p>
            If you are unfamiliar with Huffman coding, you can google for more information on how it
            works and its applications.
          </p>
          <p>
            Welcome to Huffman encoding and decoding tools! Please click the button on the left to select the function
            you want to use.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default HuffmanWelcome;
