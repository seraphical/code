/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function (str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function () {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  result.insert = function (value) {
    // TODO: implement `insert`
    if (!this.storage[getIndexBelowMaxForKey(value)]) {
      if (this.storage.length > (3 / 4) * this.storageLimit) {
        this.storageLimit = this.storageLimit * 2;
      } else if (this.storage.length < (4 / 1) * this.storageLimit) {
        this.storageLimit = sthis.torageLimit / 2;
      }
      storage.push(value);
    } else {
      duplicatedeal = [];
      duplicatedeal.push(this.storage[getIndexBelowMaxForKey(value)]);
      this.storage[getIndexBelowMaxForKey(value)] = [];
      this.storage[getIndexBelowMaxForKey(value)].push(duplicatedeal);
      this.storage[getIndexBelowMaxForKey(value)].push();
      // bucket array ?? how to write it??
    }
  };

  result.retrieve = function (value) {
    // TODO: implement `retrieve`
    if (this.storage[getIndexBelowMaxForKey(value)].length === 1) {
      return this.storage[getIndexBelowMaxForKey(value)];
    } else {
      // hash collision
    }
  };

  result.remove = function (value) {
    // TODO: implement `remove`
    if (this.storage[getIndexBelowMaxForKey(value)].length === 1) {
      this.storage[getIndexBelowMaxForKey(value)].pop();
    } else {
      // hash collision
    }
  };

  return result;
};
