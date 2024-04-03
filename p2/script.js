const objects =
    [
        {
            "name": "earrings",
            "img": 'narutomaki.png',
            "type": "accessory",
            // "time": 1,
            // "completed": true
        },
        {
            "name": "Learn CSS",
            "img": 'asics.png',
            "type": "shoe",
            // "time": 5,
            // "completed": true
        },
        {
            "name": "Learn Javascript",
            "img": 'bowl.png',
            "type": "ceramic",
            // "time": 10,
            // "completed": true
        },
        {
            "name": "Learn Figma",
            "img": 'noguchi.png',
            "type": "home",
            // "time": 20,
            // "completed": false
        },
        {
            "name": "Learn p5",
            "img": 'moon.png',
            "type": "home",
            // "time": 15,
            // "completed": false
        },
        {
            "name": "my dream dog",
            "img": 'teapot.png',
            "type": "ceramic",
            // "time": -20,
            // "completed": false
        }
    ]


const toolbox = document.querySelector('#toolbox');
const typeFilter = document.querySelector('#type-filter');
// const timeFilter = document.querySelector('#time-filter');
// const timeValue = document.querySelector('output[for="time-filter"]');
let showCategory = 'all';
// let minTime = 0;

renderContent();
updateControls();

function renderContent() {
    toolbox.innerHTML = '';

    for (let i = 0; i < objects.length; i++) {

        const object = objects[i];

        // if (object.time >= minTime) {
        if (showCategory === 'all') {

            const objectElement = document.createElement('div');

            objectElement.className = 'object';

            // if (object.type === showCategory) {
            //     objectElement.className += ' accessory';
            // }

            // objectElement.addEventListener('click', function () {
            //     objectElement.classList.toggle('completed');
            // });

            const img = document.createElement('img');
            img.src = 'img/' + object.img;
            img.alt = object.name;

            // objectElement.innerHTML = `<p>${object.name} - ${object.time} hours</p>`
            objectElement.appendChild(img);
            toolbox.appendChild(objectElement);
        } else if (object.type === showCategory) {

            const objectElement = document.createElement('div');

            objectElement.className = 'object';

            // if (object.type === showCategory) {
            //     objectElement.className += ' accessory';
            // }

            // objectElement.addEventListener('click', function () {
            //     objectElement.classList.toggle('completed');
            // });

            const img = document.createElement('img');
            img.src = 'img/' + object.img;
            img.alt = object.name;

            // objectElement.innerHTML = `<p>${object.name} - ${object.time} hours</p>`
            objectElement.appendChild(img);
            toolbox.appendChild(objectElement);
        }
        // }
    }
}

function updateControls() {

    typeFilter.addEventListener('change', function () {
        showCategory = typeFilter.value;
        renderContent();
    });

    timeFilter.addEventListener('input', function () {
        timeValue.textContent = timeFilter.value;
        minTime = timeFilter.value;
        renderContent();
    });
}