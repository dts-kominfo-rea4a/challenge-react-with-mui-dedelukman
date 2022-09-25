import { useState } from 'react';
import './App.css';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Grid from '@mui/material/Grid';
import Header from './components/Header';
import List from '@mui/material/List';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';

const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [contacts, setContacts] = useState(contactsJSON);

  const addContact = (data) => {
    setContacts([...contacts, data])
  }

  return (
    <div className="App">
      <Header />     
      <Grid container spacing={2} mt={4}>
        <Grid  xs={6} p={4}>
          <ContactForm onSubmit={addContact}/>
        </Grid>
        <Grid  xs={6} p={4}>
          <List sx={{ width: '100%',  bgcolor: 'background.paper' }}>
              {
                contacts.map((item) => (
                  <Contact data={item} />
                ))
              }
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
