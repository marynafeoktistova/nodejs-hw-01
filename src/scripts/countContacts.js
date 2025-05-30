import { readFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const fileContent = await readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(fileContent || '[]');

    console.log(`Кількість контактів: ${contacts.length}`);
    return contacts.length;
  } catch (error) {
    console.error(error.message);
    return 0;
  }
};

console.log(await countContacts());
