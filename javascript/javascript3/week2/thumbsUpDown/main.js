function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.body.classList.add(`gradient-${getRandomInt(1,4)}`);

const rejectBtn = document.querySelector('.reject');
const acceptBtn = document.querySelector('.accept');
let liTickets = document.querySelectorAll('li');

// function that moves ticket ot the right
const acceptTicket = (ticket) => {
    acceptBtn.addEventListener ('click', () => {
        ticket.style.transform = 'translateX(1000px)';
    })
}

// function that moves ticket ot the left
const rejectTicket = (ticket) => {
    rejectBtn.addEventListener('click', () => {
        ticket.style.transform = 'translateX(-1000px)';
    })
}

// show next ticket
const animateNextLiIntoView = (i) => {
    liTickets[i].style.opacity = '1';
    liTickets[i].style.transform = 'scale(1)';
}

const animateLiOut = () => {
    return promise = new Promise ((resolve) => {
        liTickets.forEach (ticket => {
            acceptTicket(ticket) || rejectTicket (ticket);  
         })
        setTimeout (() => {
            resolve ();
        }, 2000);
    })
}

animateLiOut()
    .then (() => {
        
        animateNextLiIntoView(1);    // in this way it returns ticket that was just moved and changes it's name :))))
    })

