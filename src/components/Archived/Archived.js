import React from 'react';
import { connect } from 'react-redux';
import { fetchArchived } from '../../actions/todoActions';
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

class Archived extends React.Component{



    
    componentWillMount(){
        this.props.fetchArchived();
    }

    render(){
        const { classes } = this.props;
        return(
            <div className="wrapper">
            <h1>Archived</h1>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
            >
            {this.props.archived.map((item, index)=>(
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
    archived: state.todos.archived
})

Archived.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default (connect(mapStateToProps, { fetchArchived }))(withStyles(styles)(Archived));