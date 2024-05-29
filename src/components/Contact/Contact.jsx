import { RiUser6Fill } from "react-icons/ri";
import { MdPhone } from "react-icons/md";
import css from "./Contact.module.css";

const Contact = ({ contact: { id, name, number }, onDeleteContact }) => {
  return (
    <div className={css.contactContainer}>
      <div className={css.contactItem}>
        <RiUser6Fill />
        <p className={css.contactName}>{name}</p>
      </div>
      <div className={css.contactItem}>
        <MdPhone />
        <p>{number}</p>
      </div>

      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
