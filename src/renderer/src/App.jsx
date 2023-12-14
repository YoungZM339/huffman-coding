import { HashRouter, Route, Routes } from "react-router-dom";

import HuffmanLayout from "./components/structs/HuffmanLayout";
import HuffmanError from "./components/structs/HuffmanError";
import HuffmanWelcome from "./components/HuffmanWelcome";
import HuffmanAbout from "./components/components/HuffmanAbout";
import HuffmanEncoding from "./components/components/HuffmanEncoding";
import HuffmanDecoding from "./components/components/HuffmanDecoding";
import HuffmanVisualize from "./components/components/HuffmanVisualize";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HuffmanLayout />}>
          <Route index element={<HuffmanWelcome />} />
          <Route path="encoding" element={<HuffmanEncoding />} />
          <Route path="decoding" element={<HuffmanDecoding />} />
          <Route path="visualize" element={<HuffmanVisualize />} />
          <Route path="about" element={<HuffmanAbout />} />
          <Route path="*" element={<HuffmanError />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
