import React from 'react';
import Glavna from "../components/glavna";
import Naslovi from "../components/Naslovi";
import {Link} from "react-router-dom";
import Usluge from "../components/Usluge";
import IstaknuteSobe from "../components/IstaknuteSobe";


function Naslovnica(){
    return(
        <>
            <Glavna hero={"defaultHero"}>
                <Naslovi naslov={"Dobro došli u Esplanade Hotel Zagreb"}>
                    <Link to="/2sobe" className={"btn-primary"}>SMJEŠTAJ</Link>
                </Naslovi>
            </Glavna>
            <Usluge/>
            <IstaknuteSobe/>
        </>
    );
}
export default Naslovnica;