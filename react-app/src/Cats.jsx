import { useState, useEffect, use } from "react";

export default function Cats() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch('/api/neon-cats');
            const data = await res.json();
            setCats(data);
        })().catch(console.error).finally(() => console.log('fetching cats complete'));
    }, []);

    return (
        <>
            {JSON.stringify(cats)}
        </>
    )
}