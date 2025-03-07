



document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded!");

    // ........ ERROR MESSAGE FOR EMPTY INPUT FIELD ........ //
    var myForm = document.getElementById("myForm");
    if (myForm) {
        myForm.addEventListener("submit", function (event) {
            if (!this.checkValidity()) {
                event.preventDefault(); // Prevent submission if invalid
                event.stopPropagation();
            }
            this.classList.add("was-validated"); // Add Bootstrap validation styling
        });
        console.log("Form validation attached!");
    } else {
        console.warn("No form found, skipping validation setup.");
    }

    // ......... CHATBOX HIDE/DISPLAY ....... //
    var chatbox = document.getElementById("chatbox");
    var chatInput = document.getElementById("chat-input");
    var sendButton = document.getElementById("send-btn");
    var attachmentButton = document.getElementById("attachment-btn");
    var chatButton = document.querySelector(".chatbtn");
    var closeButton = document.getElementById("close-chat");

    if (!chatbox || !chatButton || !closeButton) {
        console.error("Chatbox elements missing.");
        return; // Stop execution if essential elements are missing
    }

    // Ensure chatbox is hidden on page load
    chatbox.style.display = "none";

    // Toggle chatbox visibility
    function toggleChatbox() {
        chatbox.style.display = (chatbox.style.display === "none" || chatbox.style.display === "") ? "flex" : "none";
    }

    // Toggle between send button and attachment button
    function toggleSendButton() {
        if (chatInput && chatInput.value.trim() !== "") {
            sendButton.style.display = "inline-block";
            attachmentButton.style.display = "none";
        } else {
            sendButton.style.display = "none";
            attachmentButton.style.display = "inline-block";
        }
    }

    // Add event listeners only if elements exist
    chatButton.addEventListener("click", toggleChatbox);
    closeButton.addEventListener("click", toggleChatbox);
    
    if (chatInput) {
        chatInput.addEventListener("input", toggleSendButton);
    }

    console.log("Chatbox functionality attached!");
});


    //........... Sliding EFFECT......//

document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript is running...");

    const elements = document.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-bottom');

    if (elements.length === 0) {
        console.error("No elements found with animation classes!");
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            console.log("Observed element:", entry.target, "isIntersecting:", entry.isIntersecting);
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); // 10% of the element must be visible

    elements.forEach(element => observer.observe(element));
});



