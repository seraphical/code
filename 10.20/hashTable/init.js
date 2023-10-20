Hashtable: var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit); //~    [1,2,3,4,5,6,7,8]
  //console.log('this._storage', this._storage);
};

HashTable.prototype.insert = function (k, v) {
  //[key1:valueaaaa]
  var index = getIndexBelowMaxForKey(k, this._limit);
  var buckets = this._storage.get(index) || [];

  // check if there's an element with the same key in the bucket (collision)
  for (var i = 0; i < buckets.length; i++) {
    var array = buckets[i];

    if (array[0] === k) {
      array[1] = v;
      // this._storage.set(index, v);
      return;
    }
  }
  // then we have to set the key
  buckets.push([k, v]);
  this._storage.set(index, buckets);
};

HashTable.prototype.retrieve = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var buckets = this._storage.get(index, v) || [];

  for (var i = 0; i < buckets.length; i++) {
    var array = buckets[i];

    if (array[0] === k) {
      // this._storage.set(index, v);
      return array[1];
    }
  }
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      var currentBucket = bucket[i];
      if (currentBucket[0] === k) {
        bucket.splice(i, 1);
        return;
      }
    }
  }
};

Set: var Set = function () {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function (...items) {
  for (var item of items) {
    if (typeof item === 'string' || typeof item === 'number') {
      if (!this._storage.includes(item)) {
        this._storage.push(item);
      }
    }
  }
};

setPrototype.contains = function (item) {
  //
  return this._storage.includes(item);
};

setPrototype.remove = function (item) {
  var index = this._storage.indexOf(item);
  this._storage.splice(index, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// Instantiate a new graph
var Graph = function () {
  this.nodes = {};
  //this.adjacencyList = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  // first check if the node exists in current node
  if (!this.nodes[node]) {
    //this.nodes[node] = true;
    this.nodes[node] = [];
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  //return !!this.nodes[node];
  // return this.nodes.hasOwnProperty(node);
  //return this.nodes[node] !== undefined;
  //this.ndoes[node] = node !== undefined ? !!node : this.ndoes[node];
  if (this.nodes[node] !== undefined) {
    return true;
  } else {
    return false;
  }
  //this.vertical = vertical !== undefined ? !!vertical : this.vertical;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  // first check if node exists
  if (this.nodes[node]) {
    delete this.nodes[node];
    // nest within if statement
    for (var key in this.nodes) {
      this.removeEdge(key, node);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  return this.nodes[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  /*if (!this.nodes[node]) {

    //this.nodes[node] = true;
    this.nodes[node] = [];
    //[node] = [];
    console.log(this.nodes[node]);
  } */
  if (this.nodes[fromNode] !== undefined && this.nodes[toNode] !== undefined) {
    this.nodes[fromNode].push(toNode);
    this.nodes[toNode].push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  if (this.nodes[fromNode].includes(toNode)) {
    this.nodes[fromNode] = this.nodes[fromNode].filter(
      (node) => node !== toNode,
    );
    this.nodes[toNode] = this.nodes[fromNode].filter(
      (node) => node !== fromNode,
    );
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  for (var key in this.nodes) {
    cb(key);
  }
};

// Check size of tree

Graph.prototype.checkSize = function () {
  return Object.keys(this.nodes).length;
};

/*
 * Complexity: What is the time complexity of the above functions?
O(1)

forEachNode: O(N)
 */
