import React from "react";
import css from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/slice";
import { nanoid } from "nanoid";

export const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  
  const contactFilter = () => {
    console.log('filter', filter);
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  };

  return (
    <ul className={css.contact_list}>
      {contactFilter().map(({ id, name, number }) => (
        <li className={css.contact_item} key={nanoid()}>
          {name}: {number}
          <button
            type="button"
            className={css.delete_button}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

