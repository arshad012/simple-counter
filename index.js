
const reset_btn = document.getElementById('reset-btn');
const add_btn = document.getElementById('add-btn');
const minus_btn = document.getElementById('minus-btn');
const count_div = document.getElementById('count-div');
const indicator = document.getElementById('indicator');

let i;

// localStorage.removeItem('counter');

window.onload = () => {
    const count = localStorage.getItem('counter') || 0;
    localStorage.setItem('counter', count);

    i=count;

    startCounter();
}


const startCounter = () => {

    count_div.innerText = i;
}



add_btn.onclick = () => {
    
    i++
    if(i > 33) {
        i = 33;
        indicator.innerText = 'Limit reached';
    }
    else {
        indicator.innerText = null;
    }

    count_div.innerText = i;
    localStorage.setItem('counter', i);
}



minus_btn.onclick = () => {
    
    i--;

    if(i < 0) {
        i=0;
        indicator.innerText = 'Cannot decrease less then "0"';
    }
    count_div.innerText = i;
    localStorage.setItem('counter', i);
}



reset_btn.onclick = () => {
    localStorage.setItem('counter', 0);
    count_div.innerText = 0;

    window.location.reload();
}