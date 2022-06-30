let content = document.getElementById('content');
let main = document.createElement('div');
main.classList.add('main');

//loads home page
function loadHome() {
    main.innerHTML = '';
    let heading = document.createElement('div');
    heading.classList.add('heading');

    let review = document.createElement('div');
    review.classList.add('review');
    review.classList.add('content-section');
    let reviewText = document.createElement('p');
    reviewText.innerHTML = '"The best restaurant in the world!"';
    review.appendChild(reviewText);
    review.innerHTML += '-John Doe';
    main.appendChild(review);

    let hours = document.createElement('div');
    hours.classList.add('hours');
    hours.classList.add('content-section');
    let hoursHeading = document.createElement('h1');
    hoursHeading.innerHTML = 'Hours';
    let hoursText = document.createElement('p');
    hoursText.innerHTML = 'Mon-Fri: 11:00am - 9:00pm<br>Sat-Sun: 11:00am - 10:00pm';
    hours.appendChild(hoursHeading);
    hours.appendChild(hoursText);
    main.appendChild(hours);

    let location = document.createElement('div');
    location.classList.add('location');
    location.classList.add('content-section');
    location.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.968600295605!2d-77.3192711846762!3d38.78735417958786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b651da2a7a40cb%3A0xd5e28070895fe609!2sBurke%20centre%20library!5e0!3m2!1sen!2sus!4v1656589347130!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    main.appendChild(location);
    content.appendChild(main);
}

export {loadHome};