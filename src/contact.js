let content = document.getElementById('content');

function loadContact() {
    let main = document.querySelector('.main');

    main.innerHTML = '';
    let contactHeader = document.createElement('h1');
    contactHeader.innerHTML = 'Contact';
    main.appendChild(contactHeader);

    //owner contact
    let contactOwner = document.createElement('div');
    contactOwner.classList.add('contact-section');
    contactOwner.innerHTML = '<b>Owner:</b>';
    let contactOwnerName = document.createElement('p');
    contactOwnerName.innerHTML = 'John Doe';
    contactOwner.appendChild(contactOwnerName);
    let contactOwnerEmail = document.createElement('p');
    contactOwnerEmail.innerHTML = 'johndoe@jd.com';
    contactOwner.appendChild(contactOwnerEmail);
    let contactOwnerPhone = document.createElement('p');
    contactOwnerPhone.innerHTML = '123-456-7890';
    contactOwner.appendChild(contactOwnerPhone);
    main.appendChild(contactOwner);

    //contact manager
    let contactManager = document.createElement('div');
    contactManager.classList.add('contact-section');
    contactManager.innerHTML = '<b>Manager:</b>';
    let contactManagerName = document.createElement('p');
    contactManagerName.innerHTML = 'Jane Doe';
    contactManager.appendChild(contactManagerName);
    let contactManagerEmail = document.createElement('p');
    contactManagerEmail.innerHTML = 'janedoe@jd.com';
    contactManager.appendChild(contactManagerEmail);
    let contactManagerPhone = document.createElement('p');
    contactManagerPhone.innerHTML = '123-456-7890';
    contactManager.appendChild(contactManagerPhone);
    main.appendChild(contactManager);


    //contact waiter
    let contactWaiter = document.createElement('div');
    contactWaiter.classList.add('contact-section');
    contactWaiter.innerHTML = '<b>Waiter:</b>';
    let contactWaiterName = document.createElement('p');
    contactWaiterName.innerHTML = 'Jane Doe';
    contactWaiter.appendChild(contactWaiterName);
    let contactWaiterEmail = document.createElement('p');
    contactWaiterEmail.innerHTML = 'janedoe@jd.com';
    contactWaiter.appendChild(contactWaiterEmail);
    let contactWaiterPhone = document.createElement('p');
    contactWaiterPhone.innerHTML = '123-456-7890';
    contactWaiter.appendChild(contactWaiterPhone);
    main.appendChild(contactWaiter);
}

export {loadContact};