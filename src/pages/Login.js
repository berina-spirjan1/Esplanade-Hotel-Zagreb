import React, { useState } from 'react';
import {Container, CssBaseline, Avatar, Typography, FormControlLabel,
    Button, Checkbox, Grid, Link, makeStyles, Card, CardContent} from '@material-ui/core';
import {LockRounded} from '@material-ui/icons';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import fire from '../helpers/db';
import {ToastContainer, toast} from 'react-toastify';
import {ScaleLoader} from 'react-spinners';
import Glavna from "../components/glavna";

const Login=(props)=>{
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberme, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false);

    const override = `
        display: block;
        margin-left: 100px;
        border-color: red;
    `;
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleCheck = (event) => {
        setRememberMe(event.target.checked);
    }
    const handlerLogin = () => {
        setLoading(true);
        fire.auth()
            .signInWithEmailAndPassword(email, password)
            .then(response => {
                const {user} =  response;
                const data = {
                    userId: user.uid,
                    email: user.email
                }
                localStorage.setItem('user', JSON.stringify(data));
                const storage = localStorage.getItem('user');
                const loggedInUser = storage !== null ? JSON.parse(storage) : null;
                props.loggedIn(loggedInUser);
                setLoading(false);
            }).catch(error => {
            toast.error(error.message);
            setLoading(false);
        });

    }
    return (
        <Glavna hero={"loginHero"}>
        <Container component="main" maxWidth="s">

            <Card className={classes.card}>
                <CardContent>
                    <ToastContainer/>
                    <CssBaseline/>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockRounded/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Prijavite se
                        </Typography>
                        <ValidatorForm
                            onSubmit={handlerLogin}
                            onError={errors => {
                                for (const err of errors) {
                                    console.log(err.props.errorMessages[0])
                                }
                            }}
                            className={classes.form}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Email"
                                onChange={handleEmail}
                                name="email"
                                value={email}
                                validators={['required', 'isEmail']}
                                errorMessages={['Ovo polje je obavezno popuniti', 'E-mail adresa nije validna']}
                                autoComplete='off' />
                            <TextValidator
                                variant="outlined"
                                fullWidth
                                label="Password"
                                onChange={handlePassword}
                                name="password"
                                type="password"
                                value={password}
                                validators={['required']}
                                errorMessages={['Ovo polje je obavezno popuniti']}
                                autoComplete="off"
                            />
                            <FormControlLabel
                                control={<Checkbox value={rememberme} onChange={(e) => handleCheck(e)}  color="primary" />}
                                label="Zapamti korisnika"
                            />
                            {loading ? (
                                <ScaleLoader
                                    marginTop={"50px"}
                                    css={override}
                                    size={150}
                                    color={"#8c7432"}
                                    loading={loading}/>
                            ) : (
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    className={classes.submit}
                                >
                                    Prijavite se
                                </Button>
                            )}

                            <Grid container>
                                <Grid item>
                                    <Link onClick={props.toggle} className={classes.pointer} variant="body2">
                                        {"Nemate korisnički račun? Registrujte se"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </ValidatorForm>
                    </div>
                </CardContent>
            </Card>
        </Container>
        </Glavna>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "#8c7432",
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        background: 'linear-gradient(45deg, #ada282 30%, #8c7432  90%)',
        margin: theme.spacing(3, 0, 2),
        color: '#ffffff'
    },
    card: {
        marginTop: '40px',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingBottom: '20px',
        marginLeft:'970px',
        marginRight:'160px',
        opacity:"0.9"
    },
    pointer: {
        cursor: 'pointer',
        color: '#8c7432'
    }
}));
export default Login;