import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import { Container, Row, Col } from 'reactstrap';
import './loginForm.css';



 class LoginForm extends Component{
state = {
  name: "Login",
  email: '',
  password: '',
  username: '',

}
validateForm(){
  return this.state.email.length > 0 && this.state.password.length > 5;
}
handleChange = event =>{
  this.setStae = {
  [event.target.id]: event.target.value
}
}
handleSubmit = event => {
  event.preventDefault();
}

render(){


  return (

      <Col sm={{ size: 12, order: 2,}}>
       <Grid className="login-form">
        <Card className= "login-card">
             <CardContent>
             <Typography   className="name-card" color="textSecondary">
                 <strong><h2> {this.state.name}</h2></strong>
               </Typography>
               <hr/>
                  <Typography className="form-card" color="textSecondary">
                  <FormControl className="control-card">
                   <InputLabel htmlFor="email">Username</InputLabel>
                   <Input id="talent-simple"   />
                    </FormControl>
                  </Typography>
                  <Typography className="form-card" color="textSecondary">
                  <FormControl className="control-card">
                   <InputLabel htmlFor="password">password</InputLabel>
                   <Input id="talent-simple"  type="password"   />
                    </FormControl>
                  </Typography>
                </CardContent>
              <CardActions className ="action">
              <Button size="small"
               variant ="raised"
               color ="primary"
               align ="right"

               >Login</Button>
            </CardActions>
          </Card>
       </Grid>
     </Col>


    );
 }
}
export default LoginForm
