function Counter() {
    let count = 0;
    this.increament = function () {
        count++
    }
    this.decreament = function () {
        count--;
    }
    this.retrive = function () {
        return count;
    }
}

let A = document.getElementById('A');
let B = document.getElementById('B');
let a = document.getElementById('a');
let b = document.getElementById('b');
let won = document.getElementById('won');
let res = document.getElementById('restart');

let x = new Counter();
let y = new Counter();

a.addEventListener('click', () => {
    x.increament();
    y.decreament();
    A.textContent = x.retrive();
    B.textContent = y.retrive();

    if (x.retrive() >= 10) {
        a.disabled = true;
        b.disabled = true;
        console.log('A Won The Game')
        won.textContent = "A Won The Game"
        res.style.display = 'block';
        rest();
    }
})

b.addEventListener('click', () => {
    y.increament();
    x.decreament();
    B.textContent = y.retrive();
    A.textContent = x.retrive();
    if (y.retrive() >= 10) {
        a.disabled = true;
        b.disabled = true;
        console.log('B Won The Game')
        won.textContent = 'B Won The Game'
        res.style.display = 'block';
        rest();
    }
})

let rest = res.addEventListener('click', () => {
    a.disabled = false;
    b.disabled = false;
    x = new Counter();
    y = new Counter();
    A.textContent = '0';
    B.textContent = '0';
    won.textContent = '';
    res.style.display = 'none';

})