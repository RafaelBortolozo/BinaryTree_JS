/*  
    learning purposes, Code based on the video:
        Title: Binary Search Tree - Beau teaches JavaScript
        Channel: freeCodeCamp.org (YouTube)
        link: https://www.youtube.com/watch?v=5cU1ILGy6dM

    additional functions:
        isEmpty()
        preorder()
        inorder()
        posorder()
*/

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

    isEmpty(){
        return this.root === null ? true : false
    }

    findMin(){
        let current = this.root
        while(current.left !== null){
            current = current.left
        }
        return current.data
    }
    
    findMax(){
        let current = this.root
        while(current.right !== null){
            current = current.right
        }
        return current.data
    }

    find(data){
        let current = this.root
        while(current === null || current.data !== data){
            if(current === null){
                return null
            } 
            if(data < current.data){
                current = current.left
            }else{
                current = current.right
            }
        }
        return current.data
    }

    preorder(node){
        let array = []
        const preorderArray = (current) => {
            if(current !== null){
                array.push(current.data)
                preorderArray(current.left)
                preorderArray(current.right)
            }
        }
        preorderArray(node)
        return array
    }

    inorder(node){
        let array = []
        const inorderArray = (current) => {
            if(current !== null){
                inorderArray(current.left)
                array.push(current.data)
                inorderArray(current.right)
            }
        }
        inorderArray(node)
        return array
    }

    posorder(node){
        let array = []
        const posorderArray = (current) => {
            if(current !== null){
                posorderArray(current.left)
                posorderArray(current.right)
                array.push(current.data)
            }
        }
        posorderArray(node)
        return array
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
                while(tempNode.right !== null){
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

const binaryTree = new BST()

binaryTree.insert(5)
binaryTree.insert(1)
binaryTree.insert(9)
binaryTree.insert(2)
binaryTree.insert(10)
binaryTree.insert(7)
binaryTree.insert(5)
binaryTree.insert(12)
binaryTree.remove(5)
console.log('Min: ' + binaryTree.findMin())
console.log('Max: ' + binaryTree.findMax())
console.log('find: ' + binaryTree.find(5))
console.log('isPresent: ' + binaryTree.isPresent(10))
console.log('isEmpty: ' + binaryTree.isEmpty())
console.log('preorder: ' + binaryTree.preorder(binaryTree.root))
console.log('inorder: ' + binaryTree.inorder(binaryTree.root))
console.log('posorder: ' + binaryTree.posorder(binaryTree.root))
