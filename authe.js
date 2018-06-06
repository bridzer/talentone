 iimport React, { Component } from 'react'
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { Container, Row, Col } from 'reactstrap';
import LoginForm from './login';
import  Registration from './register';
import './auth.css'
export default class UserAuth extends Component{
  render(){
    return(
          <div>
            <Grid className="auth">
              <Col sm={{ size: 12, order: 2, }}>
               <Card raised={true} className="auth-card">
                <Typography varient="headline"  className="title" color="textSecondary">
                   <strong><h2> TalentOne</h2></strong>
                 </Typography>
                 <hr/>
                 <Row>
                <Col sm={{ size: 8, order: 2,}}>
                 <CreateLink/>
                </Col>
                <Col sm={{ size: 4, order: 2,}}>
                <LoginForm/>
               </Col>
              </Row>
              </Card>
              </Col>
            </Grid>
          </div>
        );
      }
  }
