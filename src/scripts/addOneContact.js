import { readFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const fileContent = await readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(fileContent || '[]');

    const newContact = createFakeContact();
    const updatedContacts = [...contacts, newContact];

    await writeContacts(updatedContacts);

    console.log('Один новий контакт успішно додано.');
  } catch (error) {
    console.error('Помилка при додаванні контакту:', error.message);
  }
};

addOneContact();
