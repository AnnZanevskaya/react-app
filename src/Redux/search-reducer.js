import { SET_FILTER, SET_SORTORDER, SET_SEARCH} from "./types";

const initialState = {
    search: '',
    genre: 'all',
    sortOrder: 'release_date'
}

export const searchReducer = (state = initialState, action)  => {
    switch(action.type){
        case SET_FILTER: 
            return { ...state, genre: action.payload}
        case SET_SORTORDER: 
            return { ...state, sortOrder: action.payload}
        case SET_SEARCH: {
            return {...state, search: action.payload}
        }
        default:
            return state;
    }
}