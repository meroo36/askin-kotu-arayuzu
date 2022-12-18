"use client";
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

export default function Analytics() {
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyCTWPMfZmm9kjMnuyGg30kI5qMMHD15HKg",
        authDomain: "askin-kotu-arayuzu-468a8.firebaseapp.com",
        projectId: "askin-kotu-arayuzu-468a8",
        storageBucket: "askin-kotu-arayuzu-468a8.appspot.com",
        messagingSenderId: "684442374580",
        appId: "1:684442374580:web:069e96a0bba77bfb20e2e1",
        measurementId: "G-20MLMMPM5M",
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    if (app.name && typeof window !== "undefined") {
        const analytics = getAnalytics(app);
        logEvent(analytics, "page_view");
        console.log("event logged");
    }
    return null;
}
