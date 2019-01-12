// array of spirit animals

let spiritAnimal = [
    "The wise owl", 
    "The mysterious fox", 
    "The cute panda",
    "The competitive tiger", 
    "The confident wolf", 
    "The strong bear",
    "The magical alpaca", 
    "The peaceful butterfly", 
    "The powerful elephant", 
    "The energetic spider"]

//selecting element for result
const resultWindow = document.querySelector ('#result');



//function to generate result
const generateSpiritAnimal = () => {
    let randomIndex = 0;
    randomIndex = Math.floor(Math.random() * 10);
    console.log(randomIndex);
    let randomAnimal = spiritAnimal[randomIndex];
    console.log(randomAnimal);

    let name = document.querySelector('input').value;

    console.log(name);

    //ckecking if input has value
    if (name) {
        resultWindow.innerHTML = name + ' - ' + randomAnimal;
    } else {
        resultWindow.innerHTML = 'Please insert your name';
    };

    // changing info and button text to have one more option of Spirit animal
    document.querySelector ('p').innerHTML = "If you don't like first option, push button \"one more option\"";

    let button = document.querySelector ('button');
    button.innerHTML = 'One more option';

}

// showing result
document.querySelector('button').addEventListener('click', generateSpiritAnimal);


