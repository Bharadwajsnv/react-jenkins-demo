import React from "react";
import config from "./env";

function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>React + Jenkins Environment Demo</h1>

      <p>
        <strong>Running Environment:</strong> {config.env}
      </p>

      <p>
        <strong>API URL:</strong> {config.apiUrl}
      </p>

      <p>
        <strong>Build Time:</strong> {new Date().toString()}
      </p>
    </div>
  );
}

export default App;
