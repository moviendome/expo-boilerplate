import uuidv4 from "uuid";
import { createStore, action, persist } from "easy-peasy";
import storage from "./storage";

const store = createStore(
  persist(
    {
      expenses: [],
      addExpense: action((state, payload) => {
        state.expenses.push({
          id: uuidv4(),
          description: payload.description,
          amount: payload.amount,
        });
      }),
    },
    {
      storage: storage,
    }
  )
);

export default store;
