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

console.log(listContacts());

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}
