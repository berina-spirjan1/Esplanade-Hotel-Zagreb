import React from 'react';

import {Dialog, DialogActions, DialogContent, DialogTitle, Button,
    Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio} from '@material-ui/core';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


const CustomerDialog = (props) => {
    return (
        <Dialog
            fullWidth={true}
            maxWidth='lg'
            open={props.open}
            onClose={props.close}
            aria-labelledby="max-width-dialog-title"
        >
            <DialogTitle>{props.formmode ?  'Dodaj' : 'Ažuriraj'} gosta</DialogTitle>
            <ValidatorForm
                onSubmit={props.addCustomer}
            >
                <DialogContent>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Ime"
                                onChange={props.changeFirstname}
                                name="firstname"
                                value={props.firstname}
                                validators={['required']}
                                errorMessages={['Ovo polje je obavezno']}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Prezime"
                                onChange={props.changeLastname}
                                name="lastname"
                                value={props.lastname}
                                validators={['required']}
                                errorMessages={['Ovo polje je obavezno']}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Broj telefona"
                                onChange={props.changephonenumber}
                                name="phonenumber"
                                value={props.phonenumber}
                                validators={['required']}
                                errorMessages={['Ovo polje je obavezno']}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Broj sobe"
                                onChange={props.changepostcode}
                                name="postcode"
                                value={props.postcode}
                                validators={['required']}
                                errorMessages={['Ovo polje je obavezno']}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Grad"
                                onChange={props.changeCity}
                                name="city"
                                value={props.city}
                                validators={['required']}
                                errorMessages={['Ovo polje je obavezno']}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Spol</FormLabel>
                                <RadioGroup aria-label="gender" name="gender" value={props.gender} onChange={props.changeGender}>
                                    <FormControlLabel value="Ženski" control={<Radio />} label="Ženski" />
                                    <FormControlLabel value="Muški" control={<Radio />} label="Muški" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Bračni status</FormLabel>
                                <RadioGroup aria-label="status" name="status" value={props.status} onChange={props.changeStatus}>
                                    <FormControlLabel value="Slobodan" control={<Radio />} label="Slobodan" />
                                    <FormControlLabel value="Vjenčan" control={<Radio />} label="Vjenčan" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button type="submit" color="#ada282">
                        {props.formmode ? 'Dodaj' : 'Ažuriraj'}
                    </Button>
                    <Button onClick={props.close} color="#ada282">
                        Zatvori
                    </Button>
                </DialogActions>
            </ValidatorForm>
        </Dialog>
    );
}

export default CustomerDialog;