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
            "name": "asics",
            "img": 'asics.png',
            "type": "shoe",
            // "time": 5,
            // "completed": true
        },
        {
            "name": "bowl",
            "img": 'bowl.png',
            "type": "ceramic",
            // "time": 10,
            // "completed": true
        },
        {
            "name": "noguchi",
            "img": 'noguchi.png',
            "type": "home",
            // "time": 20,
            // "completed": false
        },
        {
            "name": "moon",
            "img": 'moon.png',
            "type": "home",
            // "time": 15,
            // "completed": false
        },
        {
            "name": "teapot",
            "img": 'teapot.png',
            "type": "ceramic",
            // "time": -20,
            // "completed": false
        },
        {
            "name": "heel",
            "img": 'heel.png',
            "type": "shoe",
            // "time": -20,
            // "completed": false
        },
        {
            "name": "knot",
            "img": 'knot.png',
            "type": "accessory",
            // "time": -20,
            // "completed": false
        },
        {
            "name": "necklace",
            "img": 'necklace.png',
            "type": "accessory",
            // "time": -20,
            // "completed": false
        },
        {
            "name": "pampshade",
            "img": 'pampshade.png',
            "type": "home",
            // "time": -20,
            // "completed": false
        },
        {
            "name": "teapot",
            "img": 'lamp.jpg',
            "type": "music",
            // "time": -20,
            // "completed": false
        },
        {
            "name": "teapot",
            "img": 'sony.png',
            "type": "music",
            // "time": -20,
            // "completed": false
        },
        {
            "name": "teapot",
            "img": 'stool.png',
            "type": "home",
            // "time": -20,
            // "completed": false
        },
        {
            "name": "teapot",
            "img": 'tuk.png',
            "type": "shoe",
            // "time": -20,
            // "completed": false
        },
        {
            "name": "teapot",
            "img": 'tulip.png',
            "type": "accessory",
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
        if (showCategory === 'all' || object.type === showCategory) {

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