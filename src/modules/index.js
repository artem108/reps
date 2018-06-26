const LOAD_DATA = 'LOAD_DATA'
const LOAD_DATA_OK = 'LOAD_DATA_OK'
const LOAD_DATA_ERR = 'LOAD_DATA_ERR'
const initialState = {
  items: ["DEFAULT"]
}
export const defaultData = () => dispatch => {
 dispatch({
  type: LOAD_DATA,
  items: initialState.items
 })
}
export const getData = () => dispatch => {
 dispatch({
  type: LOAD_DATA_OK,
  items: ['LOAD OK']
 })
}

export default (state = initialState, action) => {
 switch (action.type) {
  case LOAD_DATA:
   return {
    items: 'LOading'
   }
   case LOAD_DATA_OK:
    return {
     items: action.items
    }
    case LOAD_DATA_ERR:
     return {
      items: action.err
     }
  default:
   return state
 }
}
