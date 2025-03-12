// Get the scroll image and title element
const scrollImage = document.getElementById('scrollImage');
const title1 = document.getElementById('1');

// Add click event to scroll to title1
scrollImage.addEventListener('click', () => {
    title1.scrollIntoView({ behavior: 'smooth' });
});
