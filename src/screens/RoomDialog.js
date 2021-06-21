import React from 'react';
import {Dialog, DialogActions, DialogContent, DialogTitle, Button,
    Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio} from '@material-ui/core';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import AddPicture from "../components/AddPicture";


const RoomDialog = (props) => {
    return (
        <Dialog
            fullWidth={true}
            maxWidth='lg'
            open={props.open}
            onClose={props.close}
            aria-labelledby="max-width-dialog-title"
        >
            <DialogTitle>{props.formmode ?  'Dodaj' : 'Ažuriraj'} sobu</DialogTitle>
            <ValidatorForm
                onSubmit={props.addRoom}
            >
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Naziv sobe"
                                onChange={props.changeNameOfRoom}
                                name="nameOfRoom"
                                value={props.nameOfRoom}
                                validators={['required']}
                                errorMessages={['Ovo polje je obavezno']}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Tip sobe"
                                onChange={props.changeTypeRoom}
                                name="typeRoom"
                                value={props.typeRoom}
                                validators={['required']}
                                errorMessages={['Ovo polje je obavezno']}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Broj kreveta"
                                onChange={props.changeNumberOfBeds}
                                name="numberOfBeds"
                                value={props.numberOfBeds}
                                validators={['required']}
                                errorMessages={['Ovo polje je obavezno']}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Veličina sobe"
                                onChange={props.changeRoomSize}
                                name="roomSize"
                                value={props.roomSize}
                                validators={['required']}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Broj gostiju"
                                onChange={props.changeNumberOfGuests}
                                name="numberOfGuests"
                                value={props.numberOfGuests}
                                validators={['required']}
                                errorMessages={['Ovo polje je obavezno']}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Kupatilo</FormLabel>
                                <RadioGroup aria-label="bathroom" name="bathroom" value={props.bathroom}
                                            onChange={props.changeBathroom}>
                                    <FormControlLabel value="Da" control={<Radio />} label="Da" />
                                    <FormControlLabel value="Ne" control={<Radio />} label="Ne" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Klima uređaj</FormLabel>
                                <RadioGroup aria-label="airConditioning" name="airConditioning" value={props.airConditioning}
                                            onChange={props.changeAirConditioning}>
                                    <FormControlLabel value="Da" control={<Radio />} label="Da" />
                                    <FormControlLabel value="Ne" control={<Radio />} label="Ne" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Sef</FormLabel>
                                <RadioGroup aria-label="strongbox" name="strongbox" value={props.strongbox}
                                            onChange={props.changeStrongbox}>
                                    <FormControlLabel value="Da" control={<Radio />} label="Da" />
                                    <FormControlLabel value="Ne" control={<Radio />} label="Ne" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Tv</FormLabel>
                                <RadioGroup aria-label="tv" name="tv" value={props.tv}
                                            onChange={props.changeTv}>
                                    <FormControlLabel value="Da" control={<Radio />} label="Da" />
                                    <FormControlLabel value="Ne" control={<Radio />} label="Ne" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Desk</FormLabel>
                                <RadioGroup aria-label="desk" name="desk" value={props.desk}
                                            onChange={props.changeDesk}>
                                    <FormControlLabel value="Da" control={<Radio />} label="Da" />
                                    <FormControlLabel value="Ne" control={<Radio />} label="Ne" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Ogrtači</FormLabel>
                                <RadioGroup aria-label="bathrobe" name="bathrobe" value={props.bathrobe}
                                            onChange={props.changeBathrobe}>
                                    <FormControlLabel value="Da" control={<Radio />} label="Da" />
                                    <FormControlLabel value="Ne" control={<Radio />} label="Ne" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Papuče</FormLabel>
                                <RadioGroup aria-label="slippers" name="slippers" value={props.slippers}
                                            onChange={props.changeSlippers}>
                                    <FormControlLabel value="Da" control={<Radio />} label="Da" />
                                    <FormControlLabel value="Ne" control={<Radio />} label="Ne" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Wifi</FormLabel>
                                <RadioGroup aria-label="wifi" name="wifi" value={props.wifi}
                                            onChange={props.changeWifi}>
                                    <FormControlLabel value="Da" control={<Radio />} label="Da" />
                                    <FormControlLabel value="Ne" control={<Radio />} label="Ne" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Servis za buđenje</FormLabel>
                                <RadioGroup aria-label="wakeUpService" name="wakeUpService" value={props.wakeUpService}
                                            onChange={props.changeWakeUpService}>
                                    <FormControlLabel value="Da" control={<Radio />} label="Da" />
                                    <FormControlLabel value="Ne" control={<Radio />} label="Ne" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Zvučna izolacija</FormLabel>
                                <RadioGroup aria-label="soundInsulation" name="soundInsulation" value={props.soundInsulation}
                                            onChange={props.changeSoundInsulation}>
                                    <FormControlLabel value="Da" control={<Radio />} label="Da" />
                                    <FormControlLabel value="Ne" control={<Radio />} label="Ne" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Status sobe</FormLabel>
                                <RadioGroup aria-label="strongbox" name="strongbox" value={props.status}
                                            onChange={props.changeStatus}>
                                    <FormControlLabel value="Dostupna" control={<Radio />} label="Dostupna" />
                                    <FormControlLabel value="Popunjena" control={<Radio />} label="Popunjena" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Sušilo za kosu</FormLabel>
                                <RadioGroup aria-label="hairdryer" name="hairdryer" value={props.hairdryer}
                                            onChange={props.changeHairdryer}>
                                    <FormControlLabel value="Da" control={<Radio />} label="Da" />
                                    <FormControlLabel value="Ne" control={<Radio />} label="Ne" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                            <AddPicture/>
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

export default RoomDialog;