const user1 = fetch('https://api.github.com/search/repositories?q=user:keerthi1822')
    .then ((response) => response.json())
const user2 = fetch('https://api.github.com/search/repositories?q=user:Sanahayat')
    .then ((response) => response.json())
const user3 = fetch('https://api.github.com/search/repositories?q=user:nmoskaleva')
    .then ((response) => response.json())

let usersUl = document.querySelector ('.users')

Promise.all ([user1, user2, user3])
    .then ((responses) => {
        responses.map ((user) => {
            let userLi = document.createElement ('li')
            userLi.innerHTML = user.items[0].owner.login;
            usersUl.appendChild (userLi);

            user.items.map((repo) => {
                    
                let newUl = document.createElement ('ul');
                let li = document.createElement ('li');
                li.innerHTML = repo.name + ': ' + repo.html_url;
    
                newUl.appendChild (li);
                userLi.appendChild (newUl);
                
            });
        })
        
        
        
    })

