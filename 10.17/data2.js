Functional :

Queue : 
var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var number = 0;
  // Implement the methods below
  someInstance.enqueue = function(value) {
    //  one will be add
    storage[number] = value;
    number ++;
  };

  someInstance.dequeue = function() {
    if (number > 0) {
      var result = storage[0];
      delete storage[0];
      for (var i = 1; i < number; i++) {
        storage[i - 1] = storage[i];
      }
      number--;
    }
    return result;
  };

  someInstance.size = function() {
    return number;
  };
  return someInstance;
};



//reports a size of zero for a new queue
//reports a size of 2 after adding two items
//reports a size of 1 after adding two items and removing one‣
//reports a size of 0 after removing more items than were added
//allows sequentially adding and removing items




Stack :
var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var number = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    // same as queue but first come last leave;
    storage[number] = value;
    number++;
  };

  someInstance.pop = function() {
    var result = storage[number - 1];
    // [0 : value, 1: value, 2 : value] number : 2 global number : 3;
    if ( number > 0 ) {
      delete storage[number - 1];
      number --;
    }
    return result;
  };

  someInstance.size = function() {
    return number;
  };

  return someInstance;
};



Functional shared : 

Queue :
var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var someInstance = {};

  someInstance.storage = {}; // Attach storage to the instance
  someInstance.number = 0; // Attach number to the instance

  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.number] = value;
    this.number++;
  },

  dequeue: function() {
    if (this.number > 0) {
      var result = this.storage[0];
      delete this.storage[0];
      for (var i = 1; i < this.number; i++) {
        this.storage[i - 1] = this.storage[i];
      }
      this.number--;
      return result;
    }
  },

  size: function() {
    return this.number;
  }
};





Stack :

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.number = 0;
  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.number] = value;
    this.number++;
  },

  pop: function() {
    if (this.number > 0) {
      this.number--;
      var result = this.storage[this.number];
      delete this.storage[this.number];
      return result;
    }
  },

  size: function() {
    return this.number;
  }
};





Prototype : 
Queue :
var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  someInstance.storage = {};
  someInstance.number = 0;
  return someInstance;
};




var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.number] = value;
  this.number++;
};

queueMethods.dequeue = function() {
  if (this.number > 0) {
    var result = this.storage[0];
    delete this.storage[0];
    for (var i = 1; i < this.number; i++) {
      this.storage[i - 1] = this.storage[i];
    }
    this.number--;
    return result;
  }
};

queueMethods.size = function() {
  return this.number;
};




pseudoclassical

Queue:
var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.number = 0;
};
// ~ 

Queue.prototype.enqueue = function(value) {
  this.storage[this.number] = value;
  this.number++;
};

Queue.prototype.dequeue = function() {
  if (this.number > 0) {
    var result = this.storage[0];
    delete this.storage[0];
    for (var i = 1; i < this.number; i++) {
      this.storage[i - 1] = this.storage[i];
    }
    this.number--;
    return result;
  }
};

Queue.prototype.size = function() {
  return this.number;
};





Stack :
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.number = 0;
};
Stack.prototype.push = function(value) {
  this.storage[this.number] = value;
  this.number++;
};

Stack.prototype.pop = function() {
  if (this.number > 0) {
    this.number--;
    var result = this.storage[this.number];
    delete this.storage[this.number];
    return result;
  }
};

Stack.prototype.size = function() {
  return this.number;
};





Es6 :

Queue :
lass Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.number = 0;
  }
  enqueue(value) {
    this.storage[this.number] = value;
    this.number++;
  }
  dequeue() {
    if (this.number > 0) {
      var result = this.storage[0];
      delete this.storage[0];
      for (var i = 1; i < this.number; i++) {
        this.storage[i - 1] = this.storage[i];
      }
      this.number--;
      return result;
    }
  }
  size() {
    return this.number;
  }
}



Stack :
class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.number = 0;
  }
  push(value) {
    this.storage[this.number] = value;
    this.number++;
  }
  pop() {
    if (this.number > 0) {
      this.number--;
      var result = this.storage[this.number];
      delete this.storage[this.number];
      return result;
    }
  }
  size() {
    return this.number;
  }
}

