var BinarySearchTree = function(){

  this._root = null;

};

BinarySearchTree.prototype.rebalance = function(){
  console.log("rebalanced");
}

//nodes on this binary tree are actually pages? Or dom elements?
//Each node is a ListItem
//Which lives inside of a ListView
//Which is pretty cool
//Let's make the value... an object
//If I wanted to be a badass from the start, I could figure out how
//To load in infinity
//And create a ListItem
//And then make each node a real list item.

//woof. Object first.
//Well since it's not gonna be numbers...
//And it's not gonna be arbitrary made up objects
//Let's mock up a listItem?

//And now we're cooking
//The listview has the following methods

//new ListView($el [, options])... this would be instantiating a new binaryTree

//append($el | listItem)... this is like addNode
//Each node is either a jQuery element or a ListItem(wrapped jQuery element)

//find(selector | $el)... this is like contains... except it returns the node
//there are some interesting behind-the-scenes things done here

//remove()... removes the node from the DOM (and tree) and cleans up after? (whats cleanup)

//cleanup()... unbinds all events, but doesn't remove from dom.

//so adding nodes is done behind the scenes on an append.
//and nodes are either jQuery or listItems

//honestly it doesn't matter that we use a number for value
//its going to be an object

//and what do we need to do with the binary search tree?
//a find operation on an array is linnear time at worst... and then  you have to shift all other values
//a find on a binary tree is logrithmic at worst

//a delete operation on an array is... what time complexity?
//a delete operation on a binary search tree is... what time complexity?


//TODO: Build a better check for whether a node already exists

BinarySearchTree.prototype.addNode = function(listItem){

  var newNode = {
    value : listItem,
    left : null,
    right : null
  }

  if(this._root === null) {
    this._root = newNode;

  } else if (listItem.id > this._root.value.id && this._root.right.value.id !== listItem.id) {
    console.log("right");
    //traverse the tree
    //figure out where things go
    this._root.right = newNode;

  } else if (listItem.id < this._root.value.id && this._root.left.value.id !== listItem.id) {
    console.log("left");
    console.log(listItem.id);
    console.log(this._root.value.id);

    this._root.left = newNode;
  } else {

    throw new Error("A node with that id already exists in this tree");
  }

}
