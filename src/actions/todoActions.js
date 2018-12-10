import {
    FETCH_TODOS,
    FETCH_ARCHIVED_TODOS,
    FETCH_ALL_TODOS
} from './types';
import axios from 'axios';

export function archive(id) {
    return (dispatch) => {
        axios.put('http://localhost:5000/todo/' + id)
            .then(function (res) {
                axios.get('http://localhost:5000/todo/active')
                    .then(function (todos) {
                        dispatch({
                            type: FETCH_TODOS,
                            payload: todos.data
                        })
                    })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export function archiveFromAll(id) {
    return (dispatch) => {
        axios.put('http://localhost:5000/todo/' + id)
            .then(function (res) {
                axios.get('http://localhost:5000/todo/')
                    .then(function (todos) {
                        dispatch({
                            type: FETCH_ALL_TODOS,
                            payload: todos.data
                        })
                    })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export function fetchActive() {

    return (dispatch) => {
        axios.get('http://localhost:5000/todo/active')
            .then(function (todos) {
                dispatch({
                    type: FETCH_TODOS,
                    payload: todos.data
                })

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}


export function fetchArchived() {
    return (dispatch) => {
        axios.get('http://localhost:5000/todo/archived')
            .then(function (todos) {
                if (todos) {
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
        axios.get('http://localhost:5000/todo')
            .then(function (todos) {
                if (todos) {
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