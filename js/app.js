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
