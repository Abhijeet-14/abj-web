import React from "react";

import Main from "./MainCompo";
// import './App.css';

function App() {
  console.log(process.env);
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Main />
    </div>
  );
}

export default App;
