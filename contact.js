// Il secondo modulo JS dovrà esportare due funzioni: la prima funzione accetta due parametri (un oggetto e poi una lista di nomi) e restituisce lo stesso oggetto ma con una nuova proprietà chiamata contatti che sarà valorizzata con la lista di nomi. La seconda funzione accetta come parametro i contatti di un oggetto (ricordate il destructuring) e restituisce una stringa con l'elenco dei contatti.
import student from "./student.js";

const nameList = ['Ivanna', 'AnnaLisa', 'Carlo','Roberto','Kevin','Vlad'];

function addContact(student,nameList){
    return {
    ... student,
    contacts: nameList,
    };
}
 console.log(addContact(student,nameList));
 
const updatedStudent = addContact(student, nameList);

function getContacts({ contacts }) {
    return contacts.join(', '); 
}

getContacts(updatedStudent);

export { addContact };
export default getContacts;