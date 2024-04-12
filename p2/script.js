const odes =
    [
        {
            "name": "empty"
        },
        {
            "name": "heel",
            "img": 'heel.png',
            "type": "accessory",
        },
        {
            "name": "earrings",
            "img": 'narutomaki.png',
            "type": "accessory",
        },
        {
            "name": "noguchi",
            "img": 'noguchi.png',
            "type": "home",
        },
        {
            "name": "empty"
        },
        {
            "name": "empty"
        },
        {
            "name": "moon",
            "img": 'moon.png',
            "type": "home",
        },
        {
            "name": "tulip",
            "img": 'tulip.png',
            "type": "accessory",
        },
        {
            "name": "empty"
        },
        {
            "name": "empty"
        },
        {
            "name": "necklace",
            "img": 'necklace.png',
            "type": "accessory",
        },
        {
            "name": "stool",
            "img": 'stool.png',
            "type": "home",
        },
        {
            "name": "bowl",
            "img": 'bowl.png',
            "type": "ceramic",
        },
        {
            "name": "empty"
        },
        {
            "name": "empty"
        },
        {
            "name": "empty"
        },
        {
            "name": "tuk",
            "img": 'tuk.png',
            "type": "accessory",
        },
        {
            "name": "knot",
            "img": 'knot.png',
            "type": "accessory",
        },
        {
            "name": "sony",
            "img": 'sony.png',
            "type": "music",
        },
        {
            "name": "teapot",
            "img": 'teapot.png',
            "type": "ceramic",
        },
        {
            "name": "empty"
        },
        {
            "name": "empty"
        },
        {
            "name": "lamp",
            "img": 'lamp.jpg',
            "type": "music",
        },
        {
            "name": "pampshade",
            "img": 'pampshade.png',
            "type": "home",
        },
        {
            "name": "asics",
            "img": 'asics.png',
            "type": "accessory",
        },
        {
            "name": "empty"
        }

    ]

function organize(clicked) {
    toolbox.innerHTML = '';
    showCategory = clicked;

    for (let i = 0; i < odes.length; i++) {
        const ode = odes[i];
        if (showCategory === 'all' || ode.type === showCategory) {
            const odeElement = document.createElement('div');
            odeElement.className = 'ode';

            if (ode.img) { // Check if image exists
                const img = document.createElement('img');
                img.src = 'img/' + ode.img;
                img.alt = ode.name;
                odeElement.appendChild(img);
            }


            toolbox.appendChild(odeElement);
        }
    }
}

let showCategory = 'all';

renderAllContent();

function renderAllContent() {
    toolbox.innerHTML = '';

    for (let i = 0; i < odes.length; i++) {

        const ode = odes[i];
        if (showCategory === 'all' || ode.type === showCategory) {

            const odeElement = document.createElement('div');
            odeElement.className = 'ode';

            if (ode.img) { // Check if image exists
                const img = document.createElement('img');
                img.src = 'img/' + ode.img;
                img.alt = ode.name;
                odeElement.appendChild(img);
            }

            toolbox.appendChild(odeElement);
        }
    }
}


//adding navigation//

document.getElementById("yearn").addEventListener("click", myFunction);


function myFunction() {


    let landing = document.getElementById("landing");
    let sorting = document.getElementById("sorting");
    let landingHidden = landing.getAttribute("hidden");


    if (landingHidden) {


    }

    else {
        landing.setAttribute("hidden", "hidden");
        sorting.removeAttribute("hidden");

    }
}

document.getElementById("odeId").addEventListener("click", mySecondFunction);

function mySecondFunction() {

    let landing = document.getElementById("landing");
    let sorting = document.getElementById("sorting");
    let sortingHidden = sorting.getAttribute("hidden");

    if (sortingHidden) {


    }

    else {
        sorting.setAttribute("hidden", "hidden");
        landing.removeAttribute("hidden");

    }
}