let contactBtn = document.getElementById('contactNav');
let contactPlate = document.getElementById('contactPlate');
let hid = document.getElementById('hid');
const showContact = () =>{
    contactPlate.style.display = 'block';
    hid.style.display = 'block';
}

const hideContact = () =>{
    contactPlate.style.display = "none";
    hid.style.display = 'none';
}

contactBtn.addEventListener('click', showContact);
hid.addEventListener('click', hideContact);