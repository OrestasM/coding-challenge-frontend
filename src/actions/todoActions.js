import { FETCH_TODOS } from './types';
import axios from 'axios';

export function fetchTodos() {
    return (dispatch) => {
        console.log("FETCHING")
        axios.get('http://localhost:5000/todo/active')
            .then(function (todos) {
                // console.log(todos.data)
                if(todos){
                    dispatch({
                        type: FETCH_TODOS,
                        payload: todos.data
                    })
                }            
            })
            .catch(function (error) {
              console.log(error);
            });
    }
}