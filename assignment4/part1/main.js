const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory
                .replaceAll(":insertx:", xItem)
                .replace(":inserty:", yItem)
                .replace(":insertz:", zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory =newStory.replace("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    const weight =  `${Math.round(300 / 14)} Stone`;
    const temperature =  `${Math.round((94 - 32)* 5/9)} centigrade`;
    newStory = newStory
                .replace('300 pounds', weight)
                .replace('94 fahrenheit', temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}