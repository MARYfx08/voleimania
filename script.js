// Acessibilidade: aumentar/diminuir fonte
document.addEventListener('DOMContentLoaded', function() {
    const aumenta = document.getElementById('aumentar-fonte');
    const diminui = document.getElementById('diminuir-fonte');
    let tamanho = 1;

    if(aumenta && diminui) {
        aumenta.addEventListener('click', () => {
            tamanho += 0.1;
            document.body.style.fontSize = `${tamanho}rem`;
        });
        diminui.addEventListener('click', () => {
            tamanho -= 0.1;
            document.body.style.fontSize = `${tamanho}rem`;
        });
    }
});
