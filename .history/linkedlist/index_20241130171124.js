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
            current.next=current.next.next;
        }
        if(current.next){
            current.next=current.next.next;
        }
    }
    search(data){
        let current = this.head;
        while(current){
            if(current.data===data){
                return true;
            }
            current=current.next;
        }
        return false;
    }
    print(){
        let current = this.head;
        let result=[];
        while(current){
            result.push(current.data);
            current=current.next;
        }
        console.log(result.join(' -> ');)
    }
}
let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.print();
list.remove(2);
list.print()
console.log(list.search(1));
console.log(list.search(4));
list.print();
//reverse a linked list
function Reverse(){
    let prev=null;
    let current =this.head;
    while(current){
        let next = current.next;
        current.next=prev;
        prev=current;
        current=next;
    }
    this.head=prev;
}
let list2 = new LinkedList();
list2.append(1);
list2.append(2);
list2.append(3);
list2.reverse();
list2.print();
// Detect a Cycle in a Linked List (Floyd’s Tortoise and Hare Algorithm)
function hasCycle(){
    let slow = this.head;
    let fast= this.head;
    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;
        if(slow===fast){
            return true;
        }
    }
    return false;
}
let listcycle = new LinkedList();
listcycle.append(1);
listcycle.append(2)
listcycle.append(3);
list.head.next.next.next.next=list.head.next;
console.log(listcycle.hasCycle())
function FindMiddle(){
    let slow = this.head;
    let fast = this.head;
    while(fast && fast.next){
        slow=slow.next;
        fast = fast.next.next;
    }
    return slow;
}
let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
console.log(list.findMiddle().data); 
function mergeSortedLists(list1,list2){
    let dummy =new Node(0);
    let current = dummy;
    while(list1 &&list2){
        if(list1.data <list2.data){
current.next=list1;
list1=list1.next;

        }
        else{
            current.next=list2;
            list2=list2.next;
        }
        current=current.next;
    }
    if(list1) current.next =list2;
    if(list2)  current.next =list2;
    return dummy.next;
}
let list1 = new LinkedList();
let list22 = new LinkedList();
list1.append(1);
list1.append(3);
list1.append(5);
list22.append(2);
list22.append(4);
list22.append(6);
let merged  = mergeSortedLists(list1.head,list2.head);
while(merged){
    console.log(merged.data);
    merged.merged.data;
}
function removeDuplicates(){
    let current =this.head;
    let seen = new Set();
    while(current && current.next){
seen.add(current.data);
if(seen.has(current.next.data)){
    current.next =current.next.next;
}
else{
    current
}
    }
}