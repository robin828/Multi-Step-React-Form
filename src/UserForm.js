import React, {useState} from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetail from './FormPersonalDetail';
import Confirm from './Confirm';

const UserForm = () => {
    const [step, setStep] = useState(1)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [occupation, setOccupation] = useState("")
    const [city, setCity] = useState("")
    const [bio, setBio] = useState("")

    
    switch(step) {
        case 1:
            return (
                <FormUserDetails nextStep={nextStep}
                firstName={firstName} 
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
                email={email}
                setEmail={setEmail}
                />
            )
        case 2:
            return (
                <FormPersonalDetail 
                nextStep={nextStep}
                occupation={occupation}
                setOccupation={setOccupation}
                city={city}
                setCity={setCity}
                bio={bio}
                setBio={setBio}
                prevStep={prevStep}
                />
            )
        case 3:
            return (
                <confirm 
                occupation={occupation}
                city={city}
                bio={bio}
                firstName={firstName} 
                lastName={lastName}
                email={email}
                prevStep={prevStep}
                />
                )
        case 4:
            return (
                <div>Success</div>
            )
    }
}

export default UserForm
