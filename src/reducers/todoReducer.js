import { FETCH_TODOS, NEW_TODO, ARCHIVE_TODO } from '../actions/types';

const initialState = {
    todo: [
        {}
    ],
    item: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_TODOS:
            return{
                ...state,
                todo: action.payload
            };
        case NEW_TODO:
            return{
                ...state,
                item: action.payload
            }
        case ARCHIVE_TODO:
            return{
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}