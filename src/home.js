let content = document.getElementById('content');

//loads home page
function loadHome() {
    let heading = document.createElement('div');
    heading.classList.add('heading');

    let review = document.createElement('div');
    review.classList.add('review');
    review.classList.add('content-section');
    let reviewText = document.createElement('p');
    reviewText.innerHTML = '"The best restaurant in the world!"';
    let reviewAuthor = document.createElement('b');
    reviewAuthor.innerHTML = '- John Doe';
    review.appendChild(reviewText);
    content.appendChild(review);

    let hours = document.createElement('div');
    hours.classList.add('hours');
    hours.classList.add('content-section');

    let location = document.createElement('div');
    location.classList.add('location');
    location.classList.add('content-section');
}

export {loadHome};