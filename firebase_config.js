// firebase_config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, onSnapshot, query, doc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD-BQatS4BZPFlkIVOKbqgbUWn7kFUQaME",
  authDomain: "perla-del-norte.firebaseapp.com",
  projectId: "perla-del-norte",
  storageBucket: "perla-del-norte.firebasestorage.app",
  messagingSenderId: "392748448922",
  appId: "1:392748448922:web:174912093c53432692b323",
  measurementId: "G-VPMDKQQGQQ"
};

// Inicializar Firebase y herramientas
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// EXTREMADAMENTE IMPORTANTE: Exponer a la lógica de Ruby (Opal)
window.fb_db = db;
window.fb_methods = { collection, addDoc, onSnapshot, query, doc, deleteDoc, updateDoc };