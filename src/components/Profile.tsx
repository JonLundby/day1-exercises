
type ProfileProps = {
    name: string;
    email: string;
    isActive: boolean;
    singleLine?: boolean;
}

export default function Profile({name, email, isActive, singleLine}: ProfileProps) {
    
    {
        if (singleLine) return (
            <p>{name}, {email}, { isActive ? "Aktive" : "Ikke aktiv" }</p>
    )
    }

    return (
        <>
            <p>{name}</p>
            <p>{email}</p>
            <p>{isActive ? "Aktive" : "Ikke aktiv"}</p>
        </>
    );
}