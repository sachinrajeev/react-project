import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBcFjFsdLtz_MbLvZaExaOuCoMG5exWVXs",
    authDomain: "whatsapp-clone-fcec5.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-fcec5.firebaseio.com",
    projectId: "whatsapp-clone-fcec5",
    storageBucket: "whatsapp-clone-fcec5.appspot.com",
    messagingSenderId: "401872201020",
    appId: "1:401872201020:web:5429496853e4be00a26a39",
    measurementId: "G-VXXRNZDCQ1"
  };
  
  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;