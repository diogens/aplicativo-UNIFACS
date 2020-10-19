import React from "react";

import Main from "./src/";
import { AppContext } from "./src/context";

export default function App() {
  return (
    <AppContext>
      <Main />
    </AppContext>
  );
}
