import { createStore } from "redux";

import timerReducer from "./reducers/timerReducer";

export default createStore( timerReducer );