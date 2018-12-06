import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { fetchTodos } from '../../actions/todoActions';

class SideBar extends React.Component{

    componentWillMount() {
        this.props.fetchTodos();
    }

    render(){
        return(
            <div>
                {/* <Button variant="outlined" color="primary" onClick={this.props.onIncrement}>
                    INCREMENT
                </Button>
                <Button variant="outlined" color="secondary" onClick={this.props.onDecrement}>
                    DECREMENT
                </Button>
                <Button variant="outlined" color="secondary" onClick={this.props.onDecrement}>
                    {this.props.cntr}
                </Button> */}
            </div>
        )
    }
}

export default connect(null, {fetchTodos})(SideBar);