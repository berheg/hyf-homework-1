// declaring an array of 10 books
let bookList = [
    "louise_hay_you_can_heal_your_life",
    "mark_myers_javascript", 
    "tara_westover_educated", 
    "rebecca_makkai_great_believers", 
    "robert_martin_clean_coders", 
    "don_colbert_7_pillars_health", 
    "pamela_druckerman_bringing_up_bebe",
    "elysion_fifi_og_luis",
    "world_of_ocean",
    "ui_ux_design",
];

//adding books list to html 
//(using "bookList" as ID identificator and "bookData" as data)
let list = document.getElementById("books");
let unorderedList = document.createElement ('ul');
list.appendChild (unorderedList);


function makeBookList () { 
    for (let i=0; i<bookList.length; i++) {
        // creating 'li' elements
        let listElement = document.createElement ('li');
        listElement.id = bookList[i];

        // creating 'img' elements
        let listElementImg = document.createElement ('img');
        listElementImg.src = bookData[bookList[i]]['cover'];
        listElementImg.alt = 'book cover';
        listElement.appendChild (listElementImg);

        //creating 'div' elements to group headings and paragraph
        let listElementDescription = document.createElement('div');
        
        let listElementHeading = document.createElement ('h3');
        listElementHeading.innerHTML = bookData[bookList[i]]['title'];
        listElementDescription.appendChild (listElementHeading);

        let listElementAuthor = document.createElement ('h4');
        listElementAuthor.innerHTML = bookData[bookList[i]]['author'];
        listElementDescription.appendChild (listElementAuthor);

        let listElementLang = document.createElement ('p');
        listElementLang.innerHTML =  (bookData[bookList[i]]['language']);
        listElementDescription.appendChild (listElementLang);

        listElement.appendChild (listElementDescription);

        unorderedList.appendChild (listElement);
    }
}



// Creating an object with additional info about books
let bookData;

bookData = {
    "louise_hay_you_can_heal_your_life": {
        "title": "You can heal your life",
        "author": "Louise Hay",
        "language": "english",
        'cover': 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-flyer-template-6bd8f9188465e443a5e161a7d0b3cf33.jpg?ts=1456287935',
    },
    "mark_myers_javascript": {
        "title": "A smarter way to learn Javascript",
        "author": "Mark Myers",
        "language": "english",
        'cover': 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-flyer-template-6bd8f9188465e443a5e161a7d0b3cf33.jpg?ts=1456287935',
    },
    "tara_westover_educated": {
        "title": "Educated",
        "author": "Tara Westover",
        "language": "english",
        'cover': 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-flyer-template-6bd8f9188465e443a5e161a7d0b3cf33.jpg?ts=1456287935',
    },
    "rebecca_makkai_great_believers": {
        "title": "Great believers",
        "author": "Rebecca Makkai",
        "language": "english",
        'cover': 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-flyer-template-6bd8f9188465e443a5e161a7d0b3cf33.jpg?ts=1456287935',
    },
    "robert_martin_clean_coders": {
        "title": "Clean coders",
        "author": "Robert Martin",
        "language": "english",
        'cover': 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-flyer-template-6bd8f9188465e443a5e161a7d0b3cf33.jpg?ts=1456287935',
    },
    "don_colbert_7_pillars_health": {
        "title": "7 pillars of health",
        "author": "Don Colbert",
        "language": "russian",
        'cover': 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-flyer-template-6bd8f9188465e443a5e161a7d0b3cf33.jpg?ts=1456287935',
    },
    "pamela_druckerman_bringing_up_bebe": {
        "title": "Bringing up bebe",
        "author": "Pamela Druckerman",
        "language": "russian",
        'cover': 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-flyer-template-6bd8f9188465e443a5e161a7d0b3cf33.jpg?ts=1456287935',

    },
    "elysion_fifi_og_luis": {
        "title": "Fifi og luis",
        "author": "elysion",
        "language": "danish",
        'cover': 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-flyer-template-6bd8f9188465e443a5e161a7d0b3cf33.jpg?ts=1456287935',
    },
    "world_of_ocean": {
        "title": "World of ocean",
        "author": "Peter Radisson",
        "language": "danish",
        'cover': 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-flyer-template-6bd8f9188465e443a5e161a7d0b3cf33.jpg?ts=1456287935',
    },
    "ui_ux_design": {
        "title": "UI/UX design",
        "author": "Paula Madness",
        "language": "english",
        'cover': 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-flyer-template-6bd8f9188465e443a5e161a7d0b3cf33.jpg?ts=1456287935',
    }
}


// creating new Object with pathes to covers for each book
let covers = {
    "louise_hay_you_can_heal_your_life": "./covers/you_can_heal_your_life.jpg",
    "mark_myers_javascript": "./covers/javascript.jpg", 
    "tara_westover_educated": "./covers/educated.jpg", 
    "rebecca_makkai_great_believers": "./covers/great_believers.jpg", 
    "robert_martin_clean_coders": "./covers/clean_coder.jpg", 
    "don_colbert_7_pillars_health": "./covers/7_pillars_health.jpg", 
    "pamela_druckerman_bringing_up_bebe": "./covers/bringing_up_bebe.jpg",
    "elysion_fifi_og_luis": "./covers/Fifi_og_luis.png",
    "world_of_ocean": "./covers/world_of_ocean.jpg",
    "ui_ux_design": "./covers/ui_ux.jpeg",
}


//adding covers to each li element respectively
function addCover () {

    for (let i=0; i<bookList.length; i++) {
        let listElement = document.getElementById (bookList[i]);
        let imgChange = listElement.querySelector ('img');
        imgChange.src = covers[bookList[i]];

    }
}


makeBookList ();
addCover ();




