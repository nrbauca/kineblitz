import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut
} from 'firebase/auth';
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC15wmWTnfzXP0grkdCk8BmJUlElBDc3_o",
  authDomain: "kineblitz-2d95f.firebaseapp.com",
  databaseURL: "https://kineblitz-2d95f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kineblitz-2d95f",
  storageBucket: "kineblitz-2d95f.appspot.com",
  messagingSenderId: "118588653036",
  appId: "1:118588653036:web:5e87f56fd3eb040b93d4c9",
  measurementId: "G-GRT6SX3RX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(firestore, "users"), where("uid", "==", user.id));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(firestore, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword (auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithEmailAndPassword = async (name, email, password, birthday, age, condition) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(firestore, "users"), {
            uid:user.uid,
            name,
            authProvider: "pentabyte",
            email,
            birthday,
            age,
            condition,
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert ("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
};

const registerAuthWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(firestore, "professionals"), {
            uid:user.uid,
            name,
            authProvider: "pentabyte",
            email,
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

export {
    auth,
    analytics,
    firestore,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
    registerAuthWithEmailAndPassword,
};
