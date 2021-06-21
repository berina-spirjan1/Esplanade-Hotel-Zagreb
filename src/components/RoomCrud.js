import React, {useEffect, useState} from "react";
import NavBar from "../layouts/NavBar";
import Room from "../screens/Room";
import LoginRoom from "../pages/LoginRoom";
import NavBarAdmin from "../layouts/NavBarAdmin";


function RoomCrud() {
    const [room, setRoom] = useState('');
    const [toggleForm, setToggleForm] =  useState(true);
    const formMode = () => {
        setToggleForm(!toggleForm);
    }
    const roomState = () => {
        const data = localStorage.getItem('room');
        const us = data !== null ? JSON.parse(data) : null;
        setRoom(us);
    }

    useEffect(() => {
        roomState();
    }, []);
    return (
        <>
            {room !== null ? (
                <>
                    <NavBarAdmin setUserState={() => setRoom(null)}/>
                    <Room/>
                </>
            ) : (
                <>
                    <LoginRoom loggedIn={(room) => setRoom(room)} toggle={() => formMode()}/>
                </>
            )}
        </>

    );
}
export default RoomCrud;