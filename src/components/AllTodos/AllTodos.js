import React from 'react';
import { connect } from 'react-redux';
import { fetchAll } from '../../actions/todoActions';
class All extends React.Component{

    componentWillMount(){
        this.props.fetchAll();
    }

    render(){
        console.log(this.props.all)
        return(
            <div>
            <h1>All todos</h1>

            {this.props.all.map(item=>(
                  <div key={item.id}>{item.title}{item.id}{item.status}</div>
            ))}
            </div>
        )
    }
}

const mapStateToProps = state =>({
    all: state.todos.all
})

export default connect(mapStateToProps, { fetchAll })(All);