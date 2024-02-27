import { useState } from "react";
import "./App.css";
import Propsdemo from "./exercises/PropsDemo";
import ListDemo from "./exercises/ListDemo";
import EventDemo from "./exercises/EventDemo";
import FormUncontrolled from "./exercises/FormUncontrolled";
import StateDemo1 from "./exercises/StateDemo1";
import StateDemo2 from "./exercises/StateDemo2";
import StateDemo3 from "./exercises/StateDemo3";
import UseEffect from "./exercises/UseEffect";
import FetchDemo from "./exercises/FetchDemo";

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
                        {selectedView == "formuncontrolled1" ? <FormUncontrolled title="Form uncontrolled" /> : null}
                        {selectedView == "statedemo1" ? <StateDemo1 title="State Demo 1" /> : null}
                        {selectedView == "statedemo2" ? <StateDemo2 title="State Demo 2" /> : null}
                        {selectedView == "statedemo3" ? <StateDemo3 title="State Demo 3" /> : null}
                        {selectedView == "useeffect" ? <UseEffect title="Use Effect Demo" /> : null}
                        {selectedView == "fetchdemo" ? <FetchDemo title="Fetch Demo" /> : null}
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
            <button className="btn-w100" onClick={() => handleSelected("formuncontrolled1")}>
                Form uncontrolled demo
            </button>
            <button className="btn-w100" onClick={() => handleSelected("statedemo1")}>
                State demo 1
            </button>
            <button className="btn-w100" onClick={() => handleSelected("statedemo2")}>
                State demo 2
            </button>
            <button className="btn-w100" onClick={() => handleSelected("statedemo3")}>
                State demo 3
            </button>
            <button className="btn-w100" onClick={() => handleSelected("useeffect")}>
                Use Effect
            </button>
            <button className="btn-w100" onClick={() => handleSelected("fetchdemo")}>
                Fetch Effect
            </button>
        </>
    );
};
