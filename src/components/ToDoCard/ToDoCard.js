import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import Popup from "reactjs-popup";
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { connect } from 'react-redux';
import { archive } from '../../actions/todoActions';

const styles = {
    card: {
      width: 345,
      margin: 10,
    },
    button: {
        margin: 20,
    }
  };
const contentStyle = {
    maxWidth: "600px",
    width: "90%"

};

class ToDoCard extends React.Component {

    state={
        changing: false,
    }

    archiveHandler(props){
        console.log(props)
        this.setState({changing: true});
        axios.put('http://localhost:5000/todo/'+this.props.data.id)
            .then((response)=>this.props.archive(this.props.data.id)
           )
            .catch(function (error) {
                console.log(error);
              });
        console.log(this.props.data.id)
    }

  render() {
    const { classes } = this.props;
    // console.log(this.props.data.id)
        return(

            <Card className={classes.card}>

           
                <Popup
                    trigger={
                        <CardActionArea>
                             <CardHeader
                                    avatar={(
                                        <Avatar className={classes.avatar}>{this.props.index+1}</Avatar>
                                    )}
                                    title={this.props.data.title}
                                    />
                        </CardActionArea>
                    }
                    modal
                    contentStyle={contentStyle}
                >
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justify="center"
                    >
                        <Grid item>
                            <h3>{this.props.data.title}</h3>
                        </Grid>
                        <Grid item>
                        <h5>{this.props.data.body}</h5>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" className={classes.button} onClick={(props)=>this.archiveHandler(props)}>
                                Move to archived
                            </Button>
                        </Grid>
                    </Grid>
                </Popup>
          </Card>)
    }
    
    

}
ToDoCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state =>({
    active: state.todos.active
})

// export default connect(mapStateToProps, { fetchActive })(Active);

export default connect(mapStateToProps, { archive })(withStyles(styles)(ToDoCard));