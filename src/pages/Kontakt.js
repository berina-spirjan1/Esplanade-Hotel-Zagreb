import React from "react";
import Glavna from "../components/glavna";
import KontaktInformacije from "../components/KontaktInformacije";
import {Link} from "react-router-dom";
import Naslovi from "../components/Naslovi";

function Kontakt(){
    return(<>
            <Glavna hero={"kontaktHero"}>
            <Naslovi naslov={"Kontakt informacije"}>
                <Link to="/2sobe" className={"btn-primary"}>SMJEŠTAJ</Link>
            </Naslovi>
            </Glavna>
            <KontaktInformacije/>
            </>
);
}
export default Kontakt;