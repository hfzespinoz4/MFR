const bands = [
    {
        name: 'Russian Folk',
        about: 'Russian/Ukranian song which gets faster',
        url: 'https://www.mfiles.co.uk/mp3-downloads/kalinka.mp3',
        poster: 'https://pagefiddler.files.wordpress.com/2014/10/lubok-print-russian-illustration-woodprint-10.jpg'
    },
    {
        name: 'Russian Tetris',
        about: 'the Russian music for "Tetris"',
        url: 'https://www.mfiles.co.uk/mp3-downloads/korobeiniki.mp3',
        poster: 'http://www.todayifoundout.com/wp-content/uploads/2011/02/tetris-e1296803801742.jpg'
    },
    {
        name: 'The Birch Tree',
        about: 'loved by Tchaikovsky',
        url: 'https://www.mfiles.co.uk/mp3-downloads/the-birch-tree.mp3',
        poster: 'https://images-na.ssl-images-amazon.com/images/I/5191vhvoMKL._SS500.jpg'
    },
    {
        name: 'Carol of the Bells ',
        about: 'Ukrainian Christmas Carol',
        url: 'https://www.mfiles.co.uk/mp3-downloads/carol-of-the-bells.mp3',
        poster: 'https://spinsxclusive.files.wordpress.com/2018/12/img_5734-1.jpg'
    }
];

const navList = document.getElementById("nav-list");
const navItem = document.getElementsByTagName('li');
const buttonElement = document.getElementsByTagName('button');
bands.forEach((band, index) => {
    const listItem = document.createElement("li");
    const buttonItem = document.createElement("button");
    const bandPoster = document.createElement("img");
    const span = document.createElement("span");
    listItem.data = band;
    listItem.setAttribute('data-pos', index);
    listItem.setAttribute('id', index);
    bandPoster.src = band.poster;
    bandPoster.alt = "Poster de " + band.name;
    bandPoster.class = index;
    span.innerHTML = band.name;
    buttonItem.appendChild(bandPoster);
    buttonItem.appendChild(span);
    listItem.appendChild(buttonItem);
    listItem.className=index;
    navList.appendChild(listItem);
});

navList.addEventListener('click', (event)  => {
    const t = event.currentTarget;
    const getId = t.getAttribute("id");
    const band = bands[Number(getId)];
    const bandName = document.getElementById('main-name');
    const bandDesc = document.getElementById('main-description');
    const bandPoster = document.getElementById('main-poster');
    const bandAudio = document.getElementById('main-audio');
    bandPoster.src= band.poster;    
    bandAudio.src= band.url;
    bandName.innerHTML = band.name;
    bandDesc.innerHTML = band.about;    
});