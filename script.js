document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the button and the target section
    const scrollButton = document.getElementById("scrollButton2");
    const targetSection = document.getElementById("Services");

    // Add a click event listener to the button
    scrollButton.addEventListener("click", function () {
        // Use the `scrollIntoView` method to scroll to the target section
        targetSection.scrollIntoView({
            behavior: "smooth", // Optional: Smooth scrolling animation
            block: "start"      // Optional: Scroll to the top of the target section
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the button and the target section
    const scrollButton = document.getElementById("scrollButton1");
    const targetSection = document.getElementById("about-us");

    // Add a click event listener to the button
    scrollButton.addEventListener("click", function () {
        // Use the `scrollIntoView` method to scroll to the target section
        targetSection.scrollIntoView({
            behavior: "smooth", // Optional: Smooth scrolling animation
            block: "start"      // Optional: Scroll to the top of the target section
        });
    });
});





        const openContactButton = document.getElementById('open-contact');
        const openWhatsAppButton = document.getElementById('open-whatsapp');
        const closeContactButton = document.getElementById('close-contact');
        const contactContainer = document.getElementById('contact-container');

        openContactButton.addEventListener('click', () => {
            contactContainer.style.right = '0';
        });

        openWhatsAppButton.addEventListener('click', () => {
            // Replace '1234567890' with the actual WhatsApp number you want to chat with
            window.open('https://wa.me/1234567890', '_blank');
        });

        closeContactButton.addEventListener('click', () => {
            contactContainer.style.right = '-400px';
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
    
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
    
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            });
        });