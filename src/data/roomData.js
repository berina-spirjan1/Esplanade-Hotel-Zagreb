import firebase from "../helpers/db";
import Room from '../models/rooms';

const firestore = firebase.firestore();

export const getRooms = async () => {
    try {
        const response = await firestore.collection('rooms');
        const data = await response.get();
        let array = [];
        data.forEach(doc => {
            const room = new Room(
                doc.id,
                doc.data().typeRoom,
                doc.data().nameOfRoom,
                doc.data().numberOfBeds,
                doc.data().bathroom,
                doc.data().roomSize,
                doc.data().wifi,
                doc.data().desk,
                doc.data().airConditioning,
                doc.data().strongbox,
                doc.data().tv,
                doc.data().hairdryer,
                doc.data().bathrobe,
                doc.data().slippers,
                doc.data().wakeUpService,
                doc.data().soundInsulation,
                doc.data().roomPicture,
                doc.data().numberOfGuests,
                doc.data().status,
            );

            array.push(room);
        });
        return array;
    } catch (error) {
        throw error;
    }
}

export const addRoom = async (room) => {
    try {
        await firestore.collection('rooms').doc().set(room);
    } catch (error) {
        throw error;
    }
}

export const getRoom = async (id) => {
    try {
        const room = await firestore.collection('rooms').doc(id);
        const data = await room.get();
        return data.data();
    } catch (error) {
        throw error;
    }
}

export const updateRoom = async (id, data) => {
    try {
        const room = await firestore.collection('rooms').doc(id);
        await room.update(data)
    } catch (error) {
        throw error;
    }
}

export const deleteRoom = async (id) => {
    try {
        await firestore.collection('rooms').doc(id).delete();
    } catch (error) {
        throw error;
    }
}