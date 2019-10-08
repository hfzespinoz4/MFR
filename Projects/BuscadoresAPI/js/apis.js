//(function(){

    let username = document.getElementById('user-search').value;
    const urls = [
        `https://api.github.com/users/${username}`,
        `https://api.github.com/users/${username}/repos`
    ];   
    Promise.all(urls.map(url =>
        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw Error(`Exception ${response.status}`);
            }
            return response.json();
            })
        .then(data => ghuserinfo(data))
        .catch(error => {
            alert(error)
            console.log(error)
        })
    ))
 

    function ghuserinfo(data) {
        const img = document.getElementById('user-avatar');
        img.src=data.avatar_url;
        img.alt="Avatar del usuario";
        const userName = document.getElementById('user-name');
        userName.innerText = data.name;
        const userRepos = document.getElementById('user-repos');
        userRepos.innerText = data.public_repos;
        const userURL = document.getElementById('user-perfil');
        userURL.href = data.html_url;
        userURL.innerText = data.html_url;
    };
        /*const userReposList = document.getElementById('user-reposlist');
        data.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.innerText = item.name;
            listItem.className=index;
            userReposList.appendChild(listItem); 
        }); 
    };
/*

   /*function ghprofile () {
        fetch(`https://api.github.com/users/${username}`)
        .then(response => {
        if (!response.ok) {
            throw Error(`Exception ${response.status}`);
        }
        return response.json();
        })
        .then(data => ghuserInfo(data))
        .catch(error => {
            alert(error)
            console.log(error)
        }); */

        
    //});
    /*
    function ghrepos(dataRepo) {
        const userReposList = document.getElementById('user-reposlist');
        dataRepo.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.innerText = item.name;
            listItem.className=index;
            userReposList.appendChild(listItem); 
        }); 
    };
/*
    function ghreposurl(){
        fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => {
            if (!response.ok) {
                throw Error(`Exception ${response.status}`);
            }
            return response.json();
        })
        .then(dataRepo => ghRepos(dataRepo))
        .catch(error => alert(error));
        return;
*/ 


const countChar = () => {
    string = prompt("Ingresa una frase: ")
    char = prompt("Ingresa la letra a buscar: ")
    index= []
    for (i=0; i< string.length; i++){
        if (string[i].toLowerCase() === char) index.push(i)
    }
    console.log("En la fase: " + string + " aparece " + index.length + " veces la letra " + char)
}

    
    function callApi(){
        ghuserinfo();
        //ghrepos();
    };
 
    const btn = document.getElementById('btn-search');
    btn.addEventListener('click', function (){
        event.preventDefault();
        callApi();
    });

//})();