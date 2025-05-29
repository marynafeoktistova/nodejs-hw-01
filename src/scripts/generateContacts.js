import { readFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const fileContent = await readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(fileContent || '[]');

    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );

    const updatedContacts = [...contacts, ...newContacts];
    await writeContacts(updatedContacts);
    console.log(`${number} нових контактів успішно додано.`);
  } catch (error) {
    console.error('Помилка під час генерації контактів:', error.message);
  }
};

generateContacts(5);
