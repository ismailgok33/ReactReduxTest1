const timerReducer = (state = { 
    hour: 10,
    minute: 10,
    second: 10
 }, action) => {
    switch(action.type) {
        case "MINUSSECONDS":
            state = {
              ...state,
              second: state.second - action.payload  
            };
            break;
        case "MINUSMINUTES":
            state = {
                ...state,
                minute: state.minute - action.payload
            };
            break;
        case "MINUSHOURS":
            state = {
                ...state,
                hour: state.hour - action.payload
            };
            break;
        default:
            break;
    }
    return state;
};

export default timerReducer;