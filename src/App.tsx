import React from "react";
import "./App.css";
import { UseState } from "./hooks/UseState";
import { UseEffect } from "./hooks/UseEffect";
import { UseContext } from "./hooks/UseContext";

function App() {
    return (
        <div className="App">
            {/* <UseState /> */}
            {/* <UseEffect /> */}
            <UseContext />
        </div>
    );
}

export default App;
