import React from "react";
import blobBlue from "./images/blob-blue.png";
import blobRed from "./images/blob-red.png";

// Components
import Start from "./components/Start";
import Questions from "./components/Questions";

function App() {
  const [started, setStarted] = React.useState(false);

  // console.log(started);

  return (
    <div>
      <img className="blob-red" src={blobRed} alt="" />
      <div className="container">
        {!started ? <Start setStarted={setStarted} /> : <Questions />}
      </div>
      <img className="blob-blue" src={blobBlue} alt="" />
    </div>
  );
}

export default App;
