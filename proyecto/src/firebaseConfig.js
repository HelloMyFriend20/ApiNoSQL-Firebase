import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDrlV_NuNkJUUHcTqpxdyRa65w4A3yyq8Q",
    authDomain: "pokeapi2-cc26e.firebaseapp.com",
    projectId: "pokeapi2-cc26e",
    storageBucket: "pokeapi2-cc26e.firebasestorage.app",
    messagingSenderId: "316427130503",
    appId: "1:316427130503:web:d1ecd1f00d07f438d20a22",
    measurementId: "G-R4ML6636S2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ ¡Esto es necesario!
export { auth, db };