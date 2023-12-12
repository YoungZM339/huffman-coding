import { useState } from 'react'

function Versions() {
  const [versions] = useState(window.electron.process.versions)

  return (
    <ul className="versions" style={{
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      width: "100%"
    }}>
      <li className="electron-version">Electron v{versions.electron}</li>
      <li className="chrome-version">Chromium v{versions.chrome}</li>
      <li className="node-version">Node v{versions.node}</li>
      <li className="v8-version">V8 v{versions.v8}</li>
    </ul>
  )
}

export default Versions
