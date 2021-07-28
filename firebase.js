import firebase from "firebase/app";
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyAILBBYrLes9ohiT59zBfXS8TilvXosqQA",
  authDomain: "juno-project3.firebaseapp.com",
  projectId: "juno-project3",
  storageBucket: "juno-project3.appspot.com",
  messagingSenderId: "189668859402",
  appId: "1:189668859402:web:34fc371d75172298be09f3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
