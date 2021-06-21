class Rooms {
    constructor(id, typeRoom, nameOfRoom, numberOfBeds, bathroom, roomSize, wifi, desk, airConditioning,strongbox,tv,hairdryer,
                bathrobe, slippers, wakeUpService, soundInsulation, roomPicture, numberOfGuests, status){
        this.id=id;
        this.typeRoom=typeRoom;
        this.nameOfRoom=nameOfRoom;
        this.numberOfBeds=numberOfBeds;
        this.bathroom=bathroom;
        this.roomSize=roomSize;
        this.wifi=wifi;
        this.desk=desk;
        this.airConditioning=airConditioning;
        this.strongbox=strongbox;
        this.tv=tv;
        this.hairdryer=hairdryer;
        this.bathrobe=bathrobe;
        this.slippers=slippers;
        this.wakeUpService=wakeUpService;
        this.soundInsulation=soundInsulation;
        this.roomPicture=roomPicture;
        this.numberOfGuests=numberOfGuests;
        this.status=status;
    }
}

export default Rooms;