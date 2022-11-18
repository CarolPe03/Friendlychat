/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */

const config = {
  apiKey: "AIzaSyAQiPH8wbZaaUh9rebFreOPIKdalUlSlV4",
  authDomain: "friendlychat-5f70f.firebaseapp.com",
  projectId: "friendlychat-5f70f",
  storageBucket: "friendlychat-5f70f.appspot.com",
  messagingSenderId: "460997762075",
  appId: "1:460997762075:web:5d6f956460f18831166cbe"
  
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
  
}