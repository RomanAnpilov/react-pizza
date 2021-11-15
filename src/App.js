import React from "react";
import {/* Home , */ Cart} from "./pages";
import {Header} from "./components";


function App() {
  return (
    <div className="wrapper clear">
      <Header />
      <div className="content">
        {/* <Home /> */}
        <Cart />
      </div>
    </div>
  );
}

export default App;
