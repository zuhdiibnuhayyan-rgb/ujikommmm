// Firebase Configuration
// Project: monitoring-92e1e
// PENTING: Jangan commit file ini ke repository publik.
// Gunakan Firebase Security Rules untuk membatasi akses data.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyD-P7awz7sXi4bigAtwIl1iNxro-T1h6Wo",
  authDomain: "ujikommm-iot.firebaseapp.com",
  projectId: "ujikommm-iot",
  storageBucket: "ujikommm-iot.firebasestorage.app",
  messagingSenderId: "662406800775",
  appId: "1:662406800775:web:06238245132d7846badf22",
  measurementId: "G-HV9863CS0B"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export default app;
