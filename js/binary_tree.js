class BinaryTree{
    constructor(){
        this.root = null;
    }

    insert(element){
    let node = new Node(element);
        if(this.root === null){
            this.root = node;
        }else{
            this.insertNode(this.root, node);
        }
    }
    insertNode(root, node){
        if(node.content < root.content){
            if(root.left === null){
                root.left = node;
            }else{
                insertNode(root.left, node);
            }
        }else{
            if(root.right === null){
                root.right = node;
            }else{
                this.insertNode(root.right, node);
            }
        }
    }
    remove(){
        removeNode(root, callback);
    }
    removeNode(node, content){
        if(node === null){
            return null;
        }if(content < node.content){
            removeNode(node.left, content); 
        }else if (content > node.content) {
            removeNode(node.right, content); 
            return node;    
        }else{
             if (node.left === null && node.right === null){
                node = null;
                return node;
             }if (node.left === null) {
                node = node.right; 
                return node;
             }
                var aux = findMinNode(node.right); 
                node.content = aux.content;
                node.right = removeNode(node.right, aux.content);
                return node; 
        }
    }

    inOrderTraverseNode(node, callback){
        if(node !== null){
            this.inOrderTraverseNode(node.left, callback);
            callback(node.content);
            this.inOrderTraverseNode(node.right, callback);
        }
    }


    preOrderTraverseNode(node, callback){
        if(node !== null){
            callback(node.content);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }


    postOrderTraverseNode(node, callback){
        if(node !== null){
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.content);
        }
    }


    inOrderTraverse(callback){
        this.inOrderTraverseNode(this.root, callback);
    }

    preOrderTraverse(callback){
        this.preOrderTraverseNode(this.root, callback);
    }

    postOrderTraverse(callback){
        this.postOrderTraverseNode(this.root, callback);
    }
    search(){
        return searchNode(root, content);
    }
    searchNode(){
        if (node === null) {     
            return false;    
        }if (content < node.content){  
            return searchNode(node.left, content);

        } else if (content > node.content){
        return searchNode(node.right, content); 

        } else {   
        return true;    
        } 
    }
}
