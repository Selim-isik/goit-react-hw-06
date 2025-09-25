import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import styles from "./ContactsForm.module.css";
import { useState } from "react";

export default function ContactsForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) return;
    dispatch(addContact(name, number));
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="İsim"
      />
      <input
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Telefon"
      />
      <button type="submit">Ekle</button>
    </form>
  );
}
