/**
  * Implement the `countLeaves` function in this Tree class.
  *
  * A leaf node is any node in the tree that has no children. `countLeaves` should
  * traverse the tree, and return the number of leaf nodes the tree contains.
  *
  * Illustration of a tree with three leaves:
  *
  *       * <- root
  *      / \
  *     *    * <- leaf
  *    / \
  *   *   * <- leaf
  *  /
  * * <- leaf
  *
  * Example usage:
  *   var root = new Tree();
  *   root.countLeaves(); // 1
  *   root.addChild(new Tree());
  *   root.countLeaves(); // still 1
  *   root.addChild(new Tree());
  *   root.children[0].addChild(new Tree());
  *   root.children[0].addChild(new Tree());
  *   root.children[0].children[0].addChild(new Tree());
  *   root.countLeaves(); // 3
  *
  */

/*
 * Basic tree that stores a value.
 */

var Tree = function(value){
  this.value = value;
  this.children = [];
  this.count=0
  this.count1=0
};




Tree.prototype.countLeaves = function () {
  // if(this.children.length === 0 ){
  //   this.count++
  //   return this.count
  // }else{
  //   for (var i = 0; i < this.children.length; i++) {
  //     if(typeof this.children[i] === "object"){
  //       if(this.children[i].children.length !== 0 ){
  //       countLeaves()
  //      }else{
  //       this.count++
  //      }
  //     }else{
  //       this.count++
  //     }
  //   }
  // }
  return this.count1
}

/**
  * You shouldn't need to change anything below here, but feel free to look.
  */

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function(child){
this.count1++
    this.children.push(new Tree(child)) 
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  if(true){
    // this if statment mean if we found the child we will delete it 
    this.count1--
  }
};