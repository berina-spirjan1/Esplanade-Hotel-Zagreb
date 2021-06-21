import React from 'react';
import Glavna from "../components/glavna";
import Naslovi from "../components/Naslovi";
import {Link} from "react-router-dom";

function Greska(){
    return(
        <Glavna hero={"greskaHero"}>
            <Naslovi naslov={"404"} podnaslov={"Stranica ne postoji!"}>
                <Link to={"/"} className={"btn-primary"}>POVRATAK NA NASLOVNICU</Link></Naslovi>
        </Glavna>
    )
}
export default Greska;