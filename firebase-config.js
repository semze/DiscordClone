// ✅ Ensure Firebase SDK is loaded
if (typeof firebase === "undefined") {
    console.error("❌ Firebase SDK not loaded. Check script tags in main.html.");
} else {
    console.log("✅ Firebase SDK loaded.");

    // ✅ Firebase Configuration
    const firebaseConfig = {
        apiKey: "AIzaSyDmXNlls52XByjO4AUzKtWkNlMaCaHDA5A",
        authDomain: "discord-clone-6aa55.firebaseapp.com",
        databaseURL: "https://discord-clone-6aa55-default-rtdb.firebaseio.com",
        projectId: "discord-clone-6aa55",
        storageBucket: "discord-clone-6aa55.appspot.com",
        messagingSenderId: "979112665076",
        appId: "1:979112665076:web:ee350513c425a45b0f63a1",
        measurementId: "G-FQWGHF1442"
    };

    // ✅ Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // ✅ Store Database Globally
    window.db = firebase.database();
    console.log("✅ Firebase Database Initialized.");
}
