// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useReducer } from 'react';
import { ContactReducers, CONTACT_STATE, initialState } from '../reducers/ContactReducer';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ props }) => {

    const dataContact = initialState.data

    useEffect(() => {
        //console.log(props)
    }, [props])

    // Contact berisi foto, nama, telepon, dan email
    return (
        <>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>

                {
                    props == undefined ? (
                        dataContact.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div>
                                    { index == 3 ?  <img src={item.photo} alt={item.name} /> : <div></div> }
                                    </div>
                                    <p>{item.name}</p>
                                    <p>{item.email}</p>
                                    <p>{item.phone}</p>
                                </div>
                            )
                        })
                    ) : (
                        props.map((item, index) => {
                            return (
                                <div key={index}>
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src={item.photo} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={item.name}
                                            secondary={
                                                <>
                                                    <Typography
                                                        sx={{ display: 'inline' }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                        id="email"
                                                    >
                                                        {item.email}
                                                    </Typography>
                                                    <Typography
                                                        sx={{ display: 'block' }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                        id="phone"
                                                    >
                                                        {item.phone}
                                                    </Typography>
                                                </>
                                            }
                                        />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </div>
                            )
                        })
                    )
                }

            </List>
        </>
    );
};

export default Contact;
