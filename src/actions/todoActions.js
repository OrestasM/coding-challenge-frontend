import { FETCH_TODOS, FETCH_ARCHIVED_TODOS, FETCH_ALL_TODOS } from './types';
import axios from 'axios';

export function fetchActive() {
    return (dispatch) => {
        console.log("FETCHING ACTIVE")
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

export function fetchArchived() {
    return (dispatch) => {
        console.log("FETCHING ARCHIVED")
        axios.get('http://localhost:5000/todo/archived')
            .then(function (todos) {
                //console.log(todos.data)
                if(todos){
                    dispatch({
                        type: FETCH_ARCHIVED_TODOS,
                        payload: todos.data
                    })
                }            
            })
            .catch(function (error) {
              console.log(error);
            });
    }
}

export function fetchAll() {
    return (dispatch) => {
        console.log("FETCHING ALL")
        axios.get('http://localhost:5000/todo')
            .then(function (todos) {
                //console.log(todos.data)
                if(todos){
                    dispatch({
                        type: FETCH_ALL_TODOS,
                        payload: todos.data
                    })
                }            
            })
            .catch(function (error) {
              console.log(error);
            });
    }
}