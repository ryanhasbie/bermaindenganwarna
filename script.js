const ubahWarna = document.getElementById('tUbahWarna');
ubahWarna.onclick = function () {
    document.body.classList.toggle('light-green');
};


const acakWarna = document.createElement('button');
const tAcakWarna = document.createTextNode('Acak Warna');
acakWarna.appendChild(tAcakWarna);
acakWarna.setAttribute('type', 'submit');
ubahWarna.after(acakWarna);