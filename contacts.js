const fs = require("fs").promises;
const { errorMonitor } = require("events");
const { readFile } = require("fs");
const { dirname } = require("path");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.resolve(__dirname, "db", "contacts.json");
console.log(contactsPath);

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const list = JSON.parse(data);

    return list;
  } catch (error) {
    console.error(error.messege);
  }
}

console.table(listContacts());

async function getContactById(contactId) {
  try {
    const data = await listContacts();
    const findContactsById = data.find((contact) => contact.id === contactId);
    return findContactsById;
  } catch (error) {
    console.error(error.messege);
  }
}
console.table(getContactById());

async function removeContact(contactId) {
  try {
    const data = await listContacts();
    // const contacts = JSON.parse(data);
    const deleteContact = data.findIndex((contact) => contact.id !== contactId);

    const result = await fs.writeFile(
      contactsPath,
      JSON.stringify(contactsPath, JSON.stringify(deleteContact, null, 2))
    );
    return result;
  } catch {
    console.log(error.messege);
  }
}

async function addContact(name, email, phone) {
  const id = nanoid();
  const data = await fs.readFile(contactsPath, utf8);
  const contacts = JSON.parse(data);

  contacts.push({ id, name, email, phone });
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
}
