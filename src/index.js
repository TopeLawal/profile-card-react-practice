import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <Main />
    </div>
  );
}

function Avatar() {
  return <img src="https://8szvtk.csb.app/jonas.jpeg" />;
}

function Main() {
  return (
    <main>
      <h1>Jonas Schmedtmann</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
      <div className="skill">
        <p style={{ backgroundColor: "blue" }}>React 💪</p>
        <p style={{ backgroundColor: "orange" }}>HTML + CSS 💪</p>
        <p style={{ backgroundColor: "yellow" }}>JavaScript 💪</p>
        <p style={{ backgroundColor: "brown" }}>Svelte 👶</p>
      </div>
    </main>
  );
}

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
