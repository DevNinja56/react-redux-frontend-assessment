import { createStore, combineReducers } from "redux";

// Import the necessary functions from the redux library

// Define the menuReducer function
const menuReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_MENU":
      return action.payload;
    default:
      return state;
  }
};

// Define the appReducer function
const appReducer = (state = null, action) => {
  switch (action.type) {
    case "LOAD_APP":
      return action.payload;
    default:
      return state;
  }
};

// Define the initial state for the user data
const initialState = {
  userData: {
    name: "",
    email: "",
    step: 1,
  },
};

// Define the userReducer function
const userReducer = (state = initialState.userData, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return { ...state, ...action.payload };
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };
    case "RESET_USER":
      return initialState.userData;
    default:
      return state;
  }
};

// Combine the menuReducer and appReducer into a single rootReducer
const rootReducer = combineReducers({
  menu: menuReducer,
  app: appReducer,
  user: userReducer,
});

// Create the redux store using the rootReducer
const store = createStore(rootReducer);

// Export the store as the default export of this module
export default store;
