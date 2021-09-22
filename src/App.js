import React,{useState} from 'react';
import ContactsForm from './ContactsForm';
import ContactList from './ContactList';



function App() {
  const [contacts, setContacts] = useState([]);

  function addContact(user) {
       setContacts([...contacts, user]);
  }

  function editUser(newDetails , userId){
       const u = contacts.map((user) => {
         if (userId === user.id) {
           return newDetails;
         } else{
           return user;
         }
       });
       setContacts(u);
  }

  function deleteUser(userId) {
    //loops through the users state and removes the user with the same id
    const filteredUsers = contacts.filter((user) => {
      return userId !== user.id;
    });

    //sets the users state to the filtered users array
    setContacts(filteredUsers);
  }

  return (
    <>
    
    
      
        <ContactsForm addContact={addContact}/>   
        <ContactList contacts={contacts} editUser={editUser} deleteUser={deleteUser}/>
        
      
    

    </>
  );
}

export default App;