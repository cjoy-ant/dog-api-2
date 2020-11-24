function getQuantity() {
  let enteredNum = $('#dog-quantity').val();
  return enteredNum;
}

function getDogImages(quantity) {
  console.log('Fetching your dog images');
   fetch (`https://dog.ceo/api/breeds/image/random/${getQuantity()}`)
   .then(response => response.json())
   .then(responseJson => displayResults(responseJson))
   .catch(error => alert('Something went wrong.Try again later.'))
}

// displaysResults to the DOM
function displayResults(responseJson) {
  console.log(responseJson);
  let index = $('#dog-quantity').val();
  let dogHtml = "";
  for (let i=0; i < index; i++) {
    dogHtml+=`<img src="${responseJson.message[i]}" class="results-img"><br>`;
  }
  $('section h2').replaceWith(`<h2>You got ${getQuantity()} dogs!</h2>`);
  $('div.response-images').html(dogHtml);
  $('.results').removeClass('hidden');
}

// listens for user to submit form
function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImages();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
