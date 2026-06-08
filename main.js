// Il terzo modulo JS importerà sia l'oggetto del primo modulo che le due funzioni del secondo e lancerà le due funzioni in sequenza sull'oggetto stampando in console il risultato . 
import student from "./student.js";
import getContacts, { addContact } from "./contact.js";

const nameList = ['Ivanna', 'AnnaLisa', 'Carlo', 'Roberto', 'Kevin', 'Vlad'];

const updatedStudent = addContact(student, nameList);
console.log(updatedStudent);

getContacts(updatedStudent);

console.log(getContacts(updatedStudent));
