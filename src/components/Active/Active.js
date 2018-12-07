import React from 'react';
import { connect } from 'react-redux';
import { fetchActive } from '../../actions/todoActions';
class Active extends React.Component{

    componentWillMount(){
        this.props.fetchActive();
    }

    render(){
        console.log(this.props.Active)
        return(
            <div>
            <h1>Active</h1>

            {this.props.active.map(item=>(
                  <div key={item.id}>{item.title}{item.id}{item.status}</div>
            ))}
            </div>
        )
    }
}

const mapStateToProps = state =>({
    active: state.todos.active
})

export default connect(mapStateToProps, { fetchActive })(Active);