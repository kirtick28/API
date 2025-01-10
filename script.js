const button = document.getElementById('btn');
const jokeContent = document.getElementById('jokecontent');
const joke = document.getElementById('joke');

button.onclick = () => {
  axios
    .get('https://official-joke-api.appspot.com/random_joke')
    .then(function (response) {
      button.textContent = 'Next';
      jokeContent.textContent = response.data.setup;
      joke.textContent = '';
      joke.textContent = response.data.punchline;
      setTimeout(function () {}, 2000);
    })
    .catch(function (error) {
      console.error(error);
      jokeContent.textContent = 'Something went wrong';
      joke.textContent = '';
    });
};
