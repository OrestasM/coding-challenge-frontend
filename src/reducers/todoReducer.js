import { FETCH_TODOS, NEW_TODO, ARCHIVE_TODO, FETCH_ARCHIVED_TODOS, FETCH_ALL_TODOS } from '../actions/types';

const initialState = {
    active: [
        {}
    ],
    archived: [
        {}
    ],
    all: [
        {}
    ],
    item: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_TODOS:
            console.log("PAYLOAD ACTIVE")
            //console.log(action.payload)
            return{
                ...state,
                active: action.payload
            };
        case FETCH_ARCHIVED_TODOS:
            console.log("PAYLOAD ARCHIVED")
            //console.log(action.payload)
            return{
                ...state,
                archived: action.payload
            };
        case FETCH_ALL_TODOS:
            console.log("PAYLOAD ALL")
            //console.log(action.payload)
            return{
                ...state,
                all: action.payload
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