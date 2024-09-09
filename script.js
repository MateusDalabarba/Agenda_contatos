const form = document.getElementById('form-contato');
const listaContatos = document.getElementById('lista-contatos');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o recarregamento da página ao submeter o formulário
    
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    adicionaContato(nome, telefone);

    // Limpa os campos após adicionar
    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
});

function adicionaContato(nome, telefone) {
    const novaLinha = document.createElement('tr');

    // Cria a célula para o nome
    const colunaNome = document.createElement('td');
    colunaNome.textContent = nome;
    novaLinha.appendChild(colunaNome);

    // Cria a célula para o telefone
    const colunaTelefone = document.createElement('td');
    colunaTelefone.textContent = telefone;
    novaLinha.appendChild(colunaTelefone);

    // Adiciona a linha à tabela
    listaContatos.appendChild(novaLinha);
}
