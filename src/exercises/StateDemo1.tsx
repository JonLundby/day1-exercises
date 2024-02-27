import { BaseProps } from "../types";
import { useState } from "react";

//let currentCount = 0; // NO-GO

export default function StateDemo1({ title }: BaseProps) {
    const [count, setCount] = useState(0);
    // hvis man vil holde på det samme count når der navigers rundt på siden så bør count gemmes i parent component
    // med current count løses problemet men komponentet er ikke længere stateless
    //currentCount = count;

    return (
        <>
            <h2>{title}</h2>
            <button
                onClick={() => {
                    setCount((prevCount) => prevCount + 1);
                }}
            >
                Increment
            </button>
            <button
                onClick={() => {
                    setCount((prevCount) => prevCount - 1);
                }}
            >
                {" "}
                Decrement
            </button>
            <h3>{count}</h3>
        </>
    );
}
