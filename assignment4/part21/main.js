const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar').querySelector('ul');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = [
  {file:'pic1.jpg', alt:'Human eye close up'}, 
  {file:'pic2.jpg', alt:'Rock that resembles a wave'},
  {file:'pic3.jpg', alt:'Purple and white flowers'},
  {file:'pic4.jpg', alt:'Hieroglyphics of pharaoh'},
  {file:'pic5.jpg', alt:'Moth on a leaf'}]

/* Declaring the alternative text for each image file */

const alts = {
    'pic1.jpg':'Human eye close up',
    'pic2.jpg': 'Rock that resembles a wave',
    'pic3.jpg': 'Purple and white flowers',
    'pic4.jpg': 'Hieroglyphics of pharaoh', 
    'pic5.jpg': 'Moth on a leaf'
}

/* Looping through images */

for (const image of images) {
    const newItem = document.createElement('li');
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image.file}`);
    newImage.setAttribute('alt', `images/${image.alt}`);
    newItem.appendChild(newImage);
    thumbBar.appendChild(newItem);
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt =e.target.alt;
    });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });