import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyDnmFwBpkrr3ikSrL9dcKey5SjFNVATjZg",
    authDomain: "instagram-sh.firebaseapp.com",
    projectId: "instagram-sh",
    storageBucket: "instagram-sh.appspot.com",
    messagingSenderId: "684124093502",
    appId: "1:684124093502:web:136be3e9d1d8561601256f"
}


const firebase = Firebase.initializeApp(config);
const {FieldValue} = Firebase.firestore;


export {firebase,FieldValue}