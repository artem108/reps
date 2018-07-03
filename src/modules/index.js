import { getItems } from '../api'

const LOAD_DATA = 'LOAD_DATA'
const LOAD_DATA_OK = 'LOAD_DATA_OK'
const LOAD_DATA_ERR = 'LOAD_DATA_ERR'

const initialState = {
  items: [],
  isLoading: false,
  isError: false
}

  export const getData = () => {
    return async dispatch => {
      dispatch({ type: LOAD_DATA })
          try {
            const data = await getItems()
              dispatch({
                type: LOAD_DATA_OK,
                items: data.results
              })
          } catch (err) {
              dispatch({ type: LOAD_DATA_ERR })
          }
        }
      }

export default (state = initialState, action) => {
 switch (action.type) {
  case LOAD_DATA:
    return {
      isLoading: true
    }
   case LOAD_DATA_OK:
    return {
     items: action.items,
     isLoading: false
    }
    case LOAD_DATA_ERR:
      return {
        isLoading: false,
        isError: true
      }
  default:
   return state
 }
}

// export const getData = () => {
//   return dispatch => {
//     dispatch({
//       type: LOAD_DATA,
//     })
//     getItems()
//       .then(res => res.json())
//       .then(data =>  dispatch({
//         type: LOAD_DATA_OK,
//         items: data.results
//        }))
//        .catch(err => {
//          dispatch({
//            type: LOAD_DATA_ERR,
//            items: err
//           })
//         })
// }
// }
