//model
const model = [
    {
        name: "Alok",
        image: "./img/catone.jpg",
        clicks: 0
    },
    {
        name: "Arti",
        image: "./img/cattwo.jpg",
        clicks: 3
    }
]

//octopus
const octopus = function(){
    var selectedCat = model[0];

    function init(){
        catView.init();
        catView.render(selectedCat);
    }

    function catWasClicked(){
        selectedCat.clicks++;
        catView.render(selectedCat);
    }
    return {
        init: init,
        catWasClicked: catWasClicked
    }
}();


//view
const catView = function(){
    const catDisplay = document.querySelector(".cat-entry");

    function init(){
        catDisplay.addEventListener("click", octopus.catWasClicked);
    }

    function render(cat){
        catDisplay.innerHTML = `
            <img src = "${cat.image}" alt="Cat Image" id= "catimage">
            <span>Name of the cat: </span>
            <span class= "cat-name">${cat.name}</span><br>
            <span>Number of clicks on this cat: </span>
            <span class="click-count">${cat.clicks}</span>`;
    }

    return {
        render: render,
        init: init
    }
}();

document.addEventListener("DOMContentLoaded", octopus.init)
