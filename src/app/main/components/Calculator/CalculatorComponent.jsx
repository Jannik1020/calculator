import DisplayComponent from "../Display/DisplayComponent"
import CalcButtonComponent from "../CalcButton/CalcButtonComponent"
import React from "react";
import "./calculator.scss";

class CalculatorComponent extends React.Component{
    buttonArr = [["AC", "clear", "", this.props.clear], //content, id, dipatch
                     ["/", "divide", "operation", this.props.operation],
                     ["x", "multiply", "button operation", this.props.operation],
                     ["7", "seven", "number", this.props.appendDigit],
                     ["8", "eight", "number", this.props.appendDigit],
                     ["9", "nine", "number", this.props.appendDigit],
                     ["-", "subtract", "operation", this.props.operation],
                     ["4", "four", "number", this.props.appendDigit],
                     ["5", "five", "number", this.props.appendDigit],
                     ["6", "six", "number", this.props.appendDigit],
                     ["+", "add", "operation", this.props.operation],
                     ["1", "one", "number", this.props.appendDigit],
                     ["2", "two", "number", this.props.appendDigit],
                     ["3", "three", "number", this.props.appendDigit],
                     ["0", "zero", "number", this.props.appendDigit],
                     [".", "decimal", "number", this.props.dot],
                     ["=", "equals", "", this.props.equal]];
    render(){      
        return (
            <div id="page-wrapper">
                <div id="calculator-wrapper">
                    <DisplayComponent viewNumber={this.props.calcChain[this.props.nextChainKey - 1][0]} className="grid-item"/>
                    {this.buttonArr.map((button, index) => <CalcButtonComponent chain={this.props.calcChain} key={index} className={"grid-item " + button[2]} value={button[0]} id={button[1]} onClick={button[3]}/>)}
                </div>
            </div>
        );
    }
}

export default CalculatorComponent;