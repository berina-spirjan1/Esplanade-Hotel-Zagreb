import React from 'react';
import ListaSoba from "./ListaSoba";
import FilterSoba from "./FilterSoba";
import Loading from "./Loading";
import {withRoomConsumer} from "../Context";
function SobeContainer({context}){
    const { loading, sortedRooms, rooms } = context;
    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <FilterSoba rooms={rooms} />
            <ListaSoba rooms={sortedRooms} />
        </>
    );

}
export default withRoomConsumer(SobeContainer);
