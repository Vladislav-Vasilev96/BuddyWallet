import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Tool from './components/Tools/Tools'
import { CORE_TOOLS } from "./data";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header></Header>
      <main>
    <section id="core-tools">
      <h2>Core Tools </h2>
      <ul>
        <Tool {...CORE_TOOLS[0]} />
        <Tool {...CORE_TOOLS[1]} />
        <Tool {...CORE_TOOLS[2]} />
        <Tool {...CORE_TOOLS[3]} />
      </ul>
    </section>
      </main>
    </div>
  );
}

export default App;
