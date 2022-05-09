const ubahWarna = document.getElementById('tUbahWarna');
ubahWarna.onclick = function () {
    document.body.classList.toggle('light-green');
};


const acakWarna = document.createElement('button');
const tAcakWarna = document.createTextNode('Acak Warna');
acakWarna.appendChild(tAcakWarna);
acakWarna.setAttribute('type', 'submit');
ubahWarna.after(acakWarna);

acakWarna.addEventListener('click', function () {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

const sMerah = document.querySelector('input[name=sMerah]');