const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

randomize.addEventListener('click', result);

function result() {
  let role = randomValueFromArray(roles);
  let place = randomValueFromArray(places);
  let action = randomValueFromArray(actions);
  let client,weight,temperature;

  if (customName.value !== '') {
    client = customName.value;
  }

  if (document.getElementById("uk").checked) {
    weight = `${Math.round(300 / 14)} Stone`;
    temperature = `${Math.round((94 - 32) * 5 / 9)} centigrade`;
  }
  window.eval("console.log('eval....');");
  story.textContent = getStory(role, place, action, temperature, client, weight);
  story.style.visibility = 'visible';
}