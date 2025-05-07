import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const TitleColorReducer = (state, action) => {
  // switch
}

export const TitleColorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TitleColorReducer, {color: '#009fff'})
  console.log("Title Color Provider", state);
  
  return <TitleColorContext.Provider value={{...state}}>{children}</TitleColorContext.Provider>;
};
