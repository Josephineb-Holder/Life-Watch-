// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, getDocs, collection } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBrzYwdQc860RWTLioN5Q5p7qm_qe5kuvc',
  authDomain: 'life-watch-app-b2bc8.firebaseapp.com',
  projectId: 'life-watch-app-b2bc8',
  storageBucket: 'life-watch-app-b2bc8.appspot.com',
  messagingSenderId: '390243079099',
  appId: '1:390243079099:web:803e516d5cf71f6610aa9e',
  measurementId: 'G-WYLF6XM787',
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export async function getCounties() {
  try {
    const counties = [];
    const querySnapshot = await getDocs(collection(db, 'counties'));

    querySnapshot.forEach((doc) => {
      counties.push({ id: doc.id, ...doc.data() });
    });

    return counties;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function getHopitals() {
  try {
    const hopitals = [];
    const querySnapshot = await getDocs(collection(db, 'hopitals'));

    querySnapshot.forEach((doc) => {
      hopitals.push({ id: doc.id, ...doc.data() });
    });

    return hopitals;
  } catch (e) {
    console.log(e);
    return [];
  }
}
