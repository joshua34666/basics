import React, { useState, useEffect } from 'react';
// import { uuid } from "uuidv4"
import './App.css';
import Header from "./Header"
import AddContact from "./AddContact"
import  ContactList from "./ContactList"
// import Navbar from './Navbar';

function App() {
  // <Navbar />
  const LOCAL_STORAGE_KEY =  "contacts"
  const [contacts, setContacts] = useState([])

  const addContactHandler = (contact) => {
    console.log(contact)
    // setContacts([...contacts, {id: uuid(), ...contacts }, contact])
    setContacts([...contacts, contact])
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retrieveContacts) setContacts(retrieveContacts)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)) 
  }, [contacts])

  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;