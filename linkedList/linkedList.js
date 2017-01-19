/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function(){
	var storage = {}
	storage.head = null
	storage.tail = null
  //fill me in!
};
LinkedList.prototype.addToTail = function(value) {
var node = Node(value)
	if(this.head === null){
		this.head = node;
		this.tail = node;
	}else{
		this.tail.next = node;
		this.tail = node;
	}
};
LinkedList.prototype.removeHead = function (){
	var orgHead = this.head;
	this.head = this.head.next
	return orgHead.value

};
LinkedList.prototype.contains = function (value){
	var obj = this.storage
	for(var key in obj){
		if(obj[key] === value){
			return true
		}else if( typeof obj[key] === "object"){
			this.contains(value)
		}
	}
	return false;
};

function Node (value){
	var node = {}
	node.value = value
	node.next = null
}
//write methods here!