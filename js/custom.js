// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// owl carousel 

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})


function subscribe() {
    var email = document.getElementById('emailInput').value;
    if (validateEmail(email)) {
        // You can send the email to your server for further processing
        // For this example, we'll just show an alert with the entered email
        alert('Thank you for subscribing!\nEmail: ' + email);
    } else {
        alert('Invalid email address. Please try again.');
    }
}

function validateEmail(email) {
    // Simple email validation
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
