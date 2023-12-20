import React from 'react';
import { ContactForm } from './contactForm/ContactForm'
import { Section } from './section/Section';
import { Filter } from './filter/Filter';
import { ContactList } from './contactList/ContactList';
import { useSelector } from 'react-redux';

const App = () => {

  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);

  // useEffect(() => {
  //   const contacts = localStorage.getItem("contacts");
  //   const parseContacts = JSON.parse(contacts);

  //   if (parseContacts) {
  //     setContacts(parseContacts);
  //   }
  // }, []);

  const contactFilter = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  };

  const checkName = (name) => {
  return contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
  };


  return (
    <>
      <Section title='Phonebook'>
        <ContactForm
          checkName={checkName}
        />
      </Section>
      <Section title='Contacts'>
        <Filter />
        <ContactList
          contactFilter={contactFilter}
        />
      </Section>
    </>
  );
}

export default App;
