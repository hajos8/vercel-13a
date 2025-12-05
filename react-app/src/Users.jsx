import { useState, useEffect } from "react";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const usersCol = collection(db, 'user_credentials');


export default function Users() {
    const [users, setUser] = useState([]);

    useEffect(() => {
        (async function () {
            if (!firebaseConfig.apiKey) { return };
            if (!firebaseConfig.authDomain) { return };
            if (!firebaseConfig.projectId) { return }
            if (!firebaseConfig.storageBucket) { return }
            if (!firebaseConfig.messagingSenderId) { return }
            if (!firebaseConfig.appId) { return }

            console.log(usersCol)

            const userSnapshot = await getDocs(usersCol);

            console.log(userSnapshot)

            const userList = userSnapshot.docs.map(doc => doc.data());

            console.log(userList);

            setUser(userList);
        })();
    }, []);

    return (
        <>
            {JSON.stringify(users)}
        </>
    )
}