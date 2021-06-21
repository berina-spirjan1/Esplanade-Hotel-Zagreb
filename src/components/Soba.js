import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg';
import PropTypes from 'prop-types';
function Soba({room}){
    const {name,slug,images,price}=room
    return(
        <article className={"soba"}>
            <div className={"img-container"}>
                <img src={images[0] || defaultImg} alt={"Jednokrevetna soba"}/>
                <div className={"cijena-vrh"}>
                    <h6>{price} kuna</h6>
                    <p> po noćenju</p>
                </div>
                <Link to={`/sobe/${slug}`} className={"btn-primary link-sobe"}>Istaknute sobe</Link>
            </div>
            <p className={"informacije-soba"}>{name}</p>
        </article>
    )
}
Soba.propTypes={
    room:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired
    })
}
export default Soba;