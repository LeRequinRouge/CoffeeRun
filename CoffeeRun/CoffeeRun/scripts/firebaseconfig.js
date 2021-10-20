// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


(function (window) {
    "use strict";
    var App = window.App || {};
var FirebaseConfig = {
    apiKey: "AIzaSyBGFANkD_I0KiOP0vddU7m5v0dfOqphGW0",
    authDomain: "coffeerun-bf1f8.firebaseapp.com",
    projectId: "coffeerun-bf1f8",
    storageBucket: "coffeerun-bf1f8.appspot.com",
    messagingSenderId: "749869048622",
    appId: "1:749869048622:web:2f58170bea743ed36e90bf",
    measurementId: "G-CS34Y4GYR2"
};
App.FirebaseConfig = FirebaseConfig;
    firebase.initializeApp(App.FirebaseConfig);
    window.App = App;
})(window);