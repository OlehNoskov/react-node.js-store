import React from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <Container className='d-flex justify-content-center align-items-center'
                   style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className={'p-5'}>
                <h2 className={'m-auto'}>{isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form className={'d-flex flex-column'}>
                    <Form.Control className={'mt-3'} placeholder={'Please, input email...'}/>
                    <Form.Control className={'mt-3'} placeholder={'Please, input password...'}/>
                    <Row className={'d-flex justify-content-between mt-3 pl-3 pr-3'}>
                        {isLogin ?
                            <div>
                                Do not have account?
                                <NavLink to={REGISTRATION_ROUTE}
                                         style={{textDecoration: 'none'}}> Register</NavLink>
                            </div>
                            :
                            <div>
                                Do you have an account?
                                <NavLink to={LOGIN_ROUTE}
                                         style={{textDecoration: 'none'}}> Sign in</NavLink>
                            </div>
                        }
                        <Button variant={'outline-success'}>Sign in</Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;
