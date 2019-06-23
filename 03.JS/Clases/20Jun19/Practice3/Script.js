const names = document.querySelector('#names');

const getFormValue = () => {
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const nameItem = document.createElement('li');
    const nameContent = document.createTextNode(fname.value + " " + lname.value);
    nameItem.appendChild(nameContent);
    names.appendChild(nameItem);
}
window.setInterval(getFormValue, 2000);