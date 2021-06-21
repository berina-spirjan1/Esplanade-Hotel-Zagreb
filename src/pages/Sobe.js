import React from 'react';
import Glavna from "../components/glavna";
import Naslovi from "../components/Naslovi";
import {Link} from "react-router-dom";
import SobeContainer from "../components/SobeContainer";
function Sobe(){
    return(
        <>
            <Glavna hero="roomsHero">
                <Naslovi naslov={"Booking soba"} podnaslov={""}>
                    <Link to={"/"} className={"btn-primary"}>
                        POVRATAK NA NASLOVNICU
                    </Link>
                </Naslovi>
            </Glavna>
            <SobeContainer/>
        </>
    );
}
export default Sobe;