import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import { Container, Row, Col } from 'reactstrap';
import TextField from '@material-ui/core/TextField';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import './register.css';



 class Registration extends Component{
state = {
  name: "Register",
  emailaddress: '',
  password: '',
  username: '',
  firstname: '',
  lastname: '',
  dateofbirth: '',
  country: '',
  county: '',
  gender: '',
  talent: '',
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
    <form  >
    <Row>
    <Col sm={{ size: 12, order: 2, }}>
      <Grid className="signup-form">
        <Card className= "signup-card">
            <CardContent>
             <Typography  variant= "headline" className="name-card" color="textSecondary">
                 <strong><h2> {this.state.name}</h2></strong>
                  <hr/>
                </Typography>
               <Row>
              <Col sm={{ size: 6, order: 2,offeset:1}}>
              <Typography  component="h2" className="form-headline">
                <h3>Personnal Info </h3>
              </Typography>
                <Typography className="form-card" color="textSecondary">
                    <FormControl className="control-card">
                       <InputLabel htmlFor="name-simple">Firstname</InputLabel>
                        <Input id="talent-simple"type="text" onChange={this.handleChange} />
                     </FormControl>
                    </Typography>
                  <Typography className="form-card">
                    <FormControl className="control-card">
                       <InputLabel htmlFor="name-simple">Lastname</InputLabel>
                       <Input id="talent-simple"type="text" onChange={this.handleChange} />
                    </FormControl>
                  </Typography >
                  <Typography className="form-card" color="textSecondary">
                  <FormControl className="control-form">
                    <InputLabel htmlFor="email">Username</InputLabel>
                    <Input id="talent-simple"type="text"  onChange={this.handleChange} />
                    </FormControl>
                  </Typography>
                  <Typography className="form-card" color="textSecondary">
                  <FormControl className="control-card">
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input type="password" onChange={this.handleChange}  />
                    </FormControl>
                  </Typography>
                  <Typography className="form-card" color="textSecondary">
                    <FormControl className="control-card">
                       <InputLabel htmlFor="date"></InputLabel>
                       <Input id="talent-simple"type="date" onChange={this.handleChange} FormHelperText="Date Of Birth"  />
                      </FormControl>
                  </Typography>
                  <Row>
                    <Typography className="form-card" color="textSecondary">
                     <RadioGroup onChange={ this.onChange } horizontal iconSize="20">
                      <RadioButton value="Male">
                        Male
                      </RadioButton>
                      <RadioButton value="female" >
                        Female
                        </RadioButton>
                       </RadioGroup>
                      </Typography>
                    </Row>
                  </Col>
                    <Col sm={{ size: 6, order: 2, offeset:4 }}>
                      <Typography variant="headline" component="h2" className="form-headline">
                        <h3> Address </h3>
                      </Typography>
                      <Typography className="form-card" color="textSecondary">
                        <FormControl className="control-card">
                         <InputLabel htmlFor="name-simple">Email Address</InputLabel>
                         <Input id="talent-simple"type="text"  onChange={this.handleChange}/>
                         </FormControl>
                        </Typography>
                      <Typography className="form-card">
                        <FormControl className="control-card">
                         <InputLabel htmlFor="name-simple">Country</InputLabel>
                         <Input id="talent-simple"type="text" onChange={this.handleChange} />
                        </FormControl>
                      </Typography>
                      <Typography className="form-card" color="textSecondary">
                        <FormControl className="control-card">
                         <InputLabel htmlFor="email">County/State</InputLabel>
                         <Input id="talent-simple" type="text" onChange={this.handleChange}  />
                        </FormControl>
                      </Typography>
                      <Typography className="form-card" color="textSecondary">
                        <FormControl className="control-card">
                         <InputLabel htmlFor="email">Town/City</InputLabel>
                         <Input id="talent-simple" type="text"onChange={this.handleChange} />
                        </FormControl>
                      </Typography>
                   </Col>
                 </Row>
                </CardContent>
              <CardActions className ="signup-action">
              <Button size="small"
               variant ="raised"
               type ="submit"
               color ="primary"
               onClick ={this._createUsers()}
               >register</Button>
            </CardActions>
           </Card>
          </Grid>
        </Col>
      </Row>
      </form>


    );
}
  _createUsers = async () => {
    const {username, firstname, lastname, email, password, dateofbirth, gender, county, country,} = this.state
     await this.props.usersMutation({
       variables:{
         email,
         password,
         username,
         firstname,
         lastname,
         dateofbirth,
         country,
         county,
         gender,
       }
     })
  }
}
const POST_MUTATION = gql`
mutation UsersMutation($emailaddress: String!, $password: String!,$username: String!, $firstname: String!, $lastname: String!,  $dateofbirth: String!,  $country: String!, $county: String!,$gender: String!) {
 createPeople(emailaddress: $email,password: $password,username: $username, firstname: $firstname, lastname: $lastname,   dateofbirth: $dateofbirth,  country: $country, county: $county,gender: $gender,) {
   emailaddress
   password
   username
   firstname
   lastname
   dateofbirth
   country
   county
   gender


 }
}
`
 export default graphql(POST_MUTATION, {name: 'usersMutation'})(Registration)
