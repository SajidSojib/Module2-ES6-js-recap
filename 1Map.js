/**
 * normally we cant set object or other types as key
 * all keys become string in normal object.
 * 
 * using new Map we can set keys as their own type
 * map=[[key1, value1], [key2, value2], [key3, value3], ...]
 * 
 * map.set(key, value);
 * map.get(key); it returns specific value for specific key
 * map.has(key); it returns true or false, if key exist or not
 * map.delete(key); it deletes specific key and its value
 * map.clear(); it deletes all keys
 * map.size; it returns number of keys
 * map.keys(); it returns all keys as iterator
 * map.values(); it returns all values as iterator
 * map.entries(); it returns all keys and values as specific iterator
 * 
 * we can covert iterator to a whole array we need to use spread operator
 * [...map.keys()]; 
 * 
 * we do not get array or object from map
 * we need to convert map to array or object
 * 
 * we can use only forEach loop for map
 * but we can use forOf loop in map.keys(), map.values()
 * then we can manipulate them
 */
let obj = {
  name: "Sajid",
  age: 20,
  adress: {
    city: "Dhaka",
    country: "Bangladesh",
  },
  "education details": {
    highSchool: "Dhaka",
    college: "Dhaka",
    university: "Dhaka",
  },
};
let course1 = { name: "Programming Hero" };
let course2 = { name: "Next Level Web" };
obj[true] = { status: "unemployed" }; //in object all keys become string
obj[course1] = { course: "level1" }; //we cant set object as key. it becomes [object Object]


// console.log(obj.education details);  // error
// console.log(obj.adress);
// console.log(obj["education details"]);
// console.log(obj);

const map = new Map();
// map.set(course1, {course: "level1"});
// map.set(course2, {course: "level2"});
// console.log(map);
// console.log(map.entries());;
// console.log(map.get(course1));
// console.log(map.has(course2));
// console.log(map.size);
// console.log(map.keys());
// console.log(map.values());
// map.delete(course1);
// console.log(map);
// map.clear();
