let tree = new BinaryTree();

$( document ).ready(function() {
    $('#insert').click(insert);
    $('#search').click(search);
    $('#remove').click(remove);
    $('#inOrder').click(showInOrder);
    $('#inPreOrder').click(showInPreOrder);
    $('#inPostOrder').click(showInPostOrder);
});

function insert() {
    let num = parseInt(prompt("informe o numero a inserir na arvore:"));
    tree.insert(num);
    show(num);
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
    let num = parseInt(prompt("informe o numero a procurar na arvore:"));
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

