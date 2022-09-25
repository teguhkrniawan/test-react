import { Container, Grid } from '@mui/material';
import { useReducer, useEffect } from 'react';
import './App.css';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import { contactReducer, initialState } from './reducers/ContactReducer';

// Uncomment untuk memuat daftar kontak
// import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm


  const [state, dispatch] = useReducer(contactReducer, initialState)

  const contactFn = (person) => {
    dispatch({
        type: 'add_person',
        person: person
    })
  }

  //console.log('contact list: ', state.data)
  
  return (
    <div className="App">
      <Header />
      <Container>
        <Grid container spacing={1} columnSpacing={{md:3, xs:1}}>
          <Grid item xs={12} md={4}>
            <ContactForm props={contactFn} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Contact props={state.data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
