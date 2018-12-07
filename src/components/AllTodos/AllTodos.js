import React from 'react';
import { withRouter } from 'react-router-dom';

class AllTodos extends React.Component{
    render(){
        return(
            <h1>All Todos</h1>
        )
    }
}
export default withRouter(AllTodos);