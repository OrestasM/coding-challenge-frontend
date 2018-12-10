import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button';

class Home extends React.Component{
    render(){
        return(
            <div className="wrapper">
                <h1>Home</h1>
                <Button component={Link} to="/active" color="primary"> Get STARTED! </Button>
            </div>
        )
    }
}
export default withRouter(Home);