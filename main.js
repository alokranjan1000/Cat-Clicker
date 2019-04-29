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
        clicks: 0
    },
    {
        name: "Alka",
        image: "./img/catthree.jpg",
        clicks: 0
    },
    {
        name: "Anuja",
        image: "./img/catfour.jpg",
        clicks: 0
    },
    {
        name: "Akash",
        image: "./img/catfive.jpg",
        clicks: 0
    },
    {
        name: "Aditi",
        image: "./img/catsix.jpg",
        clicks: 0
    }
]

//octopus
const octopus = function(){
    var selectedCat = model[0];

    function init(){
        listView.render(model);
        listView.init();
        catView.init();
        catView.render(selectedCat);
    }

    function catWasClicked(){
        selectedCat.clicks++;
        catView.render(selectedCat);
    }

    function updateCurrentCat(name){
        selectedCat = model.find((cat)=>{
            return cat.name === name;
        });
        catView.render(selectedCat);
    }

    return {
        init: init,
        catWasClicked: catWasClicked,
        updateCurrentCat: updateCurrentCat
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

const listView = function(){
    const listDisplay = document.querySelector(".catlist");

    function init(){
        listDisplay.addEventListener("click", function(e){
            console.log(e.target.textContent);
            octopus.updateCurrentCat(e.target.textContent);
        })
    }

    function render(cats){
        listDisplay.innerHTML = '';
        cats.forEach((cat)=>{
            listDisplay.innerHTML += `<li class ="cat_list">${cat.name}</li>`;
        })
    }

    return{
        render,
        init
    }
}();

document.addEventListener("DOMContentLoaded", octopus.init)
