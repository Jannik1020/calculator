import * as operations from "../../../../utils/operations";
import React from "react";
import "./calc-button.scss"

class CalcButtonComponent extends React.Component{
    onClick(){
        if(/[0-9]/.test(this.props.value) === true){
            this.props.onClick(parseInt(this.props.value));
        }
        else if(/[+-/x]/g.test(this.props.value) === true){
            switch(this.props.value){
                case "+":
                    this.props.onClick(operations.add);
                    break;
                case "-":
                    this.props.onClick(operations.subtract);
                    break;
                case "x":
                    this.props.onClick(operations.multiply);
                    break;
                case "/":
                    this.props.onClick(operations.divide);
                    break;
                case ".":
                    this.props.onClick();
                    break;
                default:
                    console.log("pattern error in CalcButton");
            }
        }
        else{
            this.props.onClick();
        }

        console.log(this.props.chain);
    }

    render(){
        return(
            <button onClick={this.onClick.bind(this)} id={this.props.id} className={this.props.className}>{this.props.value}</button>
        )
    }
}

export default CalcButtonComponent;