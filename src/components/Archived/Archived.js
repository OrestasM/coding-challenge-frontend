import React from 'react';
import { connect } from 'react-redux';
import { fetchArchived } from '../../actions/todoActions';
class Archived extends React.Component{

    componentWillMount(){
        this.props.fetchArchived();
    }

    render(){
        // console.log(this.props.archived)
        return(
            <div className="wrapper">
            <h1>Archived</h1>

            {this.props.archived.map(item=>(
                  <div key={item.id}>{item.title}{item.id}{item.status}</div>
            ))}
            </div>
        )
    }
}

const mapStateToProps = state =>({
    archived: state.todos.archived
})

export default connect(mapStateToProps, { fetchArchived })(Archived);