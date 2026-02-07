import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("signupForm").addEventListener("submit", async function(e){
 e.preventDefault();

 await addDoc(collection(db,"users"),{
   name:name.value,
   age:age.value,
   phone:phone.value,
   gender:gender.value,
   consent:true
 });

 window.location="match.html";
});
