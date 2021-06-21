import React from 'react';
import loadingGif from '../images/gif/loading-arrow.gif';
function Loading(){
    return(
        <div className={"loading"}>
            <h5>Sobe se učitavaju. Molimo Vas da pričekate.</h5>
            <img src={loadingGif} alt={"Sobe se učitavaju."}/>
        </div>
    )
}
export default Loading;