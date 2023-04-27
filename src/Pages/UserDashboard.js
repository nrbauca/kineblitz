import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore, logout } from '../FirebaseSetup/firebase';
import { query, collection, getDocs, where } from 'firebase/firestore';

export default function UserDashboard() {
    const [user, loading, error ] = useAuthState(auth);
    const [name, setName] = useState("");
    const [birthday, setBirthday] = useState("");
    const [age, setAge] = useState("");
    const [condition, setCondition] = useState("");
    const navigate = useNavigate();

    const fetchUserName = async () => {
        try {
            const q = query(collection(firestore, "patients"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();

            setName(data.name);
            setBirthday(data.birthday);
            setAge(data.age);
            setCondition(data.condition);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/login");

        fetchUserName();
    }, [user, loading]);
    
    return (
        <div>
            <main className="user-dashboard">
                <div className="user-container">
                <div className="user-information row">
                    <img src alt="" className="user-pic" />
                    <div className="user-details">
                    <p className="user-name">{name}</p>
                    <p className="birth-date">Birth Date: {birthday}</p>
                    <p className="age">Age: {age}</p>
                    <p className="id-num">ID No.:</p>
                    <p className="condition">Condition: {condition}</p>
                    <button onClick={logout} className="gen-button px-2 py-2 rounded-lg bg-[#F5C4C4]">Sign Out (Temp)</button>
                    </div>
                </div>
                <h3 className="center">Records</h3>
                <div className="user-records row">
                    <Link to="/record"><button type="submit" className="gen-button" id>mm/dd/yy</button></Link>
                    <Link to="/record"><button type="submit" className="gen-button" id>mm/dd/yy</button></Link>
                    <Link to="/record"><button type="submit" className="gen-button" id>mm/dd/yy</button></Link>
                </div>
                </div>
            </main>
        </div>
    );
}
