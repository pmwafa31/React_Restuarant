import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {mainReducer} from './reducers/maincontentReducer'

const reducers = combineReducers({
    restReducer : mainReducer
})
const middleware = [thunk]
const store = createStore(reducers, applyMiddleware(...middleware))

export default store