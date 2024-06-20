// src/components/ContactList.js
import React, { useEffect, useState } from 'react';

const ContactList = ({ selectedCategory }) => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await fetch('/api/contacts');
                const data = await response.json();
                setContacts(data);
            } catch (error) {
                console.error('Error al obtener los contactos:', error);
            }
        };
        fetchContacts();
    }, []);

    const filteredContacts = contacts.filter(contact => contact.category === selectedCategory);

    return (
        <div>
            <h2>Contactos ({selectedCategory})</h2>
            <ul>
                {filteredContacts.map(contact => (
                    <li key={contact._id}>
                        <p>{contact.email}</p>
                        <p>{contact.comment}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;
