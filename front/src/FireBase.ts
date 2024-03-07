import { initializeApp } from "firebase/app";
import { initializeAuth , browserSessionPersistence, browserPopupRedirectResolver} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDG-vLM_eRNfTSn2QE-q4JJKHALkF6QlG8",
  authDomain: "gathering-eee66.firebaseapp.com",
  projectId: "gathering-eee66",
  storageBucket: "gathering-eee66.appspot.com",
  messagingSenderId: "887204151237",
  appId: "1:887204151237:web:fc3fc81b0247c20477d5ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: browserSessionPersistence,
    popupRedirectResolver: browserPopupRedirectResolver,
});