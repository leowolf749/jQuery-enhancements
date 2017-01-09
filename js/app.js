let foodList = require('./foods');

window.addEventListener('load', function() {

    let search = document.querySelector('#search');

    $('#tabs').tabs();

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

    showFood(foodList, '#show-food ul');
    showFood(foodList.filter(function (item) {
        if (item.categories.includes("Vegetarian")) {
            return true;
        } else {
            return false;
        }
    }), '#show-veg ul');
});


function showFood(food, selector) {
    let parent = document.querySelector(selector);
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
    let input = document.querySelector('#add-food-name');
    
    let addButton = document.querySelector('#submit');
    addButton.addEventListener('click', function() {
        console.log('hi');

    });
}
