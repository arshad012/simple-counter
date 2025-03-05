
const reset_btn = document.getElementById('reset-btn');
const add_btn = document.getElementById('add-btn');
const minus_btn = document.getElementById('minus-btn');
const count_div = document.getElementById('count-div');
const indicator = document.getElementById('indicator');

let i;

window.onload = () => {
    
    startCounter();
}


const startCounter = () => {
    const count = localStorage.getItem('counter') || 0;
    localStorage.setItem('counter', count);

    if(count == 33) {
        indicator.innerText = 'Limit reached';
    }

    i=count;

    count_div.innerText = i;
}



add_btn.onclick = () => {
    
    i++
    if(i >= 33) {
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
    else {
        indicator.innerText = null;
    }
    count_div.innerText = i;
    localStorage.setItem('counter', i);
}



reset_btn.onclick = () => {
    localStorage.setItem('counter', 0);
    i=0;
    count_div.innerText = i;
    indicator.innerText = null;
}