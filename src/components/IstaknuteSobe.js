import React, {Component} from 'react';
import {RoomContext} from "../Context";
import Loading from "./Loading";
import Soba from './Soba';
import Naslov from "./Naslov";
class IstaknuteSobe extends Component {
    static contextType=RoomContext;
    render() {
        let {loading, featuredRooms: rooms}=this.context;
        rooms=rooms.map(room=>{
            return <Soba key={room.id} room={room}/>
        })
        return (

            <section className={"istaknute-sobe"}>
                <Naslov naslov={"ISTAKNUTE SOBE"}/>
                    <div className={"istaknute-sobe-centar"}>
                        {loading?<Loading/>:rooms}
                    </div>
            </section>
        );
    }
}

export default IstaknuteSobe;