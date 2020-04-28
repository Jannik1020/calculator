import {connect} from "react-redux";
import CalculatorComponent from "./CalculatorComponent";
import actions from "../../redux/actions";

const mapStateToProps = (state) => ({
    ...state.main
});

const mapDispatchToProps = (dispatch) => ({
    appendDigit: function(digit) {
        dispatch(actions.appendDigit(digit));
    },

    operation: function(operationFunc) {
        dispatch(actions.operator(operationFunc));
    },

    equal: function(){
        dispatch(actions.equal());
    },

    clear: function(){
        dispatch(actions.clear());
    },
    dot: function(){
        dispatch(actions.dot());
    }
});

const CalculatorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CalculatorComponent);

export default CalculatorContainer;