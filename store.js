import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";

const initial = {
    username: "",
    target: "",
    peer: null,
    iscalled: false,
    mediaConnection: null
}

function connectionReducer(state = initial, action){
    switch(action.type){
        case "CREATE":
            return{
                username: action.message,
                target: state.target,
                peer: state.peer,
                iscalled: state.iscalled,
                mediaConnection: state.mediaConnection
            };
        case "TARGET":
            return{
                username: state.username,
                target: action.message,
                peer: action.peer,
                iscalled: action.iscalled,
                mediaConnection: action.mediaConnection
            }
        default:
            return state;
    }
}

export function initStore(state = initial){
    return createStore(connectionReducer,state,applyMiddleware(thunkMiddleware));
}