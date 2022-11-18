import {
  ListOfContact,
  Container,
  ContactItem,
  Button,
} from './ContactList.module';

import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';
import { getFilter, getContacts } from '../../redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  // const visibleContacts = contacts;
  // console.log(visibleContacts)

  // visibleContacts = contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter));

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  return (
    <Container>
      <h2>My contacts</h2>
      {getVisibleContacts().map(contact => (
        <ListOfContact key={contact.id}>
          <ContactItem>
            {contact.name}: {contact.number}{' '}
            <Button onClick={() => dispatch(deleteContacts(contact.id))}>
              Delete
            </Button>
          </ContactItem>
        </ListOfContact>
      ))}
    </Container>
  );
};
