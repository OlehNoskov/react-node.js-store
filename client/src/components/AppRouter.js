import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Admin from "../pages/Admin";
import Shop from "../pages/Shop";
import {
    ADMIN_ROUTE,
    BASKET_ROUTE,
    DEVICE_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE
} from "../utils/consts";
import Basket from "../pages/Basket";
import Auth from "../pages/Auth";
import DevicePage from "../pages/DevicePage";

const AppRouter = () => {
    const isAuth = false;
    return (
        <div>
            {isAuth &&
                <Routes>
                    <Route path={ADMIN_ROUTE} element={<Admin/>}/>
                    <Route path={BASKET_ROUTE} element={<Basket/>}/>
                </Routes>
            }
            {!isAuth &&
                <Routes>
                    <Route path={SHOP_ROUTE} element={<Shop/>}/>
                    <Route path={LOGIN_ROUTE} element={<Auth/>}/>
                    <Route path={REGISTRATION_ROUTE} element={<Auth/>}/>
                    <Route path={DEVICE_ROUTE + '/:id'} element={<DevicePage/>}/>
                </Routes>
            }
        </div>
    );
};

export default AppRouter;
