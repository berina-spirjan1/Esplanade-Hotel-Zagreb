import React, {useEffect, useState} from "react";
import {addRoom, deleteRoom, getRoom, getRooms, updateRoom} from "../data/roomData";
import {toast, ToastContainer} from "react-toastify";
import {
    Button,
    Container,
    Grid, IconButton, makeStyles,
    Paper,
    Table, TableBody, TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@material-ui/core";
import {AddCircle, Delete, Edit} from "@material-ui/icons";
import {ScaleLoader} from "react-spinners";
import RoomDialog from "./RoomDialog";

const Room = () => {
    const classes  = useStyles();
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [formMode, setFormMode] = useState(true);
    const [roomId, setRoomId] = useState('');
    const [typeRoom, setTypeRoom] = useState('');
    const [nameOfRoom, setNameOfRoom] = useState('');
    const [numberOfBeds, setNumberOfBeds] =  useState(1);
    const [bathroom, setBathroom] = useState(false);
    const [airConditioning, setAirConditioning] = useState(false);
    const [strongbox, setStrongbox] = useState(false);
    const [tv, setTv] = useState(false);
    const [desk, setDesk] = useState(false);
    const [hairdryer, setHairdryer] = useState(false);
    const [bathrobe, setBathrobe] = useState(false);
    const [slippers, setSlippers] = useState(false);
    const [wifi, setWifi] = useState(false);
    const [wakeUpService, setWakeUpService] = useState(false);
    const [soundInsulation, setSoundInsulation] = useState(false);
    const [roomPicture, setRoomPicture] = useState('./images/details-1.jpeg');
    const [roomSize, setRoomSize] = useState('36m^2');
    const [status, setStatus] = useState(true);
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const override =`
        display: flex;
        align-items: center;
        justify-content: center;    
        border-color: red;
    `;
    const handleClose = () => {
        setOpen(false);
    }
    const handleRoomId = (event) => {
        setRoomId(event.target.value);
    }
    const handleTypeRoom = (event) => {
        setTypeRoom(event.target.value);
    }
    const handleNameOfRoom = (event) => {
        setNameOfRoom(event.target.value);
    }
    const handleNumberOfBeds = (event) => {
        setNumberOfBeds(event.target.value);
    }
    const handleBathroom = (event) => {
        setBathroom(event.target.value);
    }
    const handleAirConditioning = (event) => {
        setAirConditioning(event.target.value);
    }
    const handleStrongbox = (event) => {
        setStrongbox(event.target.value);
    }
    const handleWifi = (event) => {
        setWifi(event.target.value);
    }
    const handleDesk = (event) => {
        setDesk(event.target.value);
    }
    const handleTv = (event) => {
        setTv(event.target.value);
    }
    const handleHairdryer = (event) => {
        setHairdryer(event.target.value);
    }
    const handleBathrobe = (event) => {
        setBathrobe(event.target.value);
    }
    const handleSlippers = (event) => {
        setSlippers(event.target.value);
    }
    const handleWakeUpService = (event) => {
        setWakeUpService(event.target.value);
    }
    const handleSoundInsulation = (event) => {
        setSoundInsulation(event.target.value);
    }
    const handleRoomPicture = (event) => {
        setRoomPicture(event.target.value);
    }
    const handleRoomSize = (event) => {
        setRoomSize(event.target.value);
    }
    const handleStatus = (event) => {
        setStatus(event.target.value);
    }
    const handleNumberOfGuests = (event) => {
        setNumberOfGuests(event.target.value);
    }

    const getlist = async () => {
        try {
            setLoading(true);
            const list = await getRooms();
            setRooms(list);
            setLoading(false);
        } catch (error) {
            toast.error(error.message);
            setLoading(false);
        }
    }
    const getOneRoom = async (id) => {
        try {
            setFormMode(false);
            setRoomId(id);
            const response = await getRoom(id);
            setTypeRoom(response.typeRoom);
            setNameOfRoom(response.nameOfRoom);
            setNumberOfBeds(response.numberOfBeds);
            setBathroom(response.bathroom);
            setAirConditioning(response.airConditioning);
            setStrongbox(response.strongbox);
            setTv(response.tv);
            setHairdryer(response.hairdryer);
            setBathrobe(response.bathrobe);
            setWifi(response.wifi);
            setDesk(response.desk);
            setSlippers(response.slippers);
            setWakeUpService(response.wakeUpService);
            setSoundInsulation(response.soundInsulation);
            setRoomPicture(response.roomPicture);
            setRoomSize(response.roomSize);
            setStatus(response.status);
            setNumberOfGuests(response.numberOfGuests);
            setOpen(true);
        } catch (error) {
            toast.error(error.message);
        }

    }
    const deleteHandler = async (id) => {
        try {
            await deleteRoom(id);
            getlist();
            toast.success('Soba je uspješno obrisana!');
        } catch (error) {
            toast.error(error.message);
        }
    }
    const handleAddRoom = () => {
        setOpen(true);
        setFormMode(true);
        setTypeRoom('');
        setNameOfRoom('');
        setNumberOfBeds(1);
        setBathroom(false);
        setAirConditioning(false);
        setStrongbox(false);
        setTv(false);
        setHairdryer(false);
        setBathrobe(false);
        setStrongbox(false);
        setWifi(false);
        setDesk(false);
        setSlippers(false);
        setWakeUpService(false);
        setSoundInsulation(false);
        setRoomPicture('');
        setRoomSize('36m^2');
        setStatus(true);
        setNumberOfGuests(1);
    }

    const addRoomHandler = async () => {
        try {
            const room = {
                nameOfRoom,
                typeRoom,
                numberOfBeds,
                bathroom,
                airConditioning,
                strongbox,
                tv,
                desk,
                hairdryer,
                bathrobe,
                slippers,
                wakeUpService,
                soundInsulation,
                roomSize,
                status,
                wifi,
                roomPicture,
                numberOfGuests

            }
            if (formMode) {
                await addRoom(room);
                toast.success('Soba je uspješno dodata!');
                getlist();
                setOpen(false);
                setTypeRoom('');
                setNameOfRoom('');
                setNumberOfBeds(1);
                setBathroom(false);
                setAirConditioning(false);
                setStrongbox(false);
                setTv(false);
                setHairdryer(false);
                setBathrobe(false);
                setStrongbox(false);
                setWifi(false);
                setDesk(false);
                setSlippers(false);
                setWakeUpService(false);
                setSoundInsulation(false);
                setRoomPicture('');
                setRoomSize('36m^2');
                setStatus(true);
                setNumberOfGuests(1);
            }else {
                await updateRoom(roomId, room);
                toast.success('Gost uspješno ažuriran!');
                getlist();
                setOpen(true);
                setTypeRoom('');
                setNameOfRoom('');
                setNumberOfBeds(1);
                setBathroom(false);
                setAirConditioning(false);
                setStrongbox(false);
                setTv(false);
                setHairdryer(false);
                setBathrobe(false);
                setStrongbox(false);
                setWifi(false);
                setDesk(false);
                setSlippers(false);
                setWakeUpService(false);
                setSoundInsulation(false);
                setRoomPicture('');
                setRoomSize('36m^2');
                setStatus(true);
                setNumberOfGuests(1);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(() => {
        getlist();
    }, []);
    return (
        <Container className={classes.container}>
            <ToastContainer/>
            <TableContainer component={Paper}>
                <Grid container>
                    <Grid item xs={8}>
                        <Typography className={classes.title} variant="h6" component="div">
                            <b>SOBE HOTELA</b>
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleAddRoom}
                            className={classes.button}
                            startIcon={<AddCircle/>}
                        >Dodaj sobu</Button>
                    </Grid>
                </Grid>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.head}>Naziv sobe</TableCell>
                            <TableCell className={classes.head}>Tip sobe</TableCell>
                            <TableCell className={classes.head}>Broj kreveta</TableCell>
                            <TableCell className={classes.head}>Kupatilo</TableCell>
                            <TableCell className={classes.head}>Klima uređaj</TableCell>
                            <TableCell className={classes.head}>Sef</TableCell>
                            <TableCell className={classes.head}>Tv</TableCell>
                            <TableCell className={classes.head}>Radni stol</TableCell>
                            <TableCell className={classes.head}>Sušilo za kosu</TableCell>
                            <TableCell className={classes.head}>Ogrtači</TableCell>
                            <TableCell className={classes.head}>Papuče</TableCell>
                            <TableCell className={classes.head}>Servis za buđenje</TableCell>
                            <TableCell className={classes.head}>Zvučna izolacija</TableCell>
                            <TableCell className={classes.head}>Veličina sobe</TableCell>
                            <TableCell className={classes.head}>Status sobe</TableCell>
                            <TableCell className={classes.head}>Wifi</TableCell>
                            <TableCell className={classes.head}>Slika sobe</TableCell>
                            <TableCell className={classes.head}>Broj gostiju</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rooms.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={12}>
                                    <ScaleLoader
                                        css={override}
                                        size={100}
                                        color={"#eb4034"}
                                        loading={loading}/>
                                </TableCell>
                            </TableRow>
                        ) : (
                            <>
                                {rooms.map((room) => (
                                    <TableRow key={room.id}>
                                        <TableCell>{room.nameOfRoom}</TableCell>
                                        <TableCell>{room.typeRoom}</TableCell>
                                        <TableCell>{room.numberOfBeds}</TableCell>
                                        <TableCell>{room.bathroom}</TableCell>
                                        <TableCell>{room.airConditioning}</TableCell>
                                        <TableCell>{room.strongbox}</TableCell>
                                        <TableCell>{room.tv}</TableCell>
                                        <TableCell>{room.desk}</TableCell>
                                        <TableCell>{room.hairdryer}</TableCell>
                                        <TableCell>{room.bathrobe}</TableCell>
                                        <TableCell>{room.slippers}</TableCell>
                                        <TableCell>{room.wakeUpService}</TableCell>
                                        <TableCell> {room.soundInsulation}</TableCell>
                                        <TableCell>{room.roomSize} </TableCell>
                                        <TableCell>{room.status}</TableCell>
                                        <TableCell>{room.wifi} </TableCell>
                                        <TableCell>{room.roomPicture}</TableCell>
                                        <TableCell>{room.numberOfGuests}</TableCell>
                                        <TableCell>
                                            <IconButton onClick={() => getOneRoom(room.id)} color="primary" aria-label="Ažurirana soba">
                                                <Edit />
                                            </IconButton>
                                            <IconButton onClick={() => deleteHandler(room.id)} color="secondary" aria-label="Obrisana soba">
                                                <Delete />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}

                            </>
                        )}

                    </TableBody>
                </Table>
            </TableContainer>
            <RoomDialog
                open={open}
                close={handleClose}
                formmode={formMode}
                nameOfRoom={nameOfRoom}
                typeRoom={typeRoom}
                numberOfBeds={numberOfBeds}
                bathroom={bathroom}
                airConditioning={airConditioning}
                strongbox={strongbox}
                tv={tv}
                desk={desk}
                hairdryer={hairdryer}
                bathrobe={bathrobe}
                slippers={slippers}
                wakeUpService={wakeUpService}
                soundInsulation={soundInsulation}
                roomSize={roomSize}
                status={status}
                wifi={wifi}
                roomPicture={roomPicture}
                numberOfGuests={numberOfGuests}
                changeTypeRoom={handleTypeRoom}
                changeNameOfRoom={handleNameOfRoom}
                changeNumberOfBeds={handleNumberOfBeds}
                changeBathroom={handleBathroom}
                changeAirConditioning={handleAirConditioning}
                changeStrongbox={handleStrongbox}
                changeTv={handleTv}
                changeDesk={handleDesk}
                changeHairdryer={handleHairdryer}
                changeBathrobe={handleBathrobe}
                changeSlippers={handleSlippers}
                changeWakeUpService={handleWakeUpService}
                changeWifi={handleWifi}
                changeSoundInsulation={handleSoundInsulation}
                changeRoomPicture={handleRoomPicture}
                changeRoomSize={handleRoomSize}
                changeStatus={handleStatus}
                changeNumberOfGuests={handleNumberOfGuests}
                addRoom={addRoomHandler}
            />
        </Container>
    );
}


const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 5,
    },
    container: {
        minWidth:1500,
        marginTop: '40px',
        marginLeft:'10px',
    },
    title: {
        flex: '1 1 100%',
        padding: '20px'
    },
    head: {
        backgroundColor: "#ada282",
        color: theme.palette.common.white,
    },
    button: {
        margin: theme.spacing(1),
        float: 'right',
    },
}));

export default Room;