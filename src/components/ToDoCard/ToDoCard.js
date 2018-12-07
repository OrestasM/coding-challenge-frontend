import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import Popup from "reactjs-popup";
import Button from '@material-ui/core/Button';
import axios from 'axios';

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
  
    archiveHandler(){
        axios.put('http://localhost:5000/todo/'+this.props.data.id)
            .then(function(response){
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
              });
    }

  render() {
    const { classes } = this.props;

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
                        <body1>{this.props.data.body}</body1>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" className={classes.button} onClick={this.archiveHandler}>
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

export default withStyles(styles)(ToDoCard);