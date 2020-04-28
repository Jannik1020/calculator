import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import CalculatorContainer from "./main/components/Calculator/CalculatorContainer";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={CalculatorContainer}/>
        <Route path="/calc" component={CalculatorContainer}/>
      </div>
    </Router>
  );
}

export default App;
