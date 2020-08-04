import React from 'react'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const Confirm = (props) => {

    const Submit = (e) => {
        e.preventDefault();
        //Submit Data to backend
    }
    const previous = (e) => {
        e.preventDefault();
        props.prevStep();
    }
    return (
        <MuiThemeProvider>
            <>
                <AppBar primary={false} style={{hieght: "20px"}} title="Confirm User Data" />
                <List>
                    <ListItem
                    primaryText="First Name"
                    secondaryText= { props.firstname }
                    />
                    <ListItem
                    primaryText="First Name"
                    secondaryText= { props.lastname }
                    />
                    <ListItem
                    primaryText="First Name"
                    secondaryText= { props.email }
                    />
                    <ListItem
                    primaryText="First Name"
                    secondaryText= { props.city }
                    />
                    <ListItem
                    primaryText="First Name"
                    secondaryText= { props.occupation }
                    />
                    <ListItem
                    primaryText="First Name"
                    secondaryText= { props.bio }
                    />
                    
                </List>
                <Button 
                label="Countinue"
                primary={true} 
                style={styles.button}
                onClick={Submit}/>
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

export default Confirm