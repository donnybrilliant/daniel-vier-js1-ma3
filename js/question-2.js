const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=";

const apiKey = "640491d13c164a6daab992f43eae18f1";

const resultsContainer = document.querySelector("main");

async function getStuff() {
  try {
    const response = await fetch(url + apiKey);
    const results = await response.json();
    const resultsArray = results.results;
    resultsContainer.innerHTML = "";
    for (let i = 0; i < resultsArray.length; i++) {
      if (i === 8) {
        break;
      }

      resultsContainer.innerHTML += `<article id="result-${i}">
    <h3>${resultsArray[i].name}</h3>
    <p>Rating: ${resultsArray[i].rating}</p>
    <p>Number of tags: ${resultsArray[i].tags.length}</p></div>`;
    }
  } catch (error) {
    resultsContainer.innerHTML = error;
  }
}

getStuff();
