// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {

  'use strict';

  let url = 'https://randomuser.me/api/?results=12';
  let customers = document.querySelector('.customers');
  let header = document.createElement('header');
  header.innerHTML = '<h1>' + 'Internal Company Directory' + '</h1>';
  customers.appendChild(header);


  fetch(url).then(function(response){
    response.json().then(function(data){
      console.log(data);
      for (let i = 0; i < data.results.length; i++) {
        let customerPhoto = data.results[i].picture.large;
        console.log(customerPhoto);
        let customerName = data.results[i].name.first + ' ' + data.results[i].name.last;
        console.log(customerName);
        let customerEmail = data.results[i].email;
        console.log(customerEmail);
        let customerAddress1 = data.results[i].location.street
        let customerAddress2 = data.results[i].location.city + ' ' + data.results[i].location.state + ' ' + data.results[i].location.postcode;
        console.log(customerAddress1, customerAddress2);
        let customerPhone = data.results[i].phone;
        console.log(customerPhone);

        makeCustomers(customerPhoto, customerName, customerEmail, customerAddress1, customerAddress2, customerPhone);
      };
    })
  })

  function makeCustomers(photo, name, email, address1, address2, phone) {
    let customerField = document.createElement('div');
    customerField.setAttribute('class', 'customerField');
    customers.appendChild(customerField);

    let photoField = document.createElement('div');
    photoField.setAttribute('class', 'photoField');

    let customerName = document.createElement('h3');
    customerName.setAttribute('class', 'customerName');

    let customerInfo = document.createElement('div');
    customerInfo.setAttribute('class', 'customerInfo');

    let customerEmail = document.createElement('p');
    customerEmail.setAttribute('class', 'customerEmail');

    let customerAddress1 = document.createElement('p');
    customerAddress1.setAttribute('class', 'customerAddress');

    let customerAddress2 = document.createElement('p');
    customerAddress2.setAttribute('class', 'customerAddress');

    let customerPhone = document.createElement('p');
    customerPhone.setAttribute('class', 'customerPhone');

    photoField.innerHTML = '<img src="' + photo + '"/>';
    customerField.appendChild(photoField);

    customerName.innerHTML = name;
    customerField.appendChild(customerName);
    customerField.appendChild(customerInfo);

    customerEmail.innerHTML = email;
    customerInfo.appendChild(customerEmail);

    customerAddress1.innerHTML = address1;
    customerInfo.appendChild(customerAddress1);

    customerAddress2.innerHTML = address2;
    customerInfo.appendChild(customerAddress2);

    customerPhone.innerHTML = phone;
    customerInfo.appendChild(customerPhone);

  }

})();
