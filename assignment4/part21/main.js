const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar').querySelector('ul');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']

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
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
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