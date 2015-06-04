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

      bTree.addNode({name : 'list Item 1',
                     id : 1}
                   );

      assert.equal(bTree._root.value.id, 1);

    })

    it('should add an item with an id larger than the root id to the right property of the root node',function(){

      bTree.addNode({name : 'list Item 2',
                     id : 2});

      assert.equal(bTree._root.right.value.id, 2);

    })

    it('should add an item with an id smaller than the root id to the left property of the root node',function(){

      bTree.addNode({name : 'list Item 3',
                     id : 0});

      assert.equal(bTree._root.left.value.id, 0);


    })

    it('should throw an exception when a node with an id that already exists is added', function(){

      function boom(blowup){
        if(blowup)
          throw new Error('BOOM');
      }

      //       assert.throws( function() { boom(true); },
      //                     Error );

      //       assert.throws( function() { bTree.addNode({name : 'list Item 3',
      //                                                id : 0 }) },
      //                     Error)


    })

    it('should be able to add an arbitrary number of nodes, and contains should find them', function(){

      bTree.addNode({name : 'list Item 4',
                     id : 5})

      bTree.addNode({name : 'list Item 4',
                     id : -3})

      console.log(bTree);

      assert.equal(bTree.contains(-3),true);

    })

    it('the id property of the nodes value property on the left, should always be less than the parent id', function(){

      var newTree = new BinarySearchTree;

      newTree.addNode({name : 'Parent',
                       id : 0});

      newTree.addNode({name : 'Parent',
                       id : -1});

      newTree.addNode({name : 'Parent',
                       id : -5});

      newTree.addNode({name : 'Parent',
                       id : -2});

      assert.equal((newTree._root.value.id > newTree._root.left.value.id),true);
      assert.equal((newTree._root.left.value.id > newTree._root.left.left.value.id), true);
      assert.equal((newTree._root.left.left.left === null), true);
      assert.equal((newTree._root.left.left.right.value.id > newTree._root.left.left.value.id), true);



    })


  });

});
