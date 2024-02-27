import { useState, ChangeEvent } from "react";
import { BaseProps } from "../types";
import { User } from "../data/data";

export default function StateDemo2({ title }: BaseProps) {
    const [user, setUser] = useState<User>({
        id: 1,
        name: "Max Power",
        email: "max.power@email.com",
        isActive: true,
    });

    function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
        // user.name = e.target.value;
        // setUser(prev => ({ ...prev, name: e.target.value,  })); // vigtigt at forstå! (prev) er en klon der pakkes ud og overskrives
        // email virker ikke, kommer i næste opgave
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value })); // vigtigt at forstå! (prev) er en klon der pakkes ud og overskrives
    }                                                  // prev er previoues state af inputs elementerne. Så snart der indtastes(onchange) bliver 

    return (
        <>
            <h2>{title}</h2>
            <div>
                <p>ID: {user.id}</p>{" "}
            </div>
            First Name: <input name="name" value={user.name} onChange={handleNameChange} />
            Email: <input name="email" value={user.email} onChange={handleNameChange} />
            Active: <input type="checkbox" checked={user.isActive} name="isActive" />
            <p style={{ marginTop: 15 }}> {JSON.stringify(user)} </p>
        </>
    );
}
