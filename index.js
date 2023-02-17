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

  teachers.forEach((project) => {
    const featureList = document.createElement('div');
    featureList.setAttribute('class', 'feature-list');
    featureContainer.appendChild(featureList);

    const featureItem = document.createElement('div');
    featureItem.setAttribute('class', 'feature-item');
    featureList.appendChild(featureItem);

    const featureImgContainer = document.createElement('div');
    featureImgContainer.setAttribute('class', 'img-container');
    featureItem.appendChild(featureImgContainer);

    const featureImg = document.createElement('img');
    featureImg.setAttribute('class', 'feature-img');
    featureImg.setAttribute('alt', 'steve');
    featureImg.setAttribute('src', project.img);
    featureImgContainer.appendChild(featureImg);

    const featureDecription = document.createElement('div');
    featureDecription.setAttribute('class', 'feature-disc');
    featureImg.appendChild(featureDecription);

    const featureHeading = document.createElement('h3');
    featureHeading.setAttribute('class', 'feature-heading');
    featureHeading.innerText = project.name;
    featureDecription.appendChild(featureHeading);

    const featureHeading2 = document.createElement('h4');
    featureHeading2.setAttribute('class', 'feature-heading2');
    featureHeading2.innerText = project.position;
    featureDecription.appendChild(featureHeading2);

    const featureBody = document.createElement('p');
    featureBody.setAttribute('class', 'feature-body');
    featureBody.innerText = project.disc;
    featureDecription.appendChild(featureBody);
  });
  return document.body.appendChild(featureContainer);
};

featureListsDom();

const menuIcon = document.querySelector('#menu-icon');
const menuToggle = document.querySelector('#menu-toggle');
const menuSection = document.querySelector('#menu-section');
menuIcon.addEventListener('click', () => {
  menuSection.classList.add('menu-section-active');
});

menuToggle.addEventListener('click', () => {
  menuSection.classList.remove('menu-section-active');
});
