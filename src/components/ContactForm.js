// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

const ContactForm = (props) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState('');

    const addContactHandler = (event) => {
        event.preventDefault();
        const data = {
            name,
            phone,
            email,
            photo,
        }       
        props.onSubmit(data)
        setName('')
        setPhone('')
        setEmail('')
        setPhoto('')
    }

    return (
        <> 
            <Card sx={{ ml:3, display: 'flex', flexWrap: 'wrap' }}>
                <TextField fullWidth sx={{ mt: 3, mx:2, mb:1}} 
                value={name}
                onChange={(event) => setName(event.target.value)}
                id="name" label="Name *" variant="filled" />
                <TextField fullWidth sx={{ mx:2, mb:1 }} 
                 value={phone}
                onChange={(event) => setPhone(event.target.value)}
                id="phone" label="Phone *" variant="filled" />
                <TextField fullWidth sx={{ mx:2, mb:1 }} 
                 value={email}
                onChange={(event) => setEmail(event.target.value)}
                id="email" label="Email *" variant="filled" />
                <TextField fullWidth sx={{ mx:2, mb:1 }}
                 value={photo}
                onChange={(event) => setPhoto(event.target.value)} 
                id="photo" label="Photo URL *" variant="filled" />
                <Button sx={{ ml:1, mt: 3, mb:1}} 
                onClick={addContactHandler}
                color="success" variant="text">ADD NEW</Button>
            </Card>
        </>
    );
}

export default ContactForm;