/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  if (typeof capacity !== 'number') return;
  this.aList = new Map();
  this.nCapacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let cache = this.aList;
  if (cache.has(key)) {
    let temp = cache.get(key);
    cache.delete(key);
    cache.set(key, temp);
    return temp;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  let cache = this.aList;
  if (cache.has(key)) {
    cache.delete(key);
  } else if (cache.size >= this.nCapacity) {
    cache.delete(cache.keys().next().value);
  }
  cache.set(key, value);
};
['LRUCache', 'put', 'put', 'put', 'put', 'get', 'get'][([2], [2, 1], [1, 1], [2, 3], [4, 1], [1], [2])];
var obj = new LRUCache(2);
obj.put(2, 1);
obj.put(1, 1);
obj.put(2, 3);
obj.put(4, 1);
var param_2 = obj.get(1);
var param_1 = obj.get(2);

console.log(param_1, param_2);
console.log(obj);
