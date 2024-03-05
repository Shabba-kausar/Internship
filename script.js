const courses = [
    { title: 'HTML & CSS Basics', price: '$49.99', description: 'Learn the fundamentals of HTML and CSS.' },
    { title: 'JavaScript Essentials', price: '$69.99', description: 'Master the basics of JavaScript programming.' },
];

// Function to display courses on the webpage
function displayCourses() {
    const main = document.querySelector('main');

    // Add heading for available courses
    const heading = document.createElement('h2');
    heading.textContent = 'Available Courses';
    main.appendChild(heading);

    courses.forEach(course => {
        const card = document.createElement('div');
        card.classList.add('card');

        const title = document.createElement('h3');
        title.textContent = course.title;

        const price = document.createElement('p');
        price.textContent = 'Price: ' + course.price;
const description = document.createElement('p');
        description.textContent = course.description;

        // Add buy button with payment via UPI
        const buyButton = document.createElement('button');
        buyButton.textContent = 'Buy';
        buyButton.addEventListener('click', () => {
            alert('Please make payment via UPI for ' + course.title + ' to complete the purchase.');
            // Add your UPI payment integration code here
        });

        card.appendChild(title);
        card.appendChild(price);
        card.appendChild(description);
        card.appendChild(buyButton);

        main.appendChild(card);
    });
}

// Call the function to display courses when the page loads
window.onload = displayCourses;