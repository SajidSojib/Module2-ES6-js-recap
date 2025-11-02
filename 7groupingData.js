//? we need to count each reviews
//? output: {'A': 3, 'B': 6....}
const reviews = [
  "A",
  "B",
  "E",
  "D",
  "A",
  "C",
  "B",
  "D",
  "A",
  "E",
  "E",
  "D",
  "A",
  "C",
  "B",
  "D",
  "A",
  "E",
  "E",
  "D",
  "A",
  "C",
  "B",
  "D",
  "A",
  "C",
];

const reviewCount=reviews.reduce((table,review)=>{
    // if(table[review]){
    //     table[review]++;
    // }else{
    //     table[review]=1
    // }
    
    table[review] = (table[review] || 0)+1;
    return table
},{})

console.log(reviewCount);