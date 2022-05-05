function mouseEnter(){
    let nav = document.querySelector('.navdepth');
    nav.style.height = "205px";
}

function mouseLeave(){
    let nav = document.querySelector('.navdepth');
    nav.style.height = "0";
}

export { mouseEnter, mouseLeave };