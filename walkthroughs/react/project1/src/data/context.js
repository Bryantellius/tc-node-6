import { createContext, useState } from "react";

export const AppContext = createContext({});

const AppProvider = (props) => {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <AppContext.Provider value={{ isOnline, setIsOnline }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
