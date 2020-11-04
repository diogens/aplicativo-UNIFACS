import React from "react";

export const Context = React.createContext();

export const AppContext = ({ children }) => {
  const [isDark, setIsDark] = React.useState(true);
  const [name, setName] = React.useState("desligado");
  return (
    <Context.Provider value={{ name, setName, isDark, setIsDark }}>
      {children}
    </Context.Provider>
  );
};
