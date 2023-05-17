import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore, logout } from '../FirebaseSetup/firebase';
import { query, collection, getDocs, where } from 'firebase/firestore';
import blankpic from '../Images/BlankPic.png'

export default function Dashboard() {
    const [user, loading, error ] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const fetchUserName = async () => {
        try {
            const q = query(collection(firestore, "physicians"), where("uid", "==", user?.uid));
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
                            Please Select a Profile to Access Patient's Muscle Activity Records...
                        </p>
                    </div>

                    {/* PATIENT'S PROFILE BUTTON */}
                    <div className="user-prof">

                        <Link to="/recordauth">
                        <button type="submit" className=" dash-information row gen-button">
                            <img src={blankpic} alt="" className="dash-pic" />
                            <div className="dash-details">
                                <p className="dash-name">Juan Dela Cruz</p>
                                <p className="dash-birth-date">Birth Date: 09-02-2015</p>
                                <p className="dash-age">Age: 8</p>
                                <p className="dash-id-num">ID No.: (Hardcoded)</p>
                                <p className="dash-condition">Condition: Cerebral Palsy</p>
                            </div>
                        </button>
                        </Link>

                        {/* <Link to="/recordauth">
                        <button type="submit" className=" dash-information row gen-button">
                            <img src={blankpic} alt="" className="dash-pic" />
                            <div className="dash-details">
                                <p className="dash-name">Patient Name Demo</p>
                                <p className="dash-birth-date">Birth Date: 08-02-2015</p>
                                <p className="dash-age">Age: 8</p>
                                <p className="dash-id-num">ID No.: (Hardcoded)</p>
                                <p className="dash-condition">Condition: Cerebral Palsy</p>
                            </div>
                        </button>
                        </Link> */}

                    </div>

                    <div className="pt-5">
                    {/* <button onClick={logout} className="gen-button px-2 py-2 rounded-lg bg-[#F5C4C4]">Sign Out (Temp)</button> */}
                    </div>
                </div>
            </main>
        </div>
    );
}
