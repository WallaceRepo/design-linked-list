/// Linked List in JS

class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
var MyLinkedList = function() {
    
         this.head = null
         this.tail = null
         this.size = 0
     
};

MyLinkedList.prototype.get = function(index) {
    if(this.size === 0 || index > this.size-1 || index < 0) return -1
       
       let cur = this.head
       for ( let i =0; i < index; i++) {
           cur = cur.next
       }
    
      return cur.val
};

MyLinkedList.prototype.addAtHead = function(val) {
     let node = new ListNode(val)
     if ( !this.head) {
          this.head = node
         this.tail = node
        
     } else {
          node.next = this.head
         this.head = node
     }
     this.size++
    return this
};

MyLinkedList.prototype.addAtTail = function(val) {
     let node = new ListNode(val)
     if (!this.tail) {
         this.head = node
         this.tail = node
     } else {
         this.tail.next = node
         this.tail = node
     }
    
    this.size++
    return this
};

MyLinkedList.prototype.addAtIndex = function(index, val) {
    let node = new ListNode(val)
    if (index > this.size) return;
    
    if(index === this.size) {
          return this.addAtTail(val)
       }
    if(index <= 0) {
        return this.addAtHead(val)
    }
    
           let cur = this.head
           for( let i =0; i < index-1; i++) {
               cur = cur.next
           }
    // newNode.next = cur.next ? cur.next : null;
    // cur.next = newNode; 
    // mine works too
    
      let temp = cur.next
       cur.next = node
       node.next = temp
       
       this.size++
    return this
   
  };

MyLinkedList.prototype.deleteAtIndex = function(index) {
     if (index >= this.size || index < 0) return
    
     if (index === 0  ) {
        this.head = this.head.next
        this.size--
         return this
     } 
    
   let cur = this.head
    for ( let i = 0; i < index-1; i++) {
        cur = cur.next
    }
    
    cur.next = cur.next.next ? cur.next.next : null
     if(!cur.next) {
         this.tail = cur
    } 
    this.size-- 
    return this;
};
