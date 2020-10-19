import React from "react";

export const Context = React.createContext();

export const AppContext = ({ children }) => {
  const [isDark, setIsDark] = React.useState(false);
  const [name, setName] = React.useState("desligado");
  return (
    <Context.Provider value={{ name, setName, isDark, setIsDark }}>
      {children}
    </Context.Provider>
  );
};
