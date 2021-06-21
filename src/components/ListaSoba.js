import React from 'react';
import Soba from "./Soba";

function ListaSoba({rooms}){
    if(rooms.length===0){
        return(
            <div className={"empty-search"}>
                <h4>Nažalost, ne posjedujemo sobu koja odgovara parametrima Vaše pretrage.</h4>
            </div>
        )
    }
    return(
        <section className={"roomslist"}>
            <div className={"roomslist-center"}>
                {rooms.map(item=>{
                return <Soba key={item.id} room={item}/>
            })}
            </div>
        </section>
    )
}
export default ListaSoba;