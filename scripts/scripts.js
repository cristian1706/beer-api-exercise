const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://api.punkapi.com/v2/beers?per_page=10', true);
request.onload = function () {

  var data = JSON.parse(this.response);
  
  if (request.status >= 200 && request.status < 400) {
    
    data.forEach(beer => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = beer.name;

      const p1 = document.createElement('p1');
      beer.ibu = beer.ibu;
      p1.textContent = "IBU " + `${beer.ibu}` + " ";

      const p2 = document.createElement('p2');
      beer.ph = beer.ph;
      p2.textContent = " PH " + `${beer.ph}`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p1);
      card.appendChild(p2);
    });
  } else {
    const errorMessage = document.createElement('errMessage');
    errorMessage.textContent = `Not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();


function buttonFunction() {
	alert("You never listen to me >:(");
}