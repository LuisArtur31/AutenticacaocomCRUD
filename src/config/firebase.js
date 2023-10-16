
import { initializeApp} from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { initializeAuth } from 'firebase/auth';

//Aqui vc deve colocar as suas credenciais 
const firebaseConfig = {
  apiKey: "AIzaSyDaH3D0vYxHyOH0MgbxmfMCAoPHicOjyBc",
  authDomain: "arthurluisifal523.firebaseapp.com",
  projectId: "arthurluisifal523",
  storageBucket: "arthurluisifal523.appspot.com",
  messagingSenderId: "619684633659",
  appId: "1:619684633659:web:4b4f013c09f2946b7bd01e",
  measurementId: "G-KMCKZHT34Z"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app)


export { app, db, auth }