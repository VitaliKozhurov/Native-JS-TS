import React from "react";
import "./App.css";
import { UseState } from "./hooks/UseState";
import { UseEffect } from "./hooks/UseEffect";
import { UseContext } from "./hooks/UseContext";
import { UseReducer } from "./hooks/UseReducer";
import { UseCallback } from "./hooks/UseCallback";
import { UseMemo } from "./hooks/UseMemo";
import { UseRef } from "./hooks/UseRef";
import { UseRef_2 } from "./hooks/UseRef_2";

function App() {
    return (
        <div className="App">
            {/* <UseState /> */}
            {/* <UseEffect /> */}
            {/* <UseContext /> */}
            {/* <UseReducer /> */}
            {/* <UseCallback /> */}
            {/* <UseMemo /> */}
            {/* <UseRef /> */}
            <UseRef_2 />
        </div>
    );
}

export default App;
