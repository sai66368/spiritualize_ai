// Function to get a greeting based on the time of day
function getTimeBasedGreeting() {
    const now = new Date();
    const hours = now.getHours();
    if (hours < 12) return "Good Morning";
    if (hours < 18) return "Good Afternoon";
    return "Good Evening";
}

// Function to display the greeting on the home page and chat page
document.addEventListener("DOMContentLoaded", () => {
    const homeGreeting = document.getElementById('greeting');
    const chatGreeting = document.getElementById('chat-greeting');
    
    if (homeGreeting) {
        homeGreeting.textContent = getTimeBasedGreeting();
    }
    
    if (chatGreeting) {
        chatGreeting.textContent = getTimeBasedGreeting() + ", User!";
    }

    // Handle user input and bot response
    const inputField = document.querySelector('.message-input');
    const submitButton = document.querySelector('.submit-button');
    const chatContent = document.querySelector('.chat-content');
    
    function processInput() {
        if (inputField.value.trim() !== '') {
            const userMessage = inputField.value.trim();
            addMessage(userMessage, 'user');
            inputField.value = '';
            setTimeout(() => {
                addMessage(getBotResponse(userMessage), 'bot');
            }, 1000);
        }
    }

    if (inputField && chatContent) {
        inputField.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                processInput();
            }
        });

        submitButton.addEventListener('click', processInput);

        inputField.addEventListener('blur', function() {
            processInput();
        });
    }

    // Dark mode toggle
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            document.body.classList.toggle('light-mode');
        });
    }
});

// Function to add a message to the chat
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = text;
    const chatContent = document.querySelector('.chat-content');
    chatContent.appendChild(messageDiv);
    chatContent.scrollTop = chatContent.scrollHeight;
}

// Function to get a default bot response
function getBotResponse(userMessage) {
    // Here you can implement logic to generate a response based on the user's message
    // For now, it returns a default response
    return "This is a default response from the bot.";
}














// // Function to get a greeting based on the time of day
// function getTimeBasedGreeting() {
//     const now = new Date();
//     const hours = now.getHours();
//     if (hours < 12) return "Good Morning";
//     if (hours < 18) return "Good Afternoon";
//     return "Good Evening";
// }

// // Function to display the greeting on the home page and chat page
// document.addEventListener("DOMContentLoaded", () => {
//     const homeGreeting = document.getElementById('greeting');
//     const chatGreeting = document.getElementById('chat-greeting');
    
//     if (homeGreeting) {
//         homeGreeting.textContent = getTimeBasedGreeting();
//     }
    
//     if (chatGreeting) {
//         chatGreeting.textContent = getTimeBasedGreeting() + ", User!";
//     }

//     // Handle user input and bot response
//     const inputField = document.querySelector('.message-input');
//     const chatContent = document.querySelector('.chat-content');
    
//     if (inputField && chatContent) {
//         inputField.addEventListener('keypress', function(event) {
//             if (event.key === 'Enter' && inputField.value.trim() !== '') {
//                 const userMessage = inputField.value.trim();
//                 addMessage(userMessage, 'user');
//                 inputField.value = '';
//                 setTimeout(() => {
//                     addMessage(getBotResponse(userMessage), 'bot');
//                 }, 1000);
//             }
//         });

//         inputField.addEventListener('blur', function() {
//             if (inputField.value.trim() !== '') {
//                 const userMessage = inputField.value.trim();
//                 addMessage(userMessage, 'user');
//                 inputField.value = '';
//                 setTimeout(() => {
//                     addMessage(getBotResponse(userMessage), 'bot');
//                 }, 1000);
//             }
//         });
//     }

//     // Dark mode toggle
//     const darkModeToggle = document.createElement('button');
//     darkModeToggle.textContent = 'Toggle Dark Mode';
//     darkModeToggle.classList.add('dark-mode-toggle');
//     document.body.appendChild(darkModeToggle);

//     darkModeToggle.addEventListener('click', function() {
//         document.body.classList.toggle('dark-mode');
//     });
// });

// // Function to add a message to the chat
// function addMessage(text, sender) {
//     const messageDiv = document.createElement('div');
//     messageDiv.classList.add('message', sender);
//     messageDiv.textContent = text;
//     const chatContent = document.querySelector('.chat-content');
//     chatContent.appendChild(messageDiv);
//     chatContent.scrollTop = chatContent.scrollHeight;
// }

// // Function to get a default bot response
// function getBotResponse(userMessage) {
//     // Here you can implement logic to generate a response based on the user's message
//     // For now, it returns a default response
//     return "This is a default response from the bot.";
// }
