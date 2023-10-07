import { initializeApp } from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBiWR-cvqZorVTjGf5G1OVfLHmWtYR4_Yg",
  authDomain: "pizzariamariokebd.firebaseapp.com",
  projectId: "pizzariamariokebd",
  storageBucket: "pizzariamariokebd.appspot.com",
  messagingSenderId: "1000007618047",
  appId: "1:1000007618047:web:1d48ad75e157d739d3ebca",
  measurementId: "G-9E4E5R70DS"
};

const app = initializeApp(firebaseConfig);

export default app;