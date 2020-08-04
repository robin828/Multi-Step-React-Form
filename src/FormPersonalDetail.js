import React from 'react'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';


const FormPersonalDetails = (props) => {

    const countinue = (e) => {
        e.preventDefault();
        props.nextStep();
    }
    const previous = (e) => {
        e.preventDefault();
        props.prevStep();
    }
    return (
        <MuiThemeProvider>
            <>
                <AppBar primary={false} style={{hieght: "20px"}} title="Enter User Details" />
                <TextField 
                    helperText="Enter occupation"
                    onChange={props.setOccupation}
                    defaultValue={props.occupation}
                />
                <br />
                <TextField 
                    helperText="Enter Bio"
                    onChange={props.Bio}
                    defaultValue={props.bio}
                />
                <br />
                <TextField 
                    helperText="Enter city"
                    onChange={props.setCity}
                    defaultValue={props.city}
                />
                <br />
                <Button 
                label="Countinue"
                primary={true} 
                style={styles.button}
                onClick={countinue}/>
                <Button 
                label="Back"
                primary={false} 
                style={styles.button}
                onClick={previous}/>
            </>
        </MuiThemeProvider>
    )
}
const styles = {
    button: {
        margin: 15,
    }
}

export default FormPersonalDetails
