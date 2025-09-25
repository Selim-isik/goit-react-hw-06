import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectContacts) || [];
  const filter = (useSelector(selectNameFilter) || "").toLowerCase();

  const filteredContacts = contacts.filter((c) =>
    (c.name || "").toLowerCase().includes(filter)
  );

  return (
    <ul className={styles.list}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
