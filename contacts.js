const fs = require("fs").promises;
const { readFile } = require("fs");
const { dirname } = require("path");
const path = require("path");

const contactsPath = path.resolve(__dirname, "db", "contacts.json");
console.log(contactsPath);

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const list = JSON.parse(data);

    return console.table(list);
  } catch (error) {
    console.error(error.messege);
  }
}

async function getContactById(contactId) {
  try {
    const data = fs.readFile(contactsPath, utf8);
    const contacts = JSON.parse(data);
    const findContactsById = contacts.filter(
      (contact) => contact.id === Number(contactId)
    );
    return console.table(findContactsById);
  } catch (error) {
    console.error(error.messege);
  }
}
console.table(getContactById());

async function removeContact(contactId) {
  try {
    const data = await fs.readFile(contactsPath, utf8);
    const contacts = JSON.parse(data);
    const deleteContact = contacts.find(contact => contact.id === contactId)
  }
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}
