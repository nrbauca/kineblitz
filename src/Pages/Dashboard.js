// import React from 'react';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore, logout } from '../FirebaseSetup/firebase';
import { query, collection, getDocs, where } from 'firebase/firestore';

export default function Dashboard() {
    const [user, loading, error ] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const fetchUserName = async () => {
        try {
            const q = query(collection(firestore, "professionals"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();

            setName(data.name);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/loginauth");

        fetchUserName();
    }, [user, loading]);
        
    return (
        <div>
            <main className="dashboard">
                <div className="dashboard-container">
                    <div className="dashboard-welcome">
                        <h1 className="dashboard-header">Welcome, <span className="dashboard-user">{name}</span>!</h1>
                        <p className="dashboard-instruction">
                            Please select a database to access...
                        </p>
                    </div>
                    <div className="dashboard-options">
                        <button type="submit" className="gen-button" id>User 1</button>
                        <button type="submit" className="gen-button" id>User 2</button>
                        <button type="submit" className="gen-button" id>User 3</button>
                    </div>
                    <div className="pt-5">
                    <button onClick={logout} className="gen-button px-2 py-2 rounded-lg bg-[#F5C4C4]">Sign Out (Temp)</button>
                    </div>
                </div>
            </main>
        </div>
    );
}
