import React from 'react'

export default function Dashboard() {
    return (
        <div>
            <main className="dashboard">
                <div className="dashboard-container">
                    <div className="dashboard-welcome">
                        <h1 className="dashboard-header">Welcome, <span className="dashboard-user">*insert code here for name*</span>!</h1>
                        <p className="dashboard-instruction">
                            Please select a database to access...
                        </p>
                    </div>
                    <div className="dashboard-options">
                        <button type="submit" className="gen-button" id>User 1</button>
                        <button type="submit" className="gen-button" id>User 2</button>
                        <button type="submit" className="gen-button" id>User 3</button>
                    </div> 
                </div>
            </main>
        </div>
    );
}