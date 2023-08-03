import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {NavLink, useNavigate} from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant={"dark"}>
            <NavLink style={{color: 'white', textDecoration: 'none', paddingLeft: '20px'}}
                     to={SHOP_ROUTE}>Store</NavLink>
            {user.isAuth ?
                <Nav style={{
                    position: 'absolute',
                    right: 0,
                    marginBottom: '10px',
                    marginTop: '10px'
                }}>
                    <Button variant={'outline-light'}
                            onClick={() => navigate(ADMIN_ROUTE)}>
                        Admin panel
                    </Button>
                    <Button variant={'outline-light'}
                            style={{marginLeft: '20px', marginRight: '20px'}}
                            onClick={() => navigate(LOGIN_ROUTE)}>
                        Log out
                    </Button>
                </Nav>
                :
                <Nav>
                    <Button variant={'outline-light'} style={{marginLeft: '20px'}}
                            onClick={() => user.setIsAuth(true)}> Authorization
                    </Button>
                </Nav>
            }
        </Navbar>
    );
};

export default NavBar;
