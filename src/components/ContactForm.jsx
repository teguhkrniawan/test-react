// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { Button, Card, CardActions, CardContent, TextField, Typography } from "@mui/material";
import { useState } from 'react';

const ContactForm = ({ props }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [photo, setPhoto] = useState('')

    return (
        <>
            <Card>
                <CardContent>

                    {/* {console.log('state, ' ,props)} */}

                    {/* title */}
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Add New Friend
                    </Typography>

                    {/* form content */}
                    <TextField value={name} onChange={(e) => setName(e.target.value)} sx={{width:'100%'}} id="name" label="Name" variant="filled" size="small"/>
                    <TextField value={email} onChange={(e) => setEmail(e.target.value)} sx={{width:'100%', mt:2}} id="email" label="Email" variant="filled" size="small"/>
                    <TextField value={phone} onChange={(e) => setPhone(e.target.value)} sx={{width:'100%', mt:2}} id="phone" label="Phone" variant="filled" size="small"/>
                    <TextField value={photo} onChange={(e) => setPhoto(e.target.value)} sx={{width:'100%', mt:2}} id="photo" label="Photo" variant="filled" size="small"/>
                    {/* action form */}
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => {

                        const person = {
                            name: name,
                            email: email,
                            phone: phone,
                            photo: photo
                        }
                        
                        props(person)
                    }} >Save Contact</Button>
                </CardActions>
            </Card>
        </>
    );
}

export default ContactForm;