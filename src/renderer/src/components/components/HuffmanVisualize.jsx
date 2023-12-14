import React, { useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import HuffmanTreeChart from "./HuffmanTree";

function HuffmanVisualize() {
  const [encodingTable, setEncodingTable] = useState(null);
  const handleUploadEncodingTable = async () => {
    const jsonStringResponse = await window.huffmanAPI.uploadEncodingTable();
    console.log(jsonStringResponse);
    setEncodingTable(JSON.parse(jsonStringResponse));
  };


  return (
    <Container>
      <h1>Huffman Tree Visualize</h1>
      <Form>
        <Form.Group controlId="encodedText" className={"mb-3"}>
          <Form.Label>Upload Encoding Table Here</Form.Label>
        </Form.Group>
        <Button onClick={handleUploadEncodingTable} className={"mb-3"}>Upload</Button>
      </Form>
      {encodingTable && (
        <div>
          <HuffmanTreeChart huffmanCodeTable={encodingTable} />
        </div>
      )}
      {encodingTable && (
        <div className={"mb-3"}>
          <h5>Encoding Table</h5>
          <Table bordered>
            <thead>
            <tr>
              <th>Key</th>
              <th>Value</th>
            </tr>
            </thead>
            <tbody>
            {Object.entries(encodingTable).map(([key, value]) => (
              <tr key={value}>
                <td>{value}</td>
                <td>{JSON.stringify(key)}</td>
              </tr>
            ))}
            </tbody>
          </Table>
        </div>
      )
      }
    </Container>
  )
    ;
}

export default HuffmanVisualize;
