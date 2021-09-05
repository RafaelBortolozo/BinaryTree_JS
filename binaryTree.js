
class Node{
    constructor(data){
        this.left = null
        this.right = null
        this.data = data
    }
}

class BST{
    constructor(){
        this.root = null
    }
    
    insert(data){
        const node = this.root
        if(node === null){
            this.root = new Node(data)
            return
        }else{
            const searchTree = (node) => {
                
            }
        }
    }
}