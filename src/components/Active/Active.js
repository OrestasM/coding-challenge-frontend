import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchActive, archiveFromAll } from '../../actions/todoActions';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';


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
  };
class Active extends React.Component{
    state = {
        open: false,
        title: '',
        body: '',
    };
    
    handleClickOpen = () => {
    this.setState({ open: true });
    };

    handleClose = () => {
    this.setState({ open: false });
    };

    componentWillMount(){
        this.props.fetchActive();
    }

    handleArchive(id){
        this.props.archive(id)
    }
    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value});
    }
    onConfirm(title, body, props){
        axios.post('http://localhost:5000/todo/add', {title, body})
            .then(()=>{props.fetchActive()})
        
        this.handleClose();
    }

    render(){
        const { classes } = this.props;

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
                <Grid item>
                    <Fab 
                        color="primary" 
                        aria-label="Add" 
                        className={classes.fab} 
                        onClick={this.handleClickOpen}
                    >
                        <AddIcon />
                    </Fab>
                </Grid>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Add to-do</DialogTitle>
                    <DialogContent>
                        <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        type="title"
                        fullWidth
                        value={this.state.title}
                        onChange={e => this.handleChange(e)}

                        />
                        <TextField
                        margin="dense"
                        id="body"
                        label="Body"
                        type="body"
                        fullWidth
                        onChange={e => this.handleChange(e)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                        Cancel
                        </Button>
                        <Button onClick={()=>this.onConfirm(this.state.title, this.state.body, this.props)} color="primary">
                        Confirm
                        </Button>
                    </DialogActions>
                </Dialog>
            {this.props.active.slice(0).reverse().map((item, index)=>(
                
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
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={()=>this.handleArchive(item.id)}>
                            Move to archived
                        </Button>
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
    active: state.todos.active
})

Active.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  

export default (connect(mapStateToProps, { fetchActive, archiveFromAll }))(withStyles(styles)(Active));