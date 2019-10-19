const pokelist = document.getElementById('pokelist');
let pokemon = document.getElementById('poke-search');

function pokeapiCall (){
   // fetch(`https://pokeapi.co/api/v2/pokemon/`)
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=20&limit=30`)
    .then(response => {
        if (!response.ok) {
            throw Error(`Exception ${response.status}`);
        }
        return response.json();
    })
    .then(pokeinfo => pokemonlist(pokeinfo))
    //.then(pokeinfo => pokebusqueda(pokeinfo)) 
    .catch(error => alert(error)); 
    return;
    
    function pokemonlist(pokeinfo){
        pokeinfo.results.map((pokemon, index) => {
            const pokeitem = document.createElement('li');
            const buttonItem = document.createElement('button');
            const avatarITem = document.createElement('img');
            const nameContainer = document.createElement('span');
            const nameItem = document.createElement('h4');
            const idItem = document.createElement('p');
            nameItem.innerText = pokemon.name;
            nameItem.id = pokemon.name;
            idItem.innerHTML= `No. ${index + 1}`; 
            idItem.className = "pokeid";
            nameContainer.appendChild(nameItem);
            nameContainer.appendChild(idItem);
            buttonItem.appendChild(avatarITem);
            buttonItem.appendChild(nameContainer);
            pokeitem.appendChild(buttonItem);
            pokelist.appendChild(pokeitem);
            let pokename = pokemon.name;
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}/`)
            .then(response =>{
                if (!response.ok){
                    throw Error(`Exception${response.status}`);
                }
                return response.json();
            })
            .then(data => pokedet(data))
            .catch(error => alert(error));
            return;
            function pokedet(data){
                avatarITem.src= data.sprites.front_default;
                data.types.map((pktype) => {
                    const pkttype = document.createElement('span');
                    pkttype.innerText = pktype.type.name;
                    pkttype.id = pktype.type.name;
                    pkttype.className = pktype.type.name;
                    const typegroup = document.createElement('span');
                    typegroup.appendChild(pkttype);
                    typegroup.className= "typegroup"; 
                    nameContainer.appendChild(typegroup);                   
                });        
            };
        });
    };  
};

function pokebusqueda(){
    let a, i, txtValue;
    let filter = pokemon.value;
    li = pokelist.getElementsByTagName('li');
    for (i = 0; i < li.length; i++){
        a = li[i].getElementsByTagName('h4')[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    };
};

window.addEventListener('load', pokeapiCall());
document.addEventListener('keydown', function (e) {
    pokebusqueda();
}, false);
document.addEventListener('keyup', function (e) {
    pokebusqueda();
}, false);
pokemon.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        pokebusqueda();
    } 
}); 
