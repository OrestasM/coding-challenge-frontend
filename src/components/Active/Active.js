import React from 'react';
import { connect } from 'react-redux';
import { fetchActive } from '../../actions/todoActions';
import Card from '../ToDoCard/ToDoCard';
import Grid from '@material-ui/core/Grid';
class Active extends React.Component{

    componentWillMount(){
        this.props.fetchActive();
    }

    render(){
        console.log(this.props.Active)
        return(
            <div className="wrapper">
            <h1>Active</h1>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
            >
            {this.props.active.map((item, index)=>(
                //   <div key={item.id}>{item.title}{item.id}{item.status}</div>
                  <Card data={item} index={index}/>
            ))}
            </Grid>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    active: state.todos.active
})

export default connect(mapStateToProps, { fetchActive })(Active);