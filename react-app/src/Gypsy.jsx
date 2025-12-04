import { useState, useEffect } from "react";
import supabase from "./utils/supabase";

export default function Gypsy() {
    const [gypsy, setGypsy] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await supabase.from("students").select();
            const data = await res.json();
            setGypsy(data);
        })().catch(console.error).finally(() => console.log('fetching gypsy complete'));
    }, []);

    return (
        <>
            {JSON.stringify(gypsy)}
        </>
    )
}