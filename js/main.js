let contenedores = document.getElementsByClassName('contenedor');
let arraycontenedores = Array.from(contenedores);
let contenedores1 = document.getElementsByClassName('contenedor1');
let arraycontenedores1 = Array.from(contenedores1);

arraycontenedores.map(cosadentrodelarray => {
    cosadentrodelarray.addEventListener('click', () => {
        cosadentrodelarray.classList.add('cuadradosNegros');
    });
});

arraycontenedores1.map(cosasdentrodelarray => {
    cosasdentrodelarray.addEventListener('click', () => {
        cosasdentrodelarray.classList.add('cuandradosBlancos');

        const parrafo = document.createElement('p');
        parrafo.textContent = 'Soy un cuadrado par !';

        if (cosasdentrodelarray.childNodes.length > 0) {
            cosasdentrodelarray.removeChild(cosasdentrodelarray.childNodes[0]);
        }
        cosasdentrodelarray.appendChild(parrafo);
    });
});
