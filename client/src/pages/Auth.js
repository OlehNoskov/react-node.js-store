import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useNavigate} from 'react-router-dom';

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container className='d-flex justify-content-center align-items-center'
                   style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className={'p-5'}>
                <h2 className={'m-auto'}>{isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form className={'d-flex flex-column'}>
                    <Form.Control
                        className={'mt-3'}
                        placeholder={'Please, input email...'}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className={'mt-3'}
                        placeholder={'Please, input password...'}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                    />
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
                        <Button variant={'outline-success'} onClick={click}>Sign in</Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;
