//* some
/**
 ** it returns true if at least one element in array matches the condition
 ** it returns false if all elements are false
 ** mainly used to check roles of the user
 */

const arr = [1, 3, 14, 2, 22, 11, 5, 43, 100];
const isEven = arr.some((num) => num % 2 === 0);
console.log(isEven);

const userRoles = ["user", "guest"];
const featureAccessRoles = ['manager','moderator', "admin"];
const canAccess = userRoles.some((role) => featureAccessRoles.includes(role));
console.log(canAccess);


//* Array.from
/**
 ** it can make array of specific length by passing length as key and value
 ** it has its own map fucntion (value, index)=>
 ** can make new modified array from existing array
 */

// const brr = Array.from({ length: 5 }).fill("sajid");
const brr = Array.from({ length: 5 }, (_, index) => index + 1);
console.log(brr);

const crr = Array.from([1, 2, 3], (value, index) => value*value);
console.log(crr);

const range = (start, end, step) =>{
    return Array.from({length: Math.floor((end - start) / step)+1}, (_, index) => start + index * step);
}
console.log(range(1, 10, 2));