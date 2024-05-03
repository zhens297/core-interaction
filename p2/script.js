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
        },
    ]

// const sketches =
//     [
//         {
//             "name": "empty"
//         },
//         {
//             "name": "heel",
//             "img": 'sketchheel.png',
//             "type": "accessory",
//         },
//         {
//             "name": "earrings",
//             "img": 'sketchnarutomaki.png',
//             "type": "accessory",
//         },
//         {
//             "name": "noguchi",
//             "img": 'sketchnoguchi.png',
//             "type": "home",
//         },
//         {
//             "name": "empty"
//         },
//         {
//             "name": "empty"
//         },
//         {
//             "name": "moon",
//             "img": 'sketchmoon.png',
//             "type": "home",
//         },
//         {
//             "name": "tulip",
//             "img": 'sketchtulip.png',
//             "type": "accessory",
//         },
//         {
//             "name": "empty"
//         },
//         {
//             "name": "empty"
//         },
//         {
//             "name": "necklace",
//             "img": 'sketchnecklace.png',
//             "type": "accessory",
//         },
//         {
//             "name": "stool",
//             "img": 'sketchstool.png',
//             "type": "home",
//         },
//         {
//             "name": "bowl",
//             "img": 'sketchbowl.png',
//             "type": "ceramic",
//         },
//         {
//             "name": "empty"
//         },
//         {
//             "name": "empty"
//         },
//         {
//             "name": "empty"
//         },
//         {
//             "name": "tuk",
//             "img": 'sketchtuk.png',
//             "type": "accessory",
//         },
//         {
//             "name": "knot",
//             "img": 'sketchknot.png',
//             "type": "accessory",
//         },
//         {
//             "name": "sony",
//             "img": 'sketchsony.png',
//             "type": "music",
//         },
//         {
//             "name": "teapot",
//             "img": 'sketchteapot.png',
//             "type": "ceramic",
//         },
//         {
//             "name": "empty"
//         },
//         {
//             "name": "empty"
//         },
//         {
//             "name": "lamp",
//             "img": 'sketchlamp.jpg',
//             "type": "music",
//         },
//         {
//             "name": "pampshade",
//             "img": 'sketchpampshade.png',
//             "type": "home",
//         },
//         {
//             "name": "asics",
//             "img": 'sketchasics.png',
//             "type": "accessory",
//         },
//         {
//             "name": "empty"
//         },
//     ]




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
    // const buttonDivElement = document.createElement('div');
    // buttonDivElement.className = 'buttondiv';

    // var x = document.createElement("button");
    // x.className = 'manifest';
    // x.innerHTML = 'manifest';
    // buttonDivElement.appendChild(x);

    // x.addEventListener('click', function () {

    //     toolbox.innerHTML = '';

    //     for (let i = 0; i < sketches.length; i++) {

    //         const sketch = sketches[i];
    //         if (showCategory === 'all' || sketch.type === showCategory) {

    //             const sketchElement = document.createElement('div');
    //             sketchElement.className = 'sketch';

    //             if (sketch.img) { // Check if image exists
    //                 const img = document.createElement('img');
    //                 img.src = 'img/' + sketch.img;
    //                 img.alt = sketch.name;
    //                 sketchElement.appendChild(img);
    //             }

    //             toolbox.appendChild(sketchElement);
    //         }
    //     }
    // });

    // toolbox.appendChild(buttonDivElement);
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

//button click events//

document.addEventListener("DOMContentLoaded", function () {
    var sortingButtons = document.querySelectorAll("#sorting button");
    var navigationButtons = document.querySelectorAll(".navigation button");
    var previousButton = null;

    sortingButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            if (previousButton !== null) {
                previousButton.classList.remove("button-clicked");
            }
            this.classList.add("button-clicked");
            previousButton = this;
        });
    });

    navigationButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            if (previousButton !== null) {
                previousButton.classList.remove("button-clicked");
            }
            this.classList.add("button-clicked");
            previousButton = this;
        });
    });
});

