function buttonleft() {
    var text = document.querySelector('p');
    var container = document.querySelector('.container');
    var textbox = document.querySelector('.textbox');
    var image = document.querySelector('img');
    var leftButton = document.querySelector('.button-left');
    var rightButton = document.querySelector('.button-right');
    leftButton.style.display = "none";
    rightButton.style.display = "none";
    container.style.backgroundColor = "red";
    text.innerHTML = 'Anda Berbohong!';
    textbox.innerHTML = "Anda adalah seorang Teknisi"
    image.src = "resx/teknisi.png"
}

function buttonright() {
    var text = document.querySelector('p');
    var container = document.querySelector('.container');
    var textbox = document.querySelector('.textbox');
    var image = document.querySelector('img');
    var leftButton = document.querySelector('.button-left');
    var rightButton = document.querySelector('.button-right');
    leftButton.style.display = "none";
    rightButton.style.display = "none";
    container.style.backgroundColor = "#6FD240";
    text.innerHTML = 'Anda Benar!';
    textbox.innerHTML = "Anda adalah seorang Mahasiswa"
    image.src = "resx/mahasiswa.png"
}
