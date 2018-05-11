let tree = new BinaryTree();

$( document ).ready(function() {
    $('#btnInserir').click(insert);
    $('#btnBuscar').click(search);
    $('#btnRemover').click(remove);
    $('#btnEmOrdem').click(showInOrder);
    $('#btnPreOrdem').click(showInPreOrder);
    $('#btnPosOrdem').click(showInPostOrder);
});

function insert() {
    let num = parseInt(prompt("informe o numero a inserir na arvore:"));
    tree.insert(num);
    show('Inserido: '+num);
}

function remove() {
    $('#saida').empty();

}

function showInOrder() {
    $('#saida').empty();
    tree.inOrderTraverse(include);
}

function showInPreOrder() {
    $('#saida').empty();
    tree.preOrderTraverse(include)
}

function showInPostOrder() {
    $('#saida').empty();
    tree.postOrderTraverse(include)
}

function search() {
    let num = parseInt(prompt("informe o numero a inserir na arvore:"));
    tree.search(num);
    
}

function show(item) {
    let element = $('#saida');
    element.empty();
    element.append(`<span class="ui label">${item}</span>`);
}

function include(item) {
    $('#saida').append(`<span class="ui label">${item}</span>`);
}
