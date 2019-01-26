//console.log('Script loaded');
let products = getAvailableProducts ();
console.log(products);

const productList = document.querySelector (".products > ul");

//getting products as a list with buttons 'add to cart'
products.forEach (product => {
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
})

//Price analytics

//Sending data to the server and getting a confirmation
const itemsPrices = products.map (product => product.price);
let getPrice = () => {
    console.log('Success! Data received!')
}
sendPricesToServer(itemsPrices,getPrice);

//Filter using countries

const country = document.querySelector ('.country > select');

const selectedCountry = country.addEventListener ('input', () => {
    products.filter (product => {
    let x = product.shipsTo.forEach (itemCountry => itemCountry);
    return x == country.value;
})});


console.log(selectedCountry);





