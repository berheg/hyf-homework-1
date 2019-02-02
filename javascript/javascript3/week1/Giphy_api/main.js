let keywordBox = document.querySelector('.keyword');
let button = document.querySelector('button');
let outputWindow = document.querySelector ('.output') 

// getting gif according to the keyword in search box
const showOutput = () => {
    button.addEventListener ('click', () => {
        let keyword = keywordBox.value;
        getGif (keyword);
    })
}

//fetching gif
const getGif = (keyword) => {
    fetch ('http://api.giphy.com/v1/gifs/search?q=' + keyword + '&api_key=V8k7tIEY8pn62QKBNJ5PuG6rMQrKuyBO')
        .then (response => response.json())
        .then ((gif) => {
            let gifPicture = document.createElement ('img');
            let randomPicture = Math.floor(Math.random()*10);
            gifPicture.src = gif.data[randomPicture].images.original.url;
            outputWindow.innerHTML ='';
            outputWindow.appendChild (gifPicture);
        })
}

showOutput ();

