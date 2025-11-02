/******* sort ********/
//* normally sort converts everything to string
//* then check each character by ascii value and sort

//* to solve this we use a function in sort
//* for numbers we use compare function sort((a,b) => a-b) ascending order
//* for strings we use compare function sort((a,b) => a.localeCompare(b)) ignoring case


const arr = [1, 3, 14, 2, 22, 11, 5, 43, 100];
const arr2 = [1, 3, 14, 2, 22, 11, 5, 43, 100];
const brr = ["banana", "Apple", "Orange", "cat", "dog"];
const brr2 = ["banana", "Apple", "Orange", "cat", "dog"];

arr.sort();
brr.sort();

console.log(arr);
console.log(brr);

arr2.sort((a, b) => a - b);
brr2.sort((a, b) => a.localeCompare(b));

console.log(arr2);
console.log(brr2);


/******* flat ********/
//* flat converts nested array to single array
//* flat(n) converts nested array to single array with depth n
//* flat(Infinity) is used when we dont know the depth

const crr = [1,[2,5],4,6,[7,8]];
console.log(crr.flat());

const tagsFromPosts=[
    ["code", "js", "react"],
    [["code", "js"], "react", "node"],
    ["code", "js", "react", ["node","express", ["mongodb",["mysql", "postgres"]]]],
];

const individualTags = new Set(tagsFromPosts.flat(Infinity));
console.log([...individualTags]);
