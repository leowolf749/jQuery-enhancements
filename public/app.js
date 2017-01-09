(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.addEventListener('load', function() {
    let nav_list = document.querySelector('#show-list');
    let nav_add = document.querySelector('#show-add');

    let list_view = document.querySelector('#show-food');
    let add_view = document.querySelector('#add-food');

    let search = document.querySelector('#search');

    nav_list.addEventListener('click', function () {
        list_view.classList.remove('hidden');
        add_view.classList.add('hidden');
    });

    nav_add.addEventListener('click', function () {
        list_view.classList.add('hidden');
        add_view.classList.remove('hidden');
    });

    search.addEventListener('keyup', function () {
        let keepers = [];

        for (let i = 0; i < foodList.length; i++) {
            let food_name = foodList[i].foodName.toLowerCase();
            let search_term = search.value.toLowerCase();
            if (food_name.includes(search_term)) {
                keepers.push(foodList[i]);
            }
        }
        showFood(keepers);
    });

    showFood(foodList);
});

let foodList = require('./foods');

function showFood(food) {
    let parent = document.querySelector('#show-food ul');
    parent.innerHTML = '';

        for (let i = 0; i < food.length; i++) {

        let child = document.createElement('li');

        child.innerHTML = Mustache.render(
            document.querySelector('#food-template').innerHTML,
            food[i]
        );

        parent.appendChild(child);
    }
}

/* this doesn't work yet */
function addFood(food) {
    let input = document.querySelector('#add-food-item');
    
    let addButton = document.querySelector('#submit');
    addButton.addEventListener('click', function() {
        console.log('hi');

    });
}

},{"./foods":2}],2:[function(require,module,exports){
module.exports = [
    {
        foodName: "Cheeseburger",
        description: "1/2lb beef patty w/ cheddar cheese, lettuce, tomato, and onion on a sesame seed bun",
        price: "$" + 8.59,
    },
    {
        foodName: "Smoked Wings",
        description: "10 smoked chicken wings tossed in your choice of wing sauce",
        price: "$" + 9.59,
    },
    {
        foodName: "BLT",
        description: "Bacon, lettuce, tomato, mayonaise on your choice of bread",
        price: "$" + 5.59,
    },
    {
        foodName: "Pizza",
        description: "Piiizzzzaaaaaa",
        price: "$" + 9.99,
    }
];
},{}]},{},[1]);
