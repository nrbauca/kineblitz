import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
                    
            //Firebase configuration
            const firebaseConfig = {
                apiKey: "AIzaSyC15wmWTnfzXP0grkdCk8BmJUlElBDc3_o",
                authDomain: "kineblitz-2d95f.firebaseapp.com",
                databaseURL: "https://kineblitz-2d95f-default-rtdb.asia-southeast1.firebasedatabase.app",
                projectId: "kineblitz-2d95f",
                storageBucket: "kineblitz-2d95f.appspot.com",
                messagingSenderId: "118588653036",
                appId: "1:118588653036:web:c760cf0c458e00e693d4c9",
            };

            // Initialize Firebase
            const app = initializeApp(firebaseConfig);

            import {getDatabase} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
            const db = getDatabase();
