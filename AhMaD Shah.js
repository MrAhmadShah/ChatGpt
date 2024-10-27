// Placeholder function for sending messages (you can expand this as needed)
function sendMessage() {
    const messageInput = document.getElementById('user-input');
    const message = messageInput.value;
    if (message) {
        const chatBox = document.getElementById('chat-box');
        chatBox.innerHTML += `<div>${message}</div>`; // Display the message
        messageInput.value = ''; // Clear input field
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    }
}

// Function to prompt the user for their name and display the welcome message
function welcomeUser() {
    const userName = prompt("Please enter your name:");
    const welcomeMessage = userName ? `السلام عليكم - بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ - Welcome, ${userName}!` : "السلام عليكم - بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ - Welcome!";
    document.getElementById('welcome-message').innerText = welcomeMessage;
}

// Call the function when the page loads
window.onload = welcomeUser;

// Function to change themes
function changeTheme(theme) {
    document.body.className = theme; // Change the body's class to the selected theme
}

// Function to start voice recognition
function startVoiceRecognition() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        document.getElementById('user-input').value = transcript; // Set the textarea value to the recognized speech
    };

    recognition.onerror = function(event) {
        console.error('

