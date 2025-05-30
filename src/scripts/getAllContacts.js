import { readFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    const fileContent = await readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(fileContent || '[]');

    console.log('Усі контакти:');
    console.table(contacts);

    return contacts;
  } catch (error) {
    console.error(error.message);
    return [];
  }
};

console.log(await getAllContacts());
