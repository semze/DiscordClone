document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const messageInput = document.getElementById("messageInput");
    const username = localStorage.getItem("loggedInUser") || "Guest";

    // Ensure Firebase and Database are available
    if (typeof firebase === "undefined") {
        console.error("❌ Firebase SDK not loaded.");
        return;
    }
    
    if (typeof window.db === "undefined") {
        console.error("❌ Firebase database not initialized.");
        return;
    }

    console.log("✅ Firebase Database Ready.");

    // Listen for new messages
    window.db.ref("messages").on("child_added", function(snapshot) {
        let data = snapshot.val();
        let messageElement = document.createElement("p");
        messageElement.innerHTML = `<strong>${data.user}:</strong> ${data.message}`;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    });

    // Send message function
    window.sendMessage = function () {
        let message = messageInput.value.trim();
        if (message === "") return;

        window.db.ref("messages").push({
            user: username,
            message: message
        });

        messageInput.value = "";
    };

    // Logout function
    window.logout = function () {
        localStorage.removeItem("loggedInUser");
        window.location.href = "index.html";
    };
});
