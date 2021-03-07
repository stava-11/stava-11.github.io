const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs"){
            // create html elements and set value in variable
            let card = document.createElement('section');
            let cardText = document.createElement('div');
            let h2 = document.createElement('h2');
            let slogan = document.createElement('h3');
            let year_founded = document.createElement('p');
            let population = document.createElement('p');
            let rain = document.createElement('p');
            
            let image = document.createElement('img');

            // create text content and set in variable
            h2.textContent = towns[i].name;
            slogan.textContent = towns[i].motto;
            year_founded.textContent = "Year Founded: " + towns[i].yearFounded;
            population.textContent = "Population: " + towns[i].currentPopulation;
            rain.textContent = "Annual Rainfall: " + towns[i].averageRainfall;

            // set image to the variable
            image.setAttribute('src', "images/" + towns[i].photo);

            // add each variable to the card element
            cardText.appendChild(h2);
            cardText.appendChild(slogan);
            cardText.appendChild(year_founded);
            cardText.appendChild(population);
            cardText.appendChild(rain);
            
            card.appendChild(cardText);
            card.appendChild(image);

            // place card value into the div
            document.querySelector('section.cards').appendChild(card);
        }
    }
  });