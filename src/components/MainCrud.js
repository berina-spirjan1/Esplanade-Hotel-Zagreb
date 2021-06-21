import React from "react"
import { useEffect, useState } from 'react';
import NavBar from "../layouts/NavBar";
import Customer from "../screens/Customer";
import Login from "../pages/Login";
import Sign from "../pages/Sign";

function MainCrud() {
    const [user, setUser] = useState('');
    const [toggleForm, setToggleForm] =  useState(true);
    const formMode = () => {
        setToggleForm(!toggleForm);
    }
    const userState = () => {
        const data = localStorage.getItem('user');
        const us = data !== null ? JSON.parse(data) : null;
        setUser(us);
    }

    useEffect(() => {
        userState();
    }, []);
    return (
        <>
            {user !== null ? (
                <>
                    <NavBar setUserState={() => setUser(null)}/>
                    <Customer/>
                </>
            ) : (
                <>
                    {toggleForm ? (<Login loggedIn={(user) => setUser(user)} toggle={() => formMode()}/>)
                        : ( <Sign toggle={() => formMode()}/>)}

                </>
            )}
        </>

    );
}
export default MainCrud;