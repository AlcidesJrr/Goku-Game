const textBottom = document.querySelector('#textoBottom');
const textoTop = document.querySelector('#textoTop')
const _img = document.querySelector('#imagem');
const nome = document.querySelector('h1')
let _botao = document.querySelector('#alterar');


_botao.addEventListener('click', () => {
    if (_botao.value == 'primeiro') {
        _img.src = './img/gred2.png'
        textBottom.innerText = '120.000.000'
        textoTop.innerText = 'Super Saiyajin'
        _botao.value = 'segundo'
        function hide() {
            const textoTop = document.querySelector('#textoTop')
            textoTop.style.visibility = 'hidden';
            setTimeout(() => {
                textoTop.style.visibility = '';
            }, 250);
        }
        hide()
    } else if (_botao.value == 'segundo') {
        _img.src = './img/gred3.png'
        textBottom.innerText = '180.000.000'
        textoTop.innerText = 'Super Saiyajin Deus'
        _botao.value = 'terceiro'
        function hide() {
            const textoTop = document.querySelector('#textoTop')
            textoTop.style.visibility = 'hidden';
            setTimeout(() => {
                textoTop.style.visibility = '';
            }, 250);
        }
        hide()
    } else {
        _img.src = './img/goku1.png'
        textBottom.innerText = '60.000.000'
        textoTop.innerText = 'Goku'
        _botao.value = 'primeiro'
        function hide() {
            const textoTop = document.querySelector('#textoTop')
            textoTop.style.visibility = 'hidden';
            setTimeout(() => {
                textoTop.style.visibility = '';
            }, 250);
        }
        hide()
    }
})

typeWriter(nome)
function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 45 * i);
    });
}
  
