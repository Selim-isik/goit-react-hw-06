import ContactsForm from "../ContactsForm/ContactsForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";

function App() {
  return (
    <div>
      <h1>İletişim Kitabı</h1>
      <ContactsForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
export default App;
