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

BinarySearchTree.prototype.addNode = function(listItem){

  if(this._root === null) {
    this._root = listItem;
  } else {
    //traverse the tree
    //figure out where things go

  }

}
