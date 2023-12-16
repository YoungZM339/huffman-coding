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
    const json_string = JSON.stringify(encodingTable, null, 2);
    try {
      window.huffmanAPI.saveEncodingTable(json_string);
    } catch (error) {
      console.error("Error saveEncodingTable:", error);
    }
  };

  const handleUploadTextFile = async () => {
    try {
      const textResponse = await window.huffmanAPI.uploadTextFile();
      setInputText(textResponse);
    } catch (error) {
      console.error("Error uploadTextFile:", error);
    }
  };

  const handleDownloadTextFile = () => {
    try {
      window.huffmanAPI.saveTextFile(encodedText);
    } catch (error) {
      console.error("Error saveTextFile:", error);
    }
  };

  return (
    <Container>
      <h1>Huffman Encoding</h1>
      <Form>
        <Form.Group controlId="inputText" className={"m-3"}>
          <Form.Label>Input Text</Form.Label>
          <FormControl
            as="textarea"
            rows={3}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <Button variant="primary" onClick={handleUploadTextFile} className={"m-3"} disabled={inputText !== ""}>
            Upload
          </Button>
          <Button variant="primary" onClick={handleEncode} className={"m-3"} disabled={inputText === ""}>
            Encode
          </Button>
        </Form.Group>


        <Form.Group controlId="encodedText" className={"m-3"}>
          <Form.Label>Encoded Code</Form.Label>
          <FormControl as="textarea" rows={3} value={encodedText} readOnly />
          <Button variant="primary" onClick={handleDownloadTextFile} className={"m-3"} disabled={encodedText === ""}>
            Download
          </Button>
        </Form.Group>

        {encodingTable && (
          <div>
            <Form.Group controlId="encodingTable" className={"m-3"}>
              <Form.Label>Encoding Table</Form.Label>
              <Table bordered>
                <thead>
                <Button variant="success" onClick={handleDownload} className={"m-3"}>
                  Download
                </Button>
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
          </div>
        )}
      </Form>
    </Container>
  );
}

export default HuffmanEncoding;
