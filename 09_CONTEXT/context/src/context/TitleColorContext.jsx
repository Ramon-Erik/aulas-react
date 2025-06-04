import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const TitleColorReducer = (state, action) => {
  // console.log("Title Color Provider", state, action);
  switch (action.type) {
    case "RED":
      return {...state, color: "red"}
    case "BLUE":
      return {...state, color: "blue"}
    default:
      return {...state}
  }
};

export const TitleColorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TitleColorReducer, { color: "purple" });

  return (
    <TitleColorContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TitleColorContext.Provider>
  );
};
