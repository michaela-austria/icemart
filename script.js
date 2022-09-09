const products = {
    "mostPicked": [{
            "id": 1,
            "category": "Ready Meals",
            "name": "Breakfast Sliders",
            "price": 14.51,
            "image": "img/product-most-picked-1.jpeg",
            "description": "Stash these sliders in the freezer for a quick weekday breakfast! To reheat, remove the foil, wrap the sandwich in a paper towel and microwave until hot."
        },
        {
            "id": 2,
            "category": "Dessert",
            "name": "Ben & Jerry's Pints",
            "price": 7,
            "image": "img/product-most-picked-2.jpeg",
            "description": "Ben & Jerry’s ice cream pints are recognizable all over the world. Iconic ice cream flavors into pint-sized packages full of the euphoric chunks and swirls."
        },
        {
            "id": 3,
            "category": "Frozen Food",
            "name": "Cooked Shrimp",
            "price": 25.29,
            "image": "img/product-most-picked-3.jpeg",
            "description": "Defrost in bag overnight in refrigerator or place frozen shrimp in a colander and rinse under cold running water for approximately 5-7 minutes"
        },
        {
            "id": 4,
            "category": "Produce",
            "name": "Organic Blueberries",
            "price": 15.09,
            "image": "img/product-most-picked-4.png",
            "description": "Organic Blueberries. Freshest, most delicious organic produce to your table. Freshness guarantee. Keep frozen. Once thawed, do not refreeze."
        }
    ],
    "mostDessert": [{
            "id": 1,
            "category": "Dessert",
            "name": "Frozen Treat Bar",
            "price": 5.99,
            "image": "img/product-dessert-1.jpeg",
            "description": "Most filling, nutritious snack bars available. These plant-based bars are made with creamy almond butter, so they have the rich texture of real ice cream."
        },
        {
            "id": 2,
            "category": "Dessert",
            "name": "Greek Yogurt Sandwiches",
            "price": 35,
            "image": "img/product-dessert-2.png",
            "description": "Greek yogurt-based treats pack decadent flavor in better-for-you bars, sandwiches and poppables. Nostalgic vanilla bean sandwiches, extra creamy & rich."
        },
        {
            "id": 3,
            "category": "Dessert",
            "name": "Vanilla Dipped Bar",
            "price": 5.99,
            "image": "img/product-dessert-3.jpeg",
            "description": "These super-creamy treats are vegan, gluten-free, nut-free and non-gmo, so they’re a responsible choice for anyone with a dietary restriction."
        },
        {
            "id": 4,
            "category": "Dessert",
            "name": "Chocolate Peanut Popsicle",
            "price": 4.49,
            "image": "img/product-dessert-4.jpeg",
            "description": "Rich chocolate ice cream gets folded with thick swirls of peanut butter, then wrapped in crunchy milk chocolate and salty broken pretzel pieces."
        }
    ],
    "mostBeverages": [{
        "id": 1,
        "category": "Coffee & Tea",
        "name": "Joyba™ Bubble Tea",
        "price": 9.99,
        "image": "img/product-beverage-1.jpeg",
        "description": "Comes with popping boba and has fruity flavors it's also gluten-free and already comes with a straw to puncture the lid."
    },
    {
        "id": 2,
        "category": "Ready To Drink",
        "name": "Captain Morgan Cocktails",
        "price": 19.99,
        "image": "img/product-beverage-2.jpeg",
        "description": "The brand's line is ready to serve and comes in flavors such as Tropical Punch, Long Island Iced Tea, and Mai Tai."
    },
    {
        "id": 3,
        "category": "Soft Drink",
        "name": "Pepsi Mango",
        "price": 5.79,
        "image": "img/product-beverage-3.jpg",
        "description": "Carbonated beverage has a splash of mango juice and is also recommended to be served over ice with a twist of lemon or lime."
    },
    {
        "id": 4,
        "category": "Water",
        "name": "Evian",
        "price": 12.79,
        "image": "img/product-beverage-4.jpg",
        "description": "Contains already a natural and characteristic mineral composition, which gives evian its unique, crisp taste"
    }
]
}


const mostPickedContainer = document.querySelector('#mostPicked');
const mostDessertContainer = document.querySelector('#mostDessert');
const mostBeverageContainer = document.querySelector('#mostBeverages');
const {mostPicked, mostDessert, mostBeverages} = products;

console.log(products, 'products');

const productsFunction = function (container, object) {

    object.forEach((product) => {

        const html = `
                        <div class="col-1-of-4">
                            <div class="card">
                                <div class="card__side card__side--front">
                                    <div class="picture">
                                        <img src="${product.image}" alt="breakfast-sliders">
                                    </div>
                                    <div class="details">
                                        <ul>
                                            <li class="details--category">${product.category}</li>
                                            <li class="details--name">${product.name}</li>
                                            <li class="details--price">$${product.price.toFixed(2)}</li>
                                            <li class="details--review">
                                                <span class="material-symbols-outlined">star</span>
                                                <span class="material-symbols-outlined">star</span>
                                                <span class="material-symbols-outlined">star</span>
                                                <span class="material-symbols-outlined">star</span>
                                                <span class="material-symbols-outlined">star</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="card__side card__side--back">
                                    <div class="picture">
                                        <img src="${product.image}" alt="breakfast-sliders">
                                    </div>
                                    <div class="details">
                                        <ul>
                                            <li class="details--category">${product.category}</li>
                                            <li class="details--name">${product.name}</li>
                                            <li class="details--price">$${product.price.toFixed(2)}</li>
                                            <li class="details--description">
                                                ${product.description}
                                            </li>
                                        </ul>
                                        <a href="#signup-popup" class="btn-buy">Buy now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
    `;

        container.insertAdjacentHTML('beforeend', html);
    })

}


productsFunction(mostPickedContainer, mostPicked);
productsFunction(mostDessertContainer, mostDessert);
productsFunction(mostBeverageContainer, mostBeverages);


const dynamicYear = document.querySelector('.dynamicYear');
const currentDate = new Date().getFullYear();
dynamicYear.textContent = currentDate;
