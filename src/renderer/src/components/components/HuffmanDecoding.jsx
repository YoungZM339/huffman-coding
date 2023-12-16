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

  const handleUploadTextFile = async () => {
    try {
      const textResponse = await window.huffmanAPI.uploadTextFile();
      setEncodedText(textResponse);
    } catch (error) {
      console.error("Error uploadTextFile:", error);
    }
  };

  const handleDownloadTextFile = () => {
    try {
      window.huffmanAPI.saveTextFile(decodedText);
    } catch (error) {
      console.error("Error saveTextFile:", error);
    }
  };

  return (
    <Container>
      <h1>Huffman Decoding</h1>
      <Form>
        <Form.Group controlId="encodedText" className={"m-3"}>
          <Form.Label>Upload Encoding Table Here</Form.Label>
        </Form.Group>
        <Button onClick={handleUploadEncodingTable} className={"m-3"}>Upload</Button>

        <Form.Group controlId="encodedText" className={"m-3"}>
          <Form.Label>Encoded Text</Form.Label>
          <FormControl
            as="textarea"
            rows={3}
            value={encodedText}
            onChange={(e) => setEncodedText(e.target.value)}
          />
          <Button variant="primary" onClick={handleUploadTextFile} className={"m-3"} disabled={encodedText !== ""}>
            Upload
          </Button>
          <Button
            variant="primary"
            onClick={handleDecode}
            disabled={!encodingTable || encodedText === ""}
            className={"m-3"}
          >
            Decode
          </Button>
        </Form.Group>

        <Form.Group controlId="decodedText" className={"m-3"}>
          <Form.Label>Decoded Text</Form.Label>
          <FormControl as="textarea" rows={3} value={decodedText} readOnly />
          <Button variant="primary" onClick={handleDownloadTextFile} className={"m-3"} disabled={decodedText === ""}>
            Download
          </Button>
        </Form.Group>

        {encodingTable && (
          <div>
            <Form.Group controlId="encodingTable" className={"m-3"}>
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
      </Form>
    </Container>
  );
}

export default HuffmanDecoding;
