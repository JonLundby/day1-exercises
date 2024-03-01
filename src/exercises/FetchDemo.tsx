import { useEffect, useState } from "react";
import { BaseProps } from "../types";
const SERVER_URL = "http://localhost:8000/users";
const DELAY = 500;

type User = { id: number; name: string };

//Utility function to fetch a user from the server
function fetchUser(userId: number, options?: object): Promise<User> {
    return fetch(`${SERVER_URL}/${userId}?delay=${DELAY}`, options).then((res) => res.json());
}

export default function FetchDemo1({ title }: BaseProps) {
    const [userId] = useState(1);
    // const [userId, setUserId] = useState(1);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    //Use this to fetch the next user when the "Next User" button is clicked
    //Make sure you understand why we don't need useEffect here
    const fetchNextUser = async () => {
        const nextUserId = user?.id != null ? (user.id + 1 <= 15 ? user.id + 1 : 1) : 1;
        setLoading(true);
        const theUser = await fetchUser(nextUserId);
        console.log(theUser);
        setLoading(false);
        setUser(theUser);
    };


    //Call fetchUser(..) immediately when the component is mounted
    // fetchUser(userId).then((response) => {
    //     setUser(response);
    //     console.log(response);
    // });

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        try {
            fetchUser(userId, { signal }).then((response) => {
                // signal is used to abort the fetch request if the component is unmounted before the fetch is done (e.g. if the user navigates away)
                setUser(response); // initally user is null, so this will be the first time the user is set
                console.log(response);
                setLoading(false);
            });
        } catch (error) {
            console.log(error);
        }

        return () => controller.abort(); // clean up function to abort the fetch request if the component is unmounted before the fetch is done (e.g. if the user navigates away)
    }, [userId]); // dependency array, so it only runs once

    return (
        <>
            <h2>{title}</h2>
            {user && JSON.stringify(user)}
            <br />
            <button onClick={fetchNextUser}>Next User</button>
            {loading && <p>Loading...</p>} {/* if loading is true, show "Loading..."*/}
        </>
    );
}
