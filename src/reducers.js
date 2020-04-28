import {combineReducers} from "redux";
import mainReducer from "./app/main/redux/index";

const rootReducer = combineReducers({
    main: mainReducer
})

export default rootReducer;