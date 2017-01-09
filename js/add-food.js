let food = [
    {
        foodName: "Potatoes",
    },
        {
        foodName: "Steak Tar Tar",
    },
        {
        foodName: "Pickled Herring",
    },
        {
        foodName: "Canned Enchiladas",
    },
        {
        foodName: "Broccoli",
    },
];

function showFood(food) {
    let parent = document.querySelector('#show-food ul');
    let child = document.createElement('li');
    let template = document.querySelector('#food-template');

    child.innerHTML = Mustache.render(template.innerHTML, {
        foodName: food.name,
    });
}