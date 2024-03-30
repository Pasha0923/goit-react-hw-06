import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts, selectNameFilter } from "../../selectors/selectors";

const ContactList = () => {
  // Отримуємо посилання на функцію відправки екшенів за допомогою хука useSelector
  const selectedContacts = useSelector(selectContacts);
  const filters = useSelector(selectNameFilter);

  //Функція для фільтрації списку контактів за ім'ям
  const searchContacts = selectedContacts.filter((contact) =>
    contact.userName.toLowerCase().includes(filters.toLowerCase())
  );
  return (
    <ul className={css.contactsList}>
      {searchContacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            id={contact.id}
            userName={contact.userName}
            number={contact.number}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
