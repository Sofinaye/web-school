const teachers = [
  {
    img: './img/steve.jpg',
    name: 'Steve Kinney',
    position: 'A front-end architect',
    disc: 'He taught special education and web development.',
  },
  {
    img: './img/steve.jpg',
    name: 'Steve Kinney',
    position: 'A front-end architect',
    disc: 'He taught special education and web development.',
  },
  {
    img: './img/steve.jpg',
    name: 'Steve Kinney',
    position: 'A front-end architect',
    disc: 'He taught special education and web development.',
  },
  {
    img: './img/steve.jpg',
    name: 'Steve Kinney',
    position: 'A front-end architect',
    disc: 'He taught special education and web development.',
  },
  {
    img: './img/steve.jpg',
    name: 'Steve Kinney',
    position: 'A front-end architect',
    disc: 'He taught special education and web development.',
  },
  {
    img: './img/steve.jpg',
    name: 'Steve Kinney',
    position: 'A front-end architect',
    disc: 'He taught special education and web development.',
  },
];

const featureListsDom = () => {
  const featureContainer = document.createElement('section');
  featureContainer.setAttribute('class', 'feature');

  const featureTitle = document.createElement('h2');
  featureTitle.setAttribute('class', 'feature-title');
  featureTitle.innerText = 'Our Teachers';
  featureContainer.appendChild(featureTitle);

  const underline = document.createElement('div');
  underline.setAttribute('class', 'underline');
  featureContainer.appendChild(underline);

  const container = document.createElement('div');
  container.setAttribute('class', 'container');
  featureContainer.appendChild(container);

  const featureList = document.createElement('div');
  featureList.setAttribute('class', 'feature-list');
  container.appendChild(featureList);

  const featureList1 = document.createElement('div');
  featureList1.setAttribute('class', 'feature-list');
  container.appendChild(featureList1);

  for (let i = 0; i < teachers.length; i += 1) {
    const featureItem = document.createElement('div');
    featureItem.setAttribute('class', 'feature-item');

    const featureImgContainer = document.createElement('div');
    featureImgContainer.setAttribute('class', 'img-container');
    featureItem.appendChild(featureImgContainer);

    const featureImg = document.createElement('img');
    featureImg.setAttribute('class', 'feature-img');
    featureImg.setAttribute('alt', 'steve');
    featureImg.setAttribute('src', teachers[i].img);
    featureImgContainer.appendChild(featureImg);

    const featureDecription = document.createElement('div');
    featureDecription.setAttribute('class', 'feature-disc');
    featureItem.appendChild(featureDecription);

    const featureHeading = document.createElement('h3');
    featureHeading.setAttribute('class', 'feature-heading');
    featureHeading.innerText = teachers[i].name;
    featureDecription.appendChild(featureHeading);

    const featureHeading2 = document.createElement('h4');
    featureHeading2.setAttribute('class', 'feature-heading2');
    featureHeading2.innerText = teachers[i].position;
    featureDecription.appendChild(featureHeading2);

    const featureBody = document.createElement('p');
    featureBody.setAttribute('class', 'feature-body');
    featureBody.innerText = teachers[i].disc;
    featureDecription.appendChild(featureBody);
    if (i % 2 === 0) {
      featureList.appendChild(featureItem);
    } else {
      featureList1.appendChild(featureItem);
    }
  }
  document.body.appendChild(featureContainer);
};

const menuIcon = document.querySelector('#menu-icon');
const menuToggle = document.querySelector('#menu-toggle');
const menuSection = document.querySelector('#menu-section');
menuIcon.addEventListener('click', () => {
  menuSection.classList.add('menu-section-active');
});

menuToggle.addEventListener('click', () => {
  menuSection.classList.remove('menu-section-active');
});

window.addEventListener('load', featureListsDom);