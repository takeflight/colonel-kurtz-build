/**
 * Given a list of blocks, determine if a provided block
 * is the first child of its parent
 */

'use strict';

var siblingsOf = require('./siblingsOf');

module.exports = function (list, block, delta) {
  var siblings = siblingsOf(list, block);
  var index = siblings.indexOf(block);

  return index !== -1 ? siblings[index + delta] : null;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9zaWJsaW5nQXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQTs7QUFFeEMsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFTLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQzVDLE1BQUksUUFBUSxHQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUE7QUFDdEMsTUFBSSxLQUFLLEdBQU0sUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTs7QUFFdEMsU0FBTyxLQUFLLEtBQUssQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUE7Q0FDckQsQ0FBQSIsImZpbGUiOiJzaWJsaW5nQXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEdpdmVuIGEgbGlzdCBvZiBibG9ja3MsIGRldGVybWluZSBpZiBhIHByb3ZpZGVkIGJsb2NrXG4gKiBpcyB0aGUgZmlyc3QgY2hpbGQgb2YgaXRzIHBhcmVudFxuICovXG5cbmxldCBzaWJsaW5nc09mID0gcmVxdWlyZSgnLi9zaWJsaW5nc09mJylcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBibG9jaywgZGVsdGEpIHtcbiAgbGV0IHNpYmxpbmdzID0gc2libGluZ3NPZihsaXN0LCBibG9jaylcbiAgbGV0IGluZGV4ICAgID0gc2libGluZ3MuaW5kZXhPZihibG9jaylcblxuICByZXR1cm4gaW5kZXggIT09IC0xID8gc2libGluZ3NbaW5kZXggKyBkZWx0YV0gOiBudWxsXG59XG4iXX0=