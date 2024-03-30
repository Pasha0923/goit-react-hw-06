import { createSlice, nanoid } from "@reduxjs/toolkit";
const items = [
  { id: "id-1", userName: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", userName: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", userName: "Eden Clements", number: "645-17-79" },
  { id: "id-4", userName: "Annie Copeland", number: "227-91-26" },
];
const INITIAL_STATE_CONTACTS = {
  items,
};

// Функція createSlice() генерує Action creator і reducerы одночасно
const detailsContactsSlice = createSlice({
  name: "detailsContacts",
  initialState: INITIAL_STATE_CONTACTS,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(userName, number) {
        return {
          payload: {
            id: nanoid(),
            userName,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

// експорт Генераторів Action Creator'ів. Вони дають команду до виконная блоку коду редьюсерів
export const { addContact, deleteContact } = detailsContactsSlice.actions;
// Редюсер слайсу
export const detailsContactsReducer = detailsContactsSlice.reducer;
