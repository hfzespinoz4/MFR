function apicall (){
    let username = document.getElementById('user-search').value;
    fetch(`https://api.github.com/users/${username}`)
    .then(response => {
    if (!response.ok) {
        throw Error(`Exception ${response.status}`);
    }
    return response.json();
    })
    .then(data => ghuserinfo(data))
    .catch(error => alert(error)); 
    return;
    
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
};

function ghrepos (){
    const userReposList = document.getElementById('user-reposlist');
    let usr = document.getElementById('user-search').value;
    fetch(`https://api.github.com/users/${usr}/repos`)
    .then(response => {
    if (!response.ok) {
        throw Error(`Exception ${response.status}`);
    }
    return response.json();
    })
    .then(datarepo => ghrepolist(datarepo))
    .catch(error => alert(error));
    return;

    function ghrepolist(datarepo) {
        const userReposList = document.getElementById('user-reposlist');
        let repos = document.querySelectorAll('li');
        for(i=0; li=repos[i]; i++) {
            li.parentNode.removeChild(li);
        }
        datarepo.map((item, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = '';
            listItem.innerText = item.name;
            listItem.className=index;
            userReposList.appendChild(listItem); 
        });
    };
};

const btn = document.getElementById('btn-search');
    btn.addEventListener('click', function (){
        event.preventDefault();
        apicall();
        ghrepos();
    });