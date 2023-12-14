import React, { useState } from "react";
import { Button, Form, FormControl, Container, Table } from "react-bootstrap";


function HuffmanEncoding() {
  const [inputText, setInputText] = useState("");
  const [encodingTable, setEncodingTable] = useState(null);
  const [encodedText, setEncodedText] = useState("");

  const handleEncode = async () => {
    try {
      const encodingTableResponse = await window.huffmanAPI.getEncodingTable(inputText);
      setEncodingTable(encodingTableResponse);

      const compressedData = await window.huffmanAPI.compressData(inputText, encodingTableResponse);
      setEncodedText(compressedData);
    } catch (error) {
      console.error("Error encoding:", error);
    }
  };

  const handleDownload = () => {
    const jsonString = JSON.stringify(encodingTable, null, 2);
    try {
      window.huffmanAPI.saveEncodingTable(jsonString);
    } catch (error) {
      console.error("Error saveEncodingTable:", error);
    }
  };

  return (
    <Container>
      <h1>Huffman Encoding</h1>
      <Form>
        <Form.Group controlId="inputText" className={"mb-3"}>
          <Form.Label>Input Text</Form.Label>
          <FormControl
            as="textarea"
            rows={3}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleEncode} className={"mb-3"}>
          Encode
        </Button>

        <Form.Group controlId="encodedText" className={"mb-3"}>
          <Form.Label>Encoded Code</Form.Label>
          <FormControl as="textarea" rows={3} value={encodedText} readOnly />
        </Form.Group>

        {encodingTable && (
          <div>
            <Form.Group controlId="encodingTable" className={"mb-3"}>
              <Form.Label>Encoding Table</Form.Label>
              <Table bordered>
                <thead>
                <tr>
                  <th>Key</th>
                  <th>Value</th>
                </tr>
                </thead>
                <tbody>
                {Object.entries(encodingTable).map(([key, value]) => (
                  <tr key={key}>
                    <td>{JSON.stringify(key)}</td>
                    <td>{value}</td>
                  </tr>
                ))}
                </tbody>
              </Table>
            </Form.Group>
            <Button variant="success" onClick={handleDownload} className={"mb-3"}>
              Download
            </Button>
          </div>
        )}
      </Form>
    </Container>
  );
}

export default HuffmanEncoding;
