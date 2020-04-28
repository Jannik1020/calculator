import React from "react";
import "./display.scss"

class DisplayComponent extends React.Component{

    render(){
        return (
            <div id="display-wrapper" className={this.props.className}>
                <span id="display">{this.props.viewNumber}</span>
            </div>
        );
    }
}

export default DisplayComponent;