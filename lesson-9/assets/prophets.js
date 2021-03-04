const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++ ) {
      
      // create html elements and set value in variable
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let b_date = document.createElement('p');
      let b_place = document.createElement('p');
      let image = document.createElement('img');

      // create text content and set in variable
      h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
      b_date.textContent = 'Date of Birth: ' + prophets[i].birthdate;
      b_place.textContent = 'Place of Birth: ' + prophets[i].birthplace;

      // set image to teh variable
      image.setAttribute('src', prophets[i].imageurl);

      // add each variable to the card element
      card.appendChild(h2);
      card.appendChild(b_date);
      card.appendChild(b_place);
      card.appendChild(image);

      // place card value into the div
      document.querySelector('div.cards').appendChild(card);
    }
  });

