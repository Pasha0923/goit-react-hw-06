import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.contactsList}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            id={contact.id}
            userName={contact.userName}
            number={contact.number}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
