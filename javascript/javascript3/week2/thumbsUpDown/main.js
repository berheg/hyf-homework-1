function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.body.classList.add(`gradient-${getRandomInt(1,4)}`);

const dishes = [
    {
        name: 'dish1',
        picture: 'pictures/6A4A3509.jpg'
    },
    {
        name: 'dish2',
        picture: 'pictures/3757965.jpg'
    },
    {
        name: 'dish3',
        picture: 'pictures/black-forest-cake-6.jpg'
    },
    {
        name: 'dish4',
        picture: 'pictures/burger-chips.jpg'
    },
    {
        name: 'dish5',
        picture: 'pictures/fish.jpg'
    },
    {
        name: 'dish6',
        picture: 'pictures/21799-Fruit-Dish.jpg'
    },
    {
        name: 'dish7',
        picture: 'pictures/images.jpg'
    }, 
    {
        name: 'dish8',
        picture: 'pictures/meat.jpeg'
    }, 
    {
        name: 'dish9',
        picture: 'pictures/oats.jpg'
    }, 
    {
        name: 'dish10',
        picture: 'pictures/Types-of-sushi.jpg'
    }
]

const rejectBtn = document.querySelector('.reject');
const acceptBtn = document.querySelector('.accept');
let liTickets = document.querySelectorAll('li');

//adding some images
for (let i=0; i<liTickets.length; i++) {
    let img = document.createElement ('img');
    img.src = dishes[i].picture;
    img.style.width = '280px';
    img.style.height = '180px';
    liTickets[i].appendChild (img);
}

// Swiping li element to the side
const animateLiOut = (index, swipeDirection) => {
    if (swipeDirection === "right") {
        liTickets[index].style.transform = 'translateX(1000px)';
    } else {
        liTickets[index].style.transform = 'translateX(-1000px)';
    }
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 700);
    })
}

//animation of the next li element
const animateNextLiIn = (index) => {
    liTickets[index].style.opacity = 1;
    liTickets[index].style.transform = 'scale(1)'
}

let liIndexCounter = 0;

// events when button is pressed
acceptBtn.addEventListener ('click', () => {
    animateLiOut (liIndexCounter, 'right')
        .then (() => {
            animateNextLiIn(liIndexCounter + 1);
            liIndexCounter ++;
        })
        
})

rejectBtn.addEventListener ('click', () => {
    animateLiOut (liIndexCounter, 'left')
        .then (() => {
            animateNextLiIn(liIndexCounter + 1);
            liIndexCounter ++;
    });

})



    


