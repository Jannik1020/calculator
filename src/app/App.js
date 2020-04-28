import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import CalculatorContainer from "./main/components/Calculator/CalculatorContainer";

function App() {
  return (
      <div>
        <CalculatorContainer />
      </div>
  );
}

export default App;
