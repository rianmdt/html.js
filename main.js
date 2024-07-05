const form = document.getElementById('form-js');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valCampoA = document.getElementById('number-a').value;
    const valCampoB = document.getElementById('number-b').value;

    const valNumeroA = Number(valCampoA);
    const valNumeroB = Number(valCampoB);

    const mensagemSucesso = document.querySelector('.accept-message');
    const mensagemErro = document.querySelector('.error-message');

    const textoSucesso = `O valor <b>${valNumeroB}</b> é maior que o valor <b>${valNumeroA}</b>`;
    const textoErro = `Erro! O valor <b>${valNumeroB}</b> é menor que o valor <b>${valNumeroA}</b>`;

    if (valNumeroB > valNumeroA) {
        mensagemSucesso.innerHTML = textoSucesso;
        mensagemErro.innerHTML = '';
        mensagemSucesso.style.display = 'block';
        mensagemErro.style.display = 'none';
    } else {
        mensagemErro.innerHTML = textoErro;
        mensagemSucesso.innerHTML = '';
        mensagemErro.style.display = 'block';
        mensagemSucesso.style.display = 'none';
    }
    
    document.getElementById('number-a').value = '';
    document.getElementById('number-b').value = '';

    console.log(form);
});