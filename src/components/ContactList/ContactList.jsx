import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.component}>
      {contacts.map((contact) => {
        return (
          <li className={css.contactList} key={contact.id}>
            <Contact contact={contact} onDeleteContact={onDeleteContact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
