let nomesDosAmigos = [];
//Botão adicionar leva o nome do imput na classe "Amigos Incluídos"
function adicionar() {
    let nomeDoAmigo = document.getElementById('nome-amigo').value;
    let listaAmigos = document.getElementById('lista-amigos');
    if (nomesDosAmigos.some(nome => nome.toUpperCase() === nomeDoAmigo.toUpperCase())) {
        alert('Coloque um nome diferente para o sorteio ficar correto, opte pelo sobrenome');
        return;
    }

    nomesDosAmigos.push(nomeDoAmigo);

    if (nomeDoAmigo == '') {
        alert('Escreva um nome antes de clicar no botão adicionar')
        return;
    }


    if (listaAmigos.textContent == '') {
        listaAmigos.textContent = nomeDoAmigo;
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ', ' + nomeDoAmigo;
    }
    document.getElementById('nome-amigo').value = ''
}

//Sortear faz a combinação de nomes
function sortear() {
    if (nomesDosAmigos.length < 4) {
        alert('O mínimo de participantes em um sorteio é de 4 pessoas')
        return;
    }
    embaralharArray(nomesDosAmigos);
    let resultadoSorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < nomesDosAmigos.length; i++) {

        if (i == nomesDosAmigos.length - 1) {
            resultadoSorteio.innerHTML = resultadoSorteio.innerHTML + nomesDosAmigos[i] + ' --> ' + nomesDosAmigos[0] + '<br>'; //break
        } else {
            resultadoSorteio.innerHTML = resultadoSorteio.innerHTML + nomesDosAmigos[i] + ' --> ' + nomesDosAmigos[i + 1] + '<br>';
        }
    }


}

//Reiniciar
function reiniciar() {
    document.getElementById('nome-amigo').value = ''; //value porque o usuário que imputa um valor
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    nomesDosAmigos = [];


}

function excluirAmigo(indice) {
    nomesDosAmigos.splice(indice, 1);
    atualizarLista();
    atualizarSorteio();

}

function embaralharArray(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

function atualizarLista() {
    let listaA = document.getElementById('lista-amigos');
    listaA.innerHTML = '';
}