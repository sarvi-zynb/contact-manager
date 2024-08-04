import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3Wtj412KUWUzCkobkpvjz50SXlB_zH5s",
  authDomain: "fir-auth-4070a.firebaseapp.com",
  projectId: "fir-auth-4070a",
  storageBucket: "fir-auth-4070a.appspot.com",
  messagingSenderId: "558058717898",
  appId: "1:558058717898:web:5bb3f3c342363a58602a33",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
