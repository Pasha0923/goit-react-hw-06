import { useEffect, useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import "./App.css";
import { nanoid } from "nanoid";

const contactsData = [
  { id: "id-1", userName: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", userName: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", userName: "Eden Clements", number: "645-17-79" },
  { id: "id-4", userName: "Annie Copeland", number: "227-91-26" },
];

function App() {
  // const [contacts, setContacts] = useState(contactsData);
  const [contacts, setContacts] = useState(() => {
    // Зчитуємо дані с локального сховища
    const stringifiedContacts = localStorage.getItem("contacts");
    if (!stringifiedContacts) return contactsData;
    const parsedContacts = JSON.parse(stringifiedContacts);
    return parsedContacts;
  });
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  //  початкове значення стану фільтру пустий рядок
  const [filter, setFilter] = useState("");
  // функція яка буде оновлювати state під час кожної події onChange (інпут буде оновлюватися)
  const onFilter = (e) => {
    if (e.target.name === "searchName") setFilter(e.target.value);
  };
  //Функція для фільтрації списку контактів за ім'ям
  const searchContacts = contacts.filter((contact) =>
    contact.userName.toLowerCase().includes(filter.toLowerCase())
  );

  //  функція яка описує додавання якихось нових об'єктів (поштової скриньки) до вже існуючого масиву в state
  const onAddNewContacts = (Data) => {
    const finalData = {
      ...Data,
      id: nanoid(),
    };
    setContacts((prevState) => [...prevState, finalData]); // ✅
  };
  // функція яка описує видалення об'єктів () з існуючого масиву state
  const handleDelete = (contactId) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== contactId)
    );
  };
  return (
    <div>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddNewContacts={onAddNewContacts} />
        <SearchBox searchName={filter} onFilter={onFilter} />
        {/* передамо кастомну колбек функцію searchContacts через пропс contacts */}
        <ContactList contacts={searchContacts} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
