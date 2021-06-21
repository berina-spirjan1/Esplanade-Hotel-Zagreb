import React from "react";

function Naslovi({children,naslov,podnaslov}){
    return(
        <div className={"naslovi"}>
            <h1>{naslov}</h1>
            <div></div>
            <p>{podnaslov}</p>
            {children}
        </div>
    )
}
export default Naslovi;