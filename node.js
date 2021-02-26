class _Node { //named with the underscore because it is a private class, should not be accessed by anything other than a linked list class
    constructor(value, next){
        this.value = value //variable value holds the data
        this.next = next // variable next serves as a pointer to the next node
    }
}

class LinkedList {
    constructor(){
        this.head = null //head indicates the beginning of a list, null because we start with an empty list
    }

    /**************************************** InsertFirst ***************************************/
    //inserting at the beginning of the list O(1)
    insertFirst(item){
        this.head = new _Node(item, this.head)
    }

    /**************************************** Insert Last ****************************************/
    //inserting at the end of the list O(n)
    insertLast(item){
        if(this.head == null){ //check to see if th elist is empty and if it is insert item as the only item
            this.insertFirst(item)
        }
        else { //if its not then start at the list and iterate through until you reach the endof the list adn then insert the item
            let tempNode = this.head
            while(tempNode.next !== null){ //end of list indicated by .next value as null
                tempNode = tempNode.next 
            }
            tempNode.next = new _Node(item, null) //the pointer is null when inserting the item
        }
    }

    insertBefore(item, key){
        if(!this.head) {
            return null
        }

        let currNode = this.head
        let previousNode = this.head
        while((currNode !== null) && (currNode.value !== key)){
            previousNode = currNode
            currNode = currNode.next
        }
        if(currNode == null){
            console.log('key does not exist')
            return
        }
        return this.insertAfter(item, previousNode.value)
    }

    insertAfter(item, key){
        if(!this.head) {
            return null
        }
        
        let currNode = this.head
        while((currNode !== null) && (currNode.value !== key)){
            currNode = currNode.next
        }
        if (currNode == null){
            console.log('key does not exist')
            return
        }
        return currNode.next = new _Node(item, currNode.next)
    }

    insertAt(item, position){
        let currNode =  this.head
        let i = 0
        while((currNode !== null) && (i < position -1 )){
            currNode = currNode.next
            i++
        }
        return this.insertAfter(item, currNode.value)
    }

    /******************************************* Find **********************************************/
    //retrieval of an item from a list O(n)
    find(item){
        let currNode = this.head //start at the beginning of the list
        if(!this.head){ //if the list is empty
            return null
        }
        while(currNode.value !== item){ //while the value of the item is not what we're looking for
            if(currNode.next == null){ //if you reach the end of the list return null, not found in the list
                return null
            }
            else {
                currNode = currNode.next //otherwise go on to the next on the list
            }
        }
        return currNode //return when the value is equal to the item
    }

    /********************************************* Remove ************************************/
    //remove an item O(n)
    remove(item){
        if (!this.head){ // if the list is empty
            return null
        }
        if(this.head.value === item){ // if the item removed is in the beginning of the list, make the next item the first item in the list
            this.head = this.head.next
            return 
        }
        let currNode = this.head //start at head
        let previousNode = this.head //keep track of the previous

        while((currNode !== null) && (currNode.value !== item)){  //while there is a current Node value and it is not equal to the desired item
            previousNode = currNode //set previous = to the current
            currNode = currNode.next //set current = to the next
        }
        if (currNode == null){ //if current node = null it means the item was not found
            console.log('Item not found')
            return
        }
        previousNode.next = currNode.next //set the node containing the value to null 
        /*How it works: the previous node contains the value that last was not equal to the item, so when the while loop exists the next value after the previous node is the desired item, wo set it to null to remove the value */
    }
}

function main(){
    let SLL = new LinkedList()

    SLL.insertFirst('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')
    SLL.insertLast('Tauhida')
    SLL.remove('squirral')
    SLL.insertBefore('Athena', 'Boomer')
    SLL.insertAfter('Hotdog', 'Helo')
    SLL.insertAt('Kat', 3)
    SLL.remove('Tauhida')

    display(SLL)
    size(SLL)
    isEmpty(SLL)
    findPrevious(SLL, 'Starbuck')
    findLast(SLL)
    return SLL
}

main()

function display(list){
    let currNode = list.head
    while( currNode !== null){
        console.log(currNode.value + ' ')
        currNode = currNode.next
    }
    
}

function size(list){
    let currNode = list.head
    let size = 0
    while (currNode !== null){
        size = size + 1
        currNode = currNode.next
    }
    console.log(size)
    return size
}

function isEmpty(list){
    if(list.head == null){
        console.log ('List is empty')
    }
    else{
        console.log('List is not empty')
    }
}

function findPrevious(list, item){
    let currNode = list.head
    let previousNode = list.head

    while((currNode !== null) && (currNode.value !== item)){
        previousNode = currNode
        currNode = currNode.next
    }
    if(currNode == null){
        console.log('item does not exist')
    }
    console.log(previousNode)
    return previousNode
}

function findLast(list){
    let currNode = list.head
    if(currNode == null){
        console.log('list does not exist')
    }
    while (currNode.next !== null){
        currNode = currNode.next
    }

    console.log(currNode)
    return currNode
}