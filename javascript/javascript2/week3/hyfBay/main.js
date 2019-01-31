//console.log('Script loaded');
let products = getAvailableProducts ();
console.log(products);

const productList = document.querySelector (".products > ul");

//getting products as a list with buttons 'add to cart'
let makeList = (arr) => {
    productList.innerHTML = '';

    arr.forEach (product => {
        const item = document.createElement('li');

        const itemName = document.createElement('div');
        itemName.setAttribute ('class', 'name');
        itemName.innerHTML = product.name;
        item.appendChild(itemName);

        const itemPrice = document.createElement('div');
        itemPrice.setAttribute ('class', 'price');
        itemPrice.innerHTML = product.price;
        item.appendChild(itemPrice);

        const itemRating = document.createElement('div');
        itemRating.setAttribute ('class', 'rating');
        itemRating.innerHTML = product.rating;
        item.appendChild(itemRating);

        const itemShipsTo = document.createElement('div');
        itemShipsTo.setAttribute ('class', 'ships-to');
        itemShipsTo.innerHTML = product.shipsTo;
        item.appendChild(itemShipsTo);

        const btnCart = document.createElement('button');
        btnCart.setAttribute ('data-id', product.id);
        btnCart.innerHTML = 'Add to cart';
        item.appendChild(btnCart);
            
        productList.appendChild (item);
    }
)};
makeList (products);

//Price analytics

//Sending data to the server and getting a confirmation
const itemsPrices = products.map (product => product.price);
let getPrice = () => {
    console.log('Success! Data received!')
}
sendPricesToServer(itemsPrices,getPrice);

//Filter using countries

const country = document.querySelector ('.country > select');


country.addEventListener ('input', () => {
    let selectedCountry = country.value;
    let selectedListByCountries = products.filter (product => 
        product.shipsTo.includes (selectedCountry));
    
    makeList (selectedListByCountries);
});



//Filter using search
 const search = document.querySelector ('.search > input');

search.addEventListener ('input', () => {
    let searchingWord = search.value;
    
    let filteredListBySearch = products.filter (product => 
        product.name.toLowerCase().includes (searchingWord.toLowerCase()));
    makeList (filteredListBySearch);
});

// sorting products (price - ascending/descending, name)
const sorting = document.querySelector ('.sort > select');



sorting.addEventListener ('change', () => {
    let sortValue = sorting.value;

    if (sortValue === 'cheap') {
        let sortLowHigh = products.sort ((product1, product2) => product1.price-product2.price);
        console.log(sortLowHigh);
        makeList(sortLowHigh);
    } else if (sortValue === 'expensive') {
        let sortHighLow = products.sort ((product1, product2) => product2.price-product1.price);
        console.log(sortHighLow);
        makeList(sortHighLow);
    } else {
        let sortName = products.sort ((product1, product2) => {
            let nameA = product1.name.toLowerCase ();
            let nameB = product2.name.toLowerCase ();

            if (nameA < nameB) {
                return -1;
            } else if (nameA > nameB) {
                return 1;
            } else {
                return 0;
            }
        });
        console.log(sortName);
        makeList(sortName);
    }
})

   








