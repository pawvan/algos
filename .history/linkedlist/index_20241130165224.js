//each node contains data means value of the node and next filed (a reference to the next node)
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
//head property to keep track of the first node 
class LinkedList{
    constructor(){
        this.head=null;
    }
    append(data){
        const newNode =  new Node(data);
        if(!this.head){
            this.head= newNode;
           return; 
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next=newNode
    }
    remove(data){
        if(!this.head)return;
        if(this.head.data===data){
            this.head=this.head.next;
        return;
        }
        let current=this.head;
        while(current.next && current.next.data  !==data){
            
        }

    }
}