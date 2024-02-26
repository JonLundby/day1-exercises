import { useState } from "react";
import "./App.css";
import Propsdemo from "./exercises/PropsDemo";
import ListDemo from "./exercises/ListDemo";
import EventDemo from "./exercises/EventDemo";

export default function App() {
    const [selectedView, setSelectedView] = useState("info");

    function handleSelected(selected: string) {
        setSelectedView(selected);
    }

    return (
        <>
            <div className="outer-div-style">
                <div className="header-style">
                    <h2>React Exercises</h2>
                </div>
                <div style={{ display: "flex" }}>
                    <div style={{ flex: 1, padding: 10 }}>
                        <Buttons onSelected={handleSelected} />
                    </div>
                    <div className="exercise-style">
                        {selectedView == "info" ? <p>All exercises for React day-1</p> : null}
                        {selectedView == "props1" ? <Propsdemo title="Props Demo" /> : null}
                        {selectedView == "listdemo1" ? <ListDemo title="List Demo" /> : null}
                        {selectedView == "eventdemo1" ? <EventDemo title="Event Demo" /> : null}
                        {/**Add the exercise components you create for each exercise using the key you used for the matching button  */}
                    </div>
                </div>
            </div>
        </>
    );
}

type ButtonProps = {
    onSelected: (selected: string) => void;
};

const Buttons = (props: ButtonProps) => {
    const { onSelected: handleSelected, btnStyle: btnStyle } = props;
    return (
        <>
            <button className="btn-w100" onClick={() => handleSelected("info")}>
                Info
            </button>
            {/* Add a new button for each of the exercises you complete */}
            <button className="btn-w100" onClick={() => handleSelected("props1")}>
                Props demo1
            </button>
            <button className="btn-w100" onClick={() => handleSelected("listdemo1")}>
                List demo
            </button>
            <button className="btn-w100" onClick={() => handleSelected("eventdemo1")}>
                Event demo
            </button>
        </>
    );
};
