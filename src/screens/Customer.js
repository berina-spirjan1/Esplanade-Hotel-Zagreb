import React, { useEffect, useState } from 'react';
import {Table, TableBody, TableCell, TableRow, TableHead,
    TableContainer, Paper, makeStyles, Container,
    Typography, Button, Grid, IconButton} from '@material-ui/core';
import {AddCircle, Edit, Delete} from '@material-ui/icons';
import {ScaleLoader} from 'react-spinners';
import {ToastContainer, toast} from 'react-toastify';
import {getCustomers, addCustomer, getCustomer, updateCustomer, deleteCustomer} from '../data/customerData';
import CustomerDialog from './CustomerDialog';

const Customer = () => {
    const classes  = useStyles();
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [formMode, setFormMode] = useState(true);
    const [custId, setCustId] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [phonenumber, setPhoneNumber] =  useState('');
    const [maritalstatus, setMaritalStatus] = useState('Slobodan');
    const [gender, setGender] = useState('Ženski');
    const [city, setCity] = useState('');
    const [postcode, setPostCode] = useState('');
    const override =`
        display: flex;
        align-items: center;
        justify-content: center;    
        border-color: red;
    `;
    const handleClose = () => {
        setOpen(false);
    }
    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    }
    const handleLastName = (event) => {
        setLastName(event.target.value);
    }
    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    }
    const handleMaritalStatus = (event) => {
        setMaritalStatus(event.target.value);
    }
    const handleGender = (event) => {
        setGender(event.target.value);
    }
    const handleCity = (event) => {
        setCity(event.target.value);
    }
    const handlePostCode = (event) => {
        setPostCode(event.target.value);
    }
    const getlist = async () => {
        try {
            setLoading(true);
            const list = await getCustomers();
            setCustomers(list);
            setLoading(false);
        } catch (error) {
            toast.error(error.message);
            setLoading(false);
        }
    }
    const getOneCustomer = async (id) => {
        try {
            setFormMode(false);
            setCustId(id);
            const response = await getCustomer(id);
            setFirstName(response.firstname);
            setLastName(response.lastname);
            setPhoneNumber(response.phonenumber);
            setMaritalStatus(response.maritalstatus);
            setGender(response.gender);
            setCity(response.city);
            setPostCode(response.postcode);
            setOpen(true);
        } catch (error) {
            toast.error(error.message);
        }

    }
    const deleteHandler = async (id) => {
        try {
            await deleteCustomer(id);
            getlist();
            toast.success('Gost uspješno obrisan!');
        } catch (error) {
            toast.error(error.message);
        }
    }
    const handleAdd = () => {
        setOpen(true);
        setFormMode(true);
        setFirstName('');
        setLastName('');
        setPhoneNumber('');
        setPostCode('');
        setCity('');
        setMaritalStatus('Slobodan');
        setGender('Ženski');
    }

    const addCustomerHandler = async () => {
        try {
            const customer = {
                firstname,
                lastname,
                phonenumber,
                maritalstatus,
                gender,
                city,
                postcode
            }
            if (formMode) {
                await addCustomer(customer);
                toast.success('Gost uspješno dodat!');
                getlist();
                setOpen(false);
                setFirstName('');
                setLastName('');
                setPhoneNumber('');
                setPostCode('');
                setCity('');
                setMaritalStatus('Slobodan');
                setGender('Ženski');
            }else {
                await updateCustomer(custId, customer);
                toast.success('Gost uspješno ažuriran!');
                getlist();
                setOpen(false);
                setFirstName('');
                setLastName('');
                setPhoneNumber('');
                setPostCode('');
                setCity('');
                setMaritalStatus('Slobodan');
                setGender('Ženski');
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
                            Gosti hotela
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleAdd}
                            className={classes.button}
                            startIcon={<AddCircle/>}
                        >Dodaj gosta</Button>
                    </Grid>
                </Grid>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.head}>Ime i prezime</TableCell>
                            <TableCell className={classes.head}>Broj telefona</TableCell>
                            <TableCell className={classes.head}>Bračni status</TableCell>
                            <TableCell className={classes.head}>Spol</TableCell>
                            <TableCell className={classes.head}>Grad</TableCell>
                            <TableCell className={classes.head}>Broj sobe</TableCell>
                            <TableCell className={classes.head}>Komentar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customers.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={7}>
                                    <ScaleLoader
                                        css={override}
                                        size={150}
                                        color={"#eb4034"}
                                        loading={loading}/>
                                </TableCell>
                            </TableRow>
                        ) : (
                            <>
                                {customers.map((cust) => (
                                    <TableRow key={cust.id}>
                                        <TableCell>{cust.firstname} {cust.lastname}</TableCell>
                                        <TableCell>{cust.phonenumber}</TableCell>
                                        <TableCell>{cust.maritalstatus}</TableCell>
                                        <TableCell>{cust.gender}</TableCell>
                                        <TableCell>{cust.city}</TableCell>
                                        <TableCell>{cust.postcode}</TableCell>
                                        <TableCell>
                                            <IconButton onClick={() => getOneCustomer(cust.id)} color="primary" aria-label="Ažuriran gost">
                                                <Edit />
                                            </IconButton>
                                            <IconButton onClick={() => deleteHandler(cust.id)} color="secondary" aria-label="Obrisan gost">
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
            <CustomerDialog
                open={open}
                close={handleClose}
                formmode={formMode}
                firstname={firstname}
                lastname={lastname}
                phonenumber={phonenumber}
                postcode={postcode}
                city={city}
                status={maritalstatus}
                gender={gender}
                changeFirstname={handleFirstName}
                changeLastname={handleLastName}
                changephonenumber={handlePhoneNumber}
                changepostcode={handlePostCode}
                changeCity={handleCity}
                changeStatus={handleMaritalStatus}
                changeGender={handleGender}
                addCustomer={addCustomerHandler}
            />
        </Container>
    );
}


const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    container: {
        marginTop: '40px'
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

export default Customer;