//To open new WebPage 
function openNewPage(pageUrl) {
    // Change the window location to the new page URL
    window.location.href = pageUrl;
}

//To display a message prompt saying "Message successfully sent" when the "Send Message" button is clicked.
document.addEventListener('DOMContentLoaded', function () {
    const sendMessageBtn = document.getElementById('sendMessageBtn');
    

    sendMessageBtn.addEventListener('click', function (event) {
        
        alert('Message successfully sent');
        
    });
});

// Function to clear form fields
function clearForm() {
    // Get the form elements
    const nameInput = document.querySelector('input[type="text"]');
    const emailInput = document.querySelector('input[type="email"]');
    const messageInput = document.querySelector('textarea');

    // Clear the form fields
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
}


// Add event listener to the "Send Message" button
document.getElementById('sendMessageBtn').addEventListener('click', clearForm);
