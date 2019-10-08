// Ejercicio 1: URL API
(function() {
  /*fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      const img = document.querySelector('img');
      img.src = data.message;
      img.alt = 'Un perro';
    }); */

    /*fetch('https://dog.ceo/api/breed/chihuahua/images/random')
        .then(response => response.json())
        .then(data => {
            const img = document.querySelector('img');
            img.src= data.message;
            img.alt= 'Un Chihuahua!';
        })
*/  /*const fetch('https://dog.ceo/api/breed/chihuahua/images/random')
        .then(response => response.json())
        .then(data => {
            const img = document.querySelector('img');
            img.src= data.message;
            img.alt= 'Un Chihuahua!';
        })
*/

   /*Ejercicio 2

    function randomImages(){
        fetch('https://dog.ceo/api/breed/chihuahua/images/random')
        .then(response => response.json())
        .then(data => {
            displayImages(data);
        });
        return; //ayuda visual

        function displayImages(data){
            const img = document.querySelector('img');
                img.src= data.message;
                img.alt= 'Un Chihuahua!';
        }
    }

    const btn = document.querySelector('button');
    btn.addEventListener('click', function (){
        event.preventDefault();
        randomImages();
    })
*/

function githubUser (){

    let username = document.getElementById('user-search').value;

    fetch(`https://api.github.com/users/${username}`)
    .then(response => {
        if(!response.ok){
            throw Error(`Exception ${response.status}`);
        }
        
        return response.json()})
    .then(data => ghuserInfo(data))
    .catch(error => alert(error));
    return;

    function ghuserInfo(data){
        const img = document.getElementById('user-avatar');
            img.src=data.avatar_url;
            img.alt="Avatar del usuario";
        const userName = document.getElementById('user-name');
            userName.innerText = data.name;
        const userRepos = document.getElementById('user-repos');
            userRepos.innerText = data.public_repos;
        
        document.getElementById('container').style = "";
                
    }
}

const btn = document.getElementById('btn-search');
btn.addEventListener('click', function (){
    event.preventDefault();
    githubUser();
})

})();