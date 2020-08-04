import React from 'react'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';


const FormUserDetails = (props) => {

    const countinue = (e) => {
        e.preventDefault();
        props.nextStep();
    }
    return (
        <MuiThemeProvider>
            <>
                <AppBar style={{hieght: "20px"}} title="Enter User Details" />
                <TextField 
                    helperText="Enter First Name"
                    onChange={props.setFirstName}
                    defaultValue={props.fistName}
                />
                <br />
                <TextField 
                    helperText="Enter Last Name"
                    onChange={props.setLastName}
                    defaultValue={props.lastName}
                />
                <br />
                <TextField 
                    helperText="Enter Email"
                    onChange={props.setEmail}
                    defaultValue={props.email}
                />
                <br />
                <Button 
                label="Countinue"
                primary={true} 
                style={styles.button}
                onClick={countinue}/>
            </>
        </MuiThemeProvider>
    )
}
const styles = {
    button: {
        margin: 15,
    }
}

export default FormUserDetails
