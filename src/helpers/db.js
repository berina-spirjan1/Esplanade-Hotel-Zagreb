import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDUNwPMyhvYefYwj8HBaIS7wa8k7BDyE8I",
    authDomain: "baza-podataka-5a3a3.firebaseapp.com",
    projectId: "baza-podataka-5a3a3",
    storageBucket: "baza-podataka-5a3a3.appspot.com",
    messagingSenderId: "154265913832",
    appId: "1:154265913832:web:299f337478c8ea9607bc5d",
    measurementId: "G-YJWSZ102E4"
};
const fire=firebase.initializeApp(firebaseConfig);

export default fire;
