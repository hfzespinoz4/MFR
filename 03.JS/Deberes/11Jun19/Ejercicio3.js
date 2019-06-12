/*
Exercise 3 - A dinner
Imagine you are a famous singer in a band and you want to invite other musicians to a dinner.

Write an array of every musician and its band in a format musician:band and using only one console log, display the list of assistants in the console.
*/

const invitados = ['Bono : U2', 'Steven Tyler : AeroSmith', 'Dave Mustaine : Metallica', 'Corey Taylor : Slipknot', 'Paul McCarthy : The Beatles']
invitados.forEach((invitados, index) => {
    console.log(index, invitados);
})