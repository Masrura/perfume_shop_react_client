console.log(process.env);


// const firebaseConfig = {
//     apiKey: "AIzaSyAfnc73n0Q3JYL9JxQ3wCHbOvoysL_DcKE",
//     authDomain: "assignment-11-auth.firebaseapp.com",
//     projectId: "assignment-11-auth",
//     storageBucket: "assignment-11-auth.appspot.com",
//     messagingSenderId: "934398385551",
//     appId: "1:934398385551:web:71634b05a525ffb19ffffa",
//     measurementId: "G-1L123KFGDP"
// };
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export default firebaseConfig;