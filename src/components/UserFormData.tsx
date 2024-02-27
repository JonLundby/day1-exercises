import { BaseProps } from "../types";
import { FormEvent } from "react";
import { User } from "../data/data";

type UserFormProps = BaseProps & {
    onSubmitUser: (user: User) => void;
};
export default function UserForm({ title, onSubmitUser }: UserFormProps) {
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formEntries = Object.fromEntries(new FormData(form));
        const newUser: User = {
            id: -1,
            name: formEntries.name as string,
            email: formEntries.email as string,
            isActive: formEntries.isActive === "on",
        };
        onSubmitUser(newUser);
    };

    return (
        <>
            <h2>{title}</h2>
            <form onSubmit={onSubmit}>
                First Name: <input name="name" />
                Email: <input name="email" />
                Active: <input type="checkbox" name="isActive" />
                <button type="submit">Add User</button>
            </form>
        </>
    );
}
