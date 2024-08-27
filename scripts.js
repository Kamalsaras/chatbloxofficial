// Function to handle the copying of links
function copyLink(link, button) {
    navigator.clipboard.writeText(link).then(() => {
        button.textContent = 'Copied!';
        button.classList.add('copied');
        setTimeout(() => {
            button.textContent = 'Get';
            button.classList.remove('copied');
        }, 2000);
    });
}

// Function to handle email sending (to be implemented as per your email service)
function sendEmail(event) {
    event.preventDefault();
    // Add your email sending logic here
    alert('Your message has been sent!');
}

// Function to handle animation for elements as they come into view
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate-fade');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    });

    elements.forEach(element => observer.observe(element));
});
