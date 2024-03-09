import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

function ContactList({ contacts, onDel }) {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact contactInfo={contact} onDel={onDel} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
