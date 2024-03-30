import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";

// const contactsData = [
//   { id: "id-1", userName: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", userName: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", userName: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", userName: "Annie Copeland", number: "227-91-26" },
// ];

function App() {
  return (
    <div>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </div>
  );
}

export default App;
