import React, { useState } from "react";
import { Button, Form, FormControl, Container, Table } from "react-bootstrap";

function HuffmanDecoding() {
  const [encodedText, setEncodedText] = useState("");
  const [encodingTable, setEncodingTable] = useState(null);
  const [decodedText, setDecodedText] = useState("");


  const handleDecode = async () => {
    const decodedTextResponse = await window.huffmanAPI.decompressData(encodedText, encodingTable);
    setDecodedText(decodedTextResponse);
  };

  const handleUploadEncodingTable = async () => {
    const jsonStringResponse = await window.huffmanAPI.uploadEncodingTable();
    console.log(jsonStringResponse);
    setEncodingTable(JSON.parse(jsonStringResponse));
  };

  return (
    <Container>
      <h1>Huffman Decoding</h1>
      <Form>
        <Form.Group controlId="encodedText" className={"mb-3"}>
          <Form.Label>Upload Encoding Table Here</Form.Label>
        </Form.Group>
        <Button onClick={handleUploadEncodingTable} className={"mb-3"}>Upload</Button>
        <Form.Group controlId="encodedText" className={"mb-3"}>
          <Form.Label>Encoded Text</Form.Label>
          <FormControl
            as="textarea"
            rows={3}
            value={encodedText}
            onChange={(e) => setEncodedText(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="primary"
          onClick={handleDecode}
          disabled={!encodingTable}
          className={"mb-3"}
        >
          Decode
        </Button>
        {encodingTable && (
          <div>
            <Form.Group controlId="decodingTable" className={"mb-3"}>
              <Form.Label>解码表</Form.Label>
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
            </Form.Group>
          </div>
        )}
        <Form.Group controlId="decodedText" className={"mb-3"}>
          <Form.Label>Decoded Text</Form.Label>
          <FormControl as="textarea" rows={3} value={decodedText} readOnly />
        </Form.Group>
      </Form>
    </Container>
  );
}

export default HuffmanDecoding;
