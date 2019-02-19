class Quiz {
    constructor(name) {
        this.name = name;
    }

    fetchQuestions () {
        return fetch ('https://gist.githubusercontent.com/benna100/c9c38faebea1526fb4e6b6b896a1dc94/raw/9468c385bfb422620676b3669509b0a59b326c42/quiz-questions.json')
            .then (response => response.json())
    }

    renderQuestions (questions) {
        document.querySelector('.loading').innerHTML = '';
        const ul = document.querySelector('ul');
        
       
        questions.forEach (question => {
            let li = document.createElement ('li');
            let title = document.createElement ('h3');
            let content = document.createElement ('p');
            title.innerHTML = question.title;
            content.innerHTML = question.content;

            const select = document.createElement ('select');
            question.options.forEach ((answerOption) => {
                let option = document.createElement('option');
                option.innerHTML = answerOption.content;
                option.setAttribute ('is-answer', answerOption.correct);
                select.appendChild (option);
            })

            li.appendChild (title);
            li.appendChild (content);
            li.appendChild (select);
            ul.appendChild (li);
        })
    }

    showScore () {
        const button = document.querySelector ('button');
        const result = document.querySelector ('.result');

        button.addEventListener ('click', () => {
            let i=0;
            const selectedOptions = document.querySelectorAll ('option:checked');
            selectedOptions.forEach ((userAnswer) => {
                if (userAnswer.getAttribute('is-answer') === 'true') {
                    i++;
                } 
            if (i===selectedOptions.length) {
                result.innerHTML = 'Congratulations, you got '+ i + '/' + selectedOptions.length + ' question right, well done';
                const confettiSettings = { target: 'confetti' };
                const confetti = new ConfettiGenerator(confettiSettings);
                confetti.render();

                let audio = new Audio ('careless-whisper.mp3');
                audio.play();

            }  else {
                result.innerHTML = 'You failed :( Try once more!';
                // // let audio = new Audio ('fail-sound.mp3');
                // audio.play();
            }              
            }) 
        })
    }
}

let quiz1 = new Quiz ('nice quiz');
quiz1.fetchQuestions()
    .then ((questions) => quiz1.renderQuestions(questions))
    .then (() => quiz1.showScore())


