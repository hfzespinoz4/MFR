

function apicall (){
    const url = "https://mfrbase.firebaseio.com";
    const firebaseConfig = {
        apiKey: "AIzaSyDfYhehG0n5I7f-BQjU4hcOP8P4pOaLsd4",
        authDomain: "mfrbase.firebaseapp.com",
        databaseURL: "https://mfrbase.firebaseio.com",
        projectId: "mfrbase",
        storageBucket: "mfrbase.appspot.com",
        messagingSenderId: "930273683907",
        appId: "1:930273683907:web:9460c3574b1633a8c93576"
    };
      // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    fetch(url, firebaseConfig)
    .then (response => {
        return response.json();
    })
    .then(function(myJson){
        console.log(myJson);
    });
}

window.addEventListener('load', apicall());







/*
fetch('http://example.com/movies.json')
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
  console.log(myJson);
});

$.getscript("js/Notas_JS.js", function(){
           agregarRefacciones();
        });



<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.6.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  
</script> */