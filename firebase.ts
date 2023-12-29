import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAPIKDE5_q5yeiqcr8cegbpmpH5LZlqWH0",
    authDomain: "dropchest-a8c51.firebaseapp.com",
    projectId: "dropchest-a8c51",
    storageBucket: "dropchest-a8c51.appspot.com",
    messagingSenderId: "336261938406",
    appId: "1:336261938406:web:4b3622ef9d009537a70f27",
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }
