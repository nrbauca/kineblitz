import React from 'react'

export default function UserDashboard() {
    return (
        <div>
            <main className="user-dashboard">
                <div className="user-container">
                <div className="user-information row">
                    <img src alt="" className="user-pic" />
                    <div className="user-details">
                    <p className="user-name">Name</p>
                    <p className="birth-date">Birth Date:</p>
                    <p className="age">Age:</p>
                    <p className="id-num">ID No.:</p>
                    <p className="condition">Condition:</p>
                    </div>
                </div>
                <h3 className="center">Records</h3>
                <div className="user-records row">
                    <button type="submit" className="gen-button" id>mm/dd/yy</button>
                    <button type="submit" className="gen-button" id>mm/dd/yy</button>
                    <button type="submit" className="gen-button" id>mm/dd/yy</button>
                </div>
                </div>
            </main>
        </div>
    );
}
