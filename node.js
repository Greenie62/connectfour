


class Node{
    constructor(value){
        this.left=null;
        this.right=null;
        this.value=value;
    }


    addNode(node){
        if(node.value > this.value){
            if(this.right === null){
                this.right=node;
            }
            else{
                this.right.addNode(node)
            }
        }

        if(node.value <= this.value){
            if(this.left === null){
                this.left=node;
            }
            else{
                this.left.addNode(node)
            }
        }
    }

    visit(){
        if(this.left !== null){
            this.left.visit()
        }
        console.log(this.value)
        if(this.right !== null){
            this.right.visit()
        }
    }


    findVal(value){
        if(this.value === value){
            console.log("here is your node: " + this.value)
            return this;
         }

         if(this.value >= value){
             if(this.left !== null){
               return  this.left.findVal(value)
             }
         }
         if(this.value < value){
             if(this.right !== null){
              return   this.right.findVal(value)
             }
         }

         console.log("That node doesnt exist!")
    }
}



class Tree{
    constructor(){
        this.root=null;
    }

    addNode(value){
        let node = new Node(value);

        if(this.root == null){
            this.root=node;
        }
        else{
            this.root.addNode(node)
        }
    }


    traverse(){
        this.root.visit()
    }

    search(val){
        this.root.findVal(val)
    }
}


let tree = new Tree();



for(let i=0;i<20;i++){
    tree.addNode(Math.random() * 50 | 0)
}


tree.traverse();
tree.search(24)