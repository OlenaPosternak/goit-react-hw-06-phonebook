import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
  reducers: {
    addContacts: {
      reducer(state, action) {
        const contactName = [];

        for (const contact of state.contacts) {
          contactName.push(contact.name);
        }

        if (contactName.includes(action.payload.name)) {
          alert(`${action.payload.name} is already in contacts list`);
          return;
        }

        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContacts(state, action) {
      state.contacts.splice(action.payload, 1);
    },
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

// Генератори екшенів
export const { addContacts, deleteContacts, filterContacts } =
  contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
