import { BrowserRouter, Route, Routes } from "react-router-dom"

import HuffmanLayout from "./components/structs/HuffmanLayout"
import HuffmanError from "./components/structs/HuffmanError"
import HuffmanDashboard from "./components/HuffmanDashboard"
import HuffmanAbout from "./components/components/HuffmanAbout"
import HuffmanEncoding from "./components/components/HuffmanEncoding"
import HuffmanDecoding from "./components/components/HuffmanDecoding"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HuffmanLayout />}>
          <Route index element={<HuffmanDashboard />} />
          <Route path="encoding" element={<HuffmanEncoding />} />
          <Route path="decoding" element={<HuffmanDecoding />} />
          <Route path="about" element={<HuffmanAbout />} />
          <Route path="*" element={<HuffmanError />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
