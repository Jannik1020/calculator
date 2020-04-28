import types from "./types";

const NEW_CHAIN_PART = ["0", undefined];

const defaultState = {
    calcChain: {0: ["0", undefined]},
    nextChainKey: 1,
    result: 0,
    isLastResult: false
};

const mainReducer = (state=defaultState, action) => {    
    let newChain = {...state.calcChain};
    switch(action.type){
        case types.NEW_DIGIT:
            newChain = {...state.calcChain};
            let lastChainPart = newChain[state.nextChainKey - 1];
            let isLastResult = state.isLastResult

            if(Object.keys(newChain).length === 1 && state.isLastResult === true){
                newChain[0][0] = "" + action.value;
                isLastResult = false;
            }
            else if((lastChainPart[0] === "0" && action.value !== 0)){ //only one zero
                newChain[state.nextChainKey - 1][0] = "" + action.value;
            }
            else if(/\.0$/.test(lastChainPart[0]) === true){ //handling dot numbers
                newChain[state.nextChainKey - 1][0] = lastChainPart[0].substring(0, lastChainPart[0].length - 1) + action.value;
            }
            else if(lastChainPart[0] !== "0"){ // everything else
                newChain[state.nextChainKey - 1][0] += "" + action.value;
            }

            return {
                calcChain: newChain,
                nextChainKey: state.nextChainKey,
                result: state.result,
                isLastResult: isLastResult
            }
            
        case types.OPERATION:
            newChain = {...state.calcChain};

            newChain[state.nextChainKey - 1][1] = action.func;
            newChain[state.nextChainKey] = ["0", undefined];
            
            console.log(newChain[state.nextChainKey]);
            
            return {
                calcChain: newChain,
                nextChainKey: state.nextChainKey + 1,
                result: state.result,
                isLastResult: state.isLastResult
            }
            
        case types.EQUAL:
            var result = parseFloat(state.calcChain[0][0]);

            if(Object.keys(state.calcChain).length !== 1){
                var i = 0;
                do{
                    if(/\.$/.test(state.calcChain[i][0])){
                        result = state.calcChain[i][1](result, parseFloat(state.calcChain[i+1][0] + "0"));
                    }
                    result = state.calcChain[i][1](result, parseFloat(state.calcChain[i+1][0]));
                    i++;
                } while(state.calcChain[i][1] !== undefined);
            }

            return {
                calcChain: {0: [""+result, undefined]},
                nextChainKey: 1,
                result: result,
                isLastResult: true
            };
            
        case types.CLEAR:
            return {
                calcChain: {0: ["0", undefined]},
                nextChainKey: 1,
                result: 0,
                isLastResult: state.isLastResult
            };
            
        case types.DOT:
            newChain = {...state.calcChain};
            newChain[state.nextChainKey - 1][0] += ".";

            return {
                calcChain: newChain,
                nextChainKey: state.nextChainKey,
                result: state.result,
                isLastResult: state.isLastResult
            };
            
        default: return state;
    }
}

export default mainReducer;