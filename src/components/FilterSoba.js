import React, {useContext} from 'react';
import {RoomContext} from "../Context";
import Naslov from "./Naslov";

const getUniqueItems=(items,value)=>{
    return [... new Set(items.map(item=>item[value]))]
}
const FilerSoba=({rooms})=>{
    const context=useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    }=context;
    let types=getUniqueItems(rooms,"type");
    types=["all",...types];
    types=types.map((item,indeks)=>(
        <option value={item} key={indeks}>{item}</option>
    ));
    let people = getUniqueItems(rooms, "capacity");
    people = people.map((item, index) => (
        <option key={index} value={item}>
            {item}
        </option>
    ));
    return(
        <section className={"filter-container"}>
            <Naslov naslov={"PRETRAŽITE SOBE"}/>
            <form className={"filter-form"}>
                <div className={"form-group"}>
                    <label htmlFor={"type"}><b>TIP SOBE</b></label>
                    <select name={"type"} id={"type"} onChange={handleChange} value={type} className={"form-control"} >
                        {types}</select>
                </div>
                <div className="form-group">
                    <label htmlFor="capacity"><b>Broj osoba</b></label>
                <select
                    name="capacity"
                    id="capacity"
                    onChange={handleChange}
                    className="form-control"
                    value={capacity}
                >
                    {people}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="price"><b>Cijena {price} kuna</b></label>
                <input
                    type="range"
                    name="price"
                    min={minPrice}
                    max={maxPrice}
                    id="price"
                    value={price}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label htmlFor="price"><b>Veličina sobe</b></label>
                <div className="size-inputs">
                    <input
                        type="number"
                        name="minSize"
                        value={minSize}
                        onChange={handleChange}
                        className="size-input"
                    />
                    <input
                        type="number"
                        name="maxSize"
                        value={maxSize}
                        onChange={handleChange}
                        className="size-input"
                    />
                </div>
            </div>
            <div className="form-group">
                <div className="single-extra">
                    <input
                        type="checkbox"
                        name="breakfast"
                        id="breakfast"
                        checked={breakfast}
                        onChange={handleChange}
                    />
                    <label htmlFor="breakfast"><b>Doručak</b></label>
                </div>
                <div className="single-extra">
                    <input
                        type="checkbox"
                        name="pets"
                        checked={pets}
                        onChange={handleChange}
                    />
                    <label htmlFor="pets"><b>Ljubimci</b></label>
                </div>
            </div>
            </form>
        </section>
    )
}
export default FilerSoba;