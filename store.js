import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";

const initial = {
    username: "",
    target: "",
}

function connectionReducer(state = initial, action){
    switch(action.type){
        case "CREATE":
            return{
                username: action.message,
                target: state.target
            };
        case "TARGET":
            return{
                username: state.username,
                target : action.message
            }
        default:
            return state;
    }
}

export function initStore(state = initial){
    return createStore(connectionReducer,state,applyMiddleware(thunkMiddleware));
}