import React,{useState} from 'react';
import ContactsForm from './ContactsForm';
import ContactList from './ContactList';
import { Container, Row , Col} from 'react-bootstrap';



function App() {
  const [contacts, setContacts] = useState([]);

  
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
    const filteredUsers = contacts.filter((user) => {
      return userId !== user.id;
    });

    setContacts(filteredUsers);
  }
  return (
    <>
    <Container>
      <Row>
        <Col md={4} className="bgOFcol4">
        <ContactsForm/>
        </Col>
        <Col>    
        <ContactList  deleteUser={deleteUser} editUser={editUser} />
        </Col>
      </Row>
    </Container>

    </>
  );
}

export default App;