import React from "react";
import "./App.css";
import { UseState } from "./hooks/UseState";
import { UseEffect } from "./hooks/UseEffect";
import { UseContext } from "./hooks/UseContext";
import { UseReducer } from "./hooks/UseReducer";
import { UseCallback } from "./hooks/UseCallback";

function App() {
    return (
        <div className="App">
            {/* <UseState /> */}
            {/* <UseEffect /> */}
            {/* <UseContext /> */}
            {/* <UseReducer /> */}
            <UseCallback />
        </div>
    );
}

export default App;
