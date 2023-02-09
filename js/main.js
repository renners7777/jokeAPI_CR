//Example fetch using pokemonapi.co


document.querySelector('button').addEventListener('click', getJoke)

function getJoke() {

  fetch(`https://icanhazdadjoke.com/slack`)


    .then((res) => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.attachments[0].text)

      document.querySelector('p').innerText = data.attachments[0].text

    })
    .catch(err => {
      console.log(`error ${err}`)
    })
};

