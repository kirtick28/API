const button = document.getElementById('btn');
const jokeContent = document.getElementById('jokecontent');
const joke = document.getElementById('joke');
const image = document.getElementById('image');

button.onclick = () => {
  axios
    .get('https://official-joke-api.appspot.com/random_joke')
    .then(function (response) {
      button.textContent = 'Next';
      jokeContent.textContent = response.data.setup;
      joke.textContent = '';
      joke.textContent = response.data.punchline;
    })
    .catch(function (error) {
      console.error(error);
      jokeContent.textContent = 'Something went wrong';
      joke.textContent = '';
    });
  axios.get('https://dog.ceo/api/breeds/image/random').then((response) => {
    image.src = response.data.message;
  });

  axios.get('https://x-colors.yurace.pro/api/random').then((response) => {
    document.body.style.backgroundColor = response.data.hex;
  });
};
