//Look and reply the next example. This is a fetch with post method. This api is a fake. But in the real world this method save information. When we send information with post we use body for send information by secure way. And we use the header for send information about the information how the format 'application/json'.

 const myPost = {
        title: 'A post about true facts',
        body: 'Once upon a time.....',
        userId: 8888888887
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(myPost),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log("---------- we save our information -----------")
    });

    fetch(`https://jsonplaceholder.typicode.com/post/${myPost.userId}`)
        .then(response => response.json())
        .then(data => {
            console.log("---------- we recover our information -----------");
            console.log(data);
        });
        