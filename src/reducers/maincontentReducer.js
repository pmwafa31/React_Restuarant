import { FAIL, SUCCESS } from "../constants/restConstant";

export const mainReducer =(state={restuarants:[]}, action)=>{
    switch(action.type){
        case SUCCESS: return{
            restuarants: action.payload
        }
        case FAIL: return{
            restuarants: action.payload
        }
        default:
            return state
    }
}