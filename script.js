async function buscaEndereco(cep) {
    var msgErro = document.querySelector('#erro');
    msgErro.innerHTML = ''
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var cepJson = await consultaCep.json()
        if (cepJson.erro) {
            throw Error('CEP NÃO EXISTENTE!')
        }

        var cidade = document.querySelector('#cidade')
        var endereco = document.querySelector('#endereco')
        var bairro = document.querySelector('#bairro')
        var estado = document.querySelector('#estado')

        cidade.value = cepJson.localidade
        endereco.value = cepJson.logradouro
        bairro.value = cepJson.bairro
        estado.value = cepJson.uf

        console.log(cepJson);
        console.log(cep.length)
        return cepJson
    } catch (erro) {
        msgErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
        console.log(erro)
    }
}

var cep = document.querySelector('#cep');



cep.addEventListener('focusout', () => {
    buscaEndereco(cep.value)
})


/**    .then(resposta => resposta.json())
    .then(r =>  {
        if(r.erro) {
            throw Error('Esse cep não existe!')
        } else
            console.log(r)
        })
    .catch(erro => console.log(erro))
    .finally(mensagem => console.log('Processamento concluído!')) */