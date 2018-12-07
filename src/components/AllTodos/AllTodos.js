import React from 'react';
import { connect } from 'react-redux';
import { fetchAll } from '../../actions/todoActions';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    card: {
      minWidth: 275,
      margin: 20,
      padding: 20,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    avatar:{
        margin: 10
    }
  };
class All extends React.Component{
    
    componentWillMount(){
        this.props.fetchAll();
    }

    handleArchive(id){
        this.props.archive(id)
        
    }

    render(){
        const { classes } = this.props;
        return(
            <div className="wrapper">
            <h1>All todos</h1>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
            >
            {this.props.all.map((item, index)=>(
                  <Card key={index + 1} className={classes.card}>
                  <Grid
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justify="center"
              > 
                  <Avatar className={classes.avatar}>{index+1}</Avatar>
                  <Grid item>
                      <h3>{item.title}</h3>
                  </Grid>
                  <Grid item>
                      <Typography variant="body1" gutterBottom>
                          {item.body}
                      </Typography>
                  </Grid>
              </Grid>
              </Card>
            ))}
            </Grid>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    all: state.todos.all
})

All.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default (connect(mapStateToProps, { fetchAll }))(withStyles(styles)(All));