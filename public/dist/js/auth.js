// Import the functions you need from the SDKs you need
/*import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChKsmRtU4VCvxU3CkaKGMjtIWfiQlyeK0",
  authDomain: "yllee-vf.firebaseapp.com",
  databaseURL: "https://yllee-vf-default-rtdb.firebaseio.com",
  projectId: "yllee-vf",
  storageBucket: "yllee-vf.appspot.com",
  messagingSenderId: "249932092905",
  appId: "1:249932092905:web:cc35152271fbeca5bba778"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);*/


/*$(document).ready(function($){
    firebase.auth().onAuthStateChanged(user => { 
        if(user){
            console.log(`User : ${user}`);
        }
        else{
            console.error("No user");
        }
    
    });
});*/
console.log("auth....");
console.log({firebase});

firebase.auth().onAuthStateChanged(user => {
    console.log(`user ${user}`);
});