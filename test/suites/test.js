describe('Binary Search Tree', function(){
  describe('Data Structure Properties', function(){
    var bTree = new BinarySearchTree;


    it('should return return an object', function(){
      assert.equal((typeof bTree), 'object');
    });

    it('should have a rebalance method',function(){
      assert.equal((typeof bTree.rebalance), 'function')

    });

    it('should have an addNode method',function(){
      assert.equal((typeof bTree.addNode), 'function')

    });


  });

  describe('Features of a node', function(){

    var bTree = new BinarySearchTree;

    it('should start with a null value for root',function(){
      assert.equal(bTree._root, null);

    });

    it('should add the first node to root', function(){

      assert.equal(bTree._root, null);

      bTree.addNode({name:'list Item 1',
                     id: 1});

      assert.equal(bTree._root.id, 1)



    })

  });

});


