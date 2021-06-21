import React from "react";

function Glavna({children,hero}){
    return(
        <header className={hero}>
            {children}
        </header>
)}
Glavna.defaultProps={
    hero:"defaultHero"
};
export default Glavna;