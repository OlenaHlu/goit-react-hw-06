import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useEffect, useState } from "react";
import css from "./App.module.css";

function App() {
  const initialContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [contacts, setContacts] = useState(initialContacts);

  const [search, setSearch] = useState("");
  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search)
  );
  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      const renewContacts = [...prevContacts, newContact];
      localStorage.setItem("contacts", JSON.stringify(renewContacts));
      return renewContacts;
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      const renewContacts = prevContacts.filter(
        (contact) => contact.id !== contactId
      );
      localStorage.setItem("contacts", JSON.stringify(renewContacts));
      return renewContacts;
    });
  };

  useEffect(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  return (
    <div className={css.mainContainer}>
      <h1 className={css.mainTitle}>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={filterContacts} onDeleteContact={deleteContact} />
    </div>
  );
}

export default App;
