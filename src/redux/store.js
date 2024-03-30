import { configureStore } from "@reduxjs/toolkit";
import { detailsContactsReducer } from "./contactsSlice";
import { detailsFiltersReducer } from "./filtersSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactDetailsConfig = {
  key: "contactDetails",
  storage,
  whitelist: ["items"],
};

export const store = configureStore({
  reducer: {
    detailsContacts: persistReducer(
      contactDetailsConfig,
      detailsContactsReducer
    ),
    detailsFilters: detailsFiltersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
// Глобальний state нашого додатку
