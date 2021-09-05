
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
                if(data < node.data){
                    if(node.left === null){
                        node.left = new Node(data)
                        return
                    }else if(node.left !== null){
                        return searchTree(node.left)
                    }
                
                }else if(data > node.data){
                    if(node.right === null){
                        node.right = new Node(data)
                        return
                    }else if(node.right !== null){
                        return searchTree(node.right)
                    }
                
                }else{
                    return null
                }
            }
            return searchTree(node)
        }
    }

    findMin(){
        let current = this.root
        while(current.left !== null){
            current = current.left
        }
        return current
    }
    
    findMax(){
        let current = this.root
        while(current.right !== null){
            current = current.right
        }
        return current
    }

    find(data){
        let current = this.root
        while(current.data !== data){
            if(current === null) return null
            if(data < current.data){
                current = current.left
            }else{
                current = current.right
            }
        }
        return current
    }

    isPresent(data){
        let current = this.root
        while(current.data !== data){
            if(current === null) return false
            if(data < current.data){
                current = current.left
            }else{
                current = current.right
            }
        }
        return true
    }

    remove(data){
        const removeNode = (node, data) => {
            if(node == null){
                return null
            } 
            if(node.data == data){
                
                //no children
                if(node.left == null && node.right == null){
                    return null
                } 

                //no left child
                if(node.left == null){
                    return node.right
                }

                //no right child
                if(node.right == null){
                    return node.left
                }

                //two children
                var tempNode = node.left
                while(tempNode !== null){
                    tempNode = tempNode.right
                }
                node.data = tempNode.data
                node.left = removeNode(node.left, tempNode.data)
                return node 
            }else if(data < node.data){
                node.left = removeNode(node.left, data)
                return node
            }else{
                node.right = removeNode(node.right, data)
                return node
            }
        }
        this.root = removeNode(this.root, data)
    }
}