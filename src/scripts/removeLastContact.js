import { readFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const fileContent = await readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(fileContent || '[]');

    if (contacts.length === 0) {
      console.log('Контактів немає, нічого видаляти.');
      return;
    }

    contacts.pop();
    await writeContacts(contacts);

    console.log('Останній контакт успішно видалено.');
  } catch (error) {
    console.error(error.message);
  }
};

removeLastContact();
