import { FETCH_TODOS, NEW_TODO, ARCHIVE_TODO } from './types';
import axios from 'axios';

export function fetchTodos() {
    return function(dispatch) {
        // console.log("FETCHING")
        axios.get('http://localhost:5000/todo/active')
            .then(function (todos) {
                console.log(todos);
                dispatch({
                    type: FETCH_TODOS,
                    payload: todos
                })
            })
            .catch(function (error) {
              console.log(error);
            });
    }
}